// index.html logic
const startBtn = document.getElementById("startBtn");
if (startBtn) {
  startBtn.onclick = () => {
    window.location.href = "scenario.html?scenario_id=1";
  };
}

// scenario.html logic
const params = new URLSearchParams(window.location.search);
const scenarioId = params.get("scenario_id");

if (scenarioId) {
  loadScenario(parseInt(scenarioId));
}

async function loadScenario(id) {
  try {
    const data = await getScenario(id);

    document.getElementById("title").innerText = data.scenario.title;
    document.getElementById("story").innerText = data.scenario.story_text;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    data.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt.option_text;
      btn.onclick = async () => {
        await submitResponse("guest", id, opt);
        window.location.href = scenario.html?scenario_id=${id + 1};
      };
      optionsDiv.appendChild(btn);
    });

  } catch (err) {
    alert(err.message);
  }
}