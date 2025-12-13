window.onload = async () => {
  const params = new URLSearchParams(window.location.search);
  const scenarioId = parseInt(params.get("scenario"));

  const data = await getScenario(scenarioId);

  document.getElementById("title").innerText = data.scenario.title;

  const storyEl = document.getElementById("story");
  typeWriter(storyEl, data.scenario.story_text);

  const progress = document.getElementById("progress");
  progress.style.setProperty("--progress", `${(scenarioId / 6) * 100}%`);

  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = data.options
    .map(o => `<button onclick="choose(${scenarioId},${o.option_id})">${o.option_text}</button>`)
    .join("");

  lockButtons(7);
};

async function choose(scenarioId, optionId) {
  document.body.classList.add("slide-out");

  await sendResponse({
    user_id: "user_anon",
    scenario_id: scenarioId,
    option_id: optionId
  });

  const next = scenarioId + 1;
  if (next <= 6) {
    setTimeout(() => {
      location.href = `scenario.html?scenario=${next}`;
    }, 600);
  } else {
    alert("Done. Thank you.");
  }
}
