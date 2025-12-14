function startTimer(seconds) {
  let t = seconds;
  const label = document.getElementById("timer");

  const i = setInterval(() => {
    label.innerText = `Think... ${t}s`;
    t--;

    if (t < 0) {
      clearInterval(i);
      label.innerText = "Choose now";
      unlock();
    }
  }, 1000);
}

function unlock() {
  unlocked = true;
  document.querySelectorAll(".option")
    .forEach(b => b.disabled = false);
}
