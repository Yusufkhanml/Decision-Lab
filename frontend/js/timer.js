let time = 7;
let interval;

export function startTimer() {
  clearInterval(interval);
  time = 7;

  const timerEl = document.getElementById("timer");
  timerEl.innerText = `⏳ ${time}s`;

  interval = setInterval(() => {
    time--;
    timerEl.innerText = `⏳ ${time}s`;

    if (time <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}
