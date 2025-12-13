function lockButtons(seconds) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);

  setTimeout(() => {
    buttons.forEach(b => b.disabled = false);
  }, seconds * 1000);
}
