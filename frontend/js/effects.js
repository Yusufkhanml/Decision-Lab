function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 0.9;
  msg.pitch = 0.9;
  speechSynthesis.speak(msg);
}

setInterval(() => {
  const opts = document.querySelectorAll(".option");
  opts.forEach(b => {
    b.style.opacity = Math.random() > 0.5 ? "1" : "0.85";
  });
}, 1200);
