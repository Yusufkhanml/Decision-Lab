let time = 10;
const timerEl = document.getElementById("timer");

const interval = setInterval(() => {
  timerEl.innerText = `Time left: ${time}s`;
  time--;

  if (time < 0) {
    clearInterval(interval);
    timerEl.innerText = "Time up. Decide now.";
  }
}, 1000);
