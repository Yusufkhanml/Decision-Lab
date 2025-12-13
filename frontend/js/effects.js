function typeWriter(el, text, speed = 30) {
  let i = 0;
  el.innerHTML = "";
  (function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i++);
      setTimeout(type, speed);
    }
  })();
}

function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const particles = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4
  }));

  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener("load", initParticles);
