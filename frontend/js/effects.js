export function shakeCard() {
  const card = document.querySelector(".right");
  card.classList.add("shake");

  setTimeout(() => {
    card.classList.remove("shake");
  }, 400);
}
