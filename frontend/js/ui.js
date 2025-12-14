let scenarioId = Number(localStorage.getItem("scenario_id"));
let unlocked = false;

window.onload = async () => {
  const data = await getScenario(scenarioId);

  document.getElementById("title").innerText = data.scenario.title;
  document.getElementById("story").innerText = data.scenario.story_text;

  speak(data.scenario.story_text);

  const img = document.getElementById("visual");
  if (data.scenario.image_url) {
    img.src = data.scenario.image_url;
  } else {
    img.style.display = "none";
  }

  renderOptions(data.options);
  startTimer(7);
};

function renderOptions(options) {
  const box = document.getElementById("options");
  box.innerHTML = "";

  options.forEach((o, i) => {
    const btn = document.createElement("button");
    btn.innerText = `${i+1}. ${o.option_text}`;
    btn.onclick = () => choose(o);
    btn.disabled = true;
    btn.className = "option";
    box.appendChild(btn);
  });
}

function choose(option) {
  if (!unlocked) return;

  submitResponse({
    user_id: "anonymous",
    scenario_id: scenarioId,
    option_id: option.option_id,
    choice_type: option.choice_type,
    choice_text: option.option_text
  });

  localStorage.setItem("scenario_id", scenarioId + 1);
  location.reload();
}

document.addEventListener("keydown", e => {
  if (!unlocked) return;
  const btns = document.querySelectorAll(".option");
  if (btns[e.key - 1]) btns[e.key - 1].click();
});
