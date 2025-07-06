let startTime, endTime;

function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // 1s to 6s delay
}

function getRandomPosition() {
  const box = document.getElementById("box");
  const maxWidth = window.innerWidth - 100;
  const maxHeight = window.innerHeight - 100;

  box.style.top = Math.floor(Math.random() * maxHeight) + "px";
  box.style.left = Math.floor(Math.random() * maxWidth) + "px";
}

function showBox() {
  getRandomPosition();
  const box = document.getElementById("box");

  box.style.backgroundColor = getRandomColor();
  box.style.display = "block";
  startTime = Date.now();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function appearAfterDelay() {
  document.getElementById("box").style.display = "none";
  setTimeout(showBox, getRandomTime());
}

document.getElementById("box").onclick = function () {
  endTime = Date.now();
  let reactionTime = (endTime - startTime) / 1000;
  document.getElementById("result").textContent = "Your reaction time: " + reactionTime + " seconds";
  appearAfterDelay();
};

// Start on page load
appearAfterDelay();
