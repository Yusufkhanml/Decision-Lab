import { getScenario, submitResponse } from "./api.js";
import { startTimer } from "./timer.js";
import { shakeCard } from "./effects.js";
import { speak, stopVoice, toggleVoice } from "./voice.js";

let currentId = 1;

window.onload = () => {
  document
    .getElementById("voiceToggle")
    .addEventListener("click", function () {
      toggleVoice(this);
    });

  loadScenario();
};

async function loadScenario() {
  try {
    const data = await getScenario(currentId);

    document.getElementById("title").innerText = data.scenario.title;
    document.getElementById("story").innerText = data.scenario.story_text;

    document.getElementById("visual").src =
      data.scenario.gif_url || data.scenario.image_url;

    speak(data.scenario.story_text);

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    data.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = opt.option_text;

      btn.onclick = async () => {
        stopVoice();

        await submitResponse({
          user_id: "anonymous",
          scenario_id: data.scenario.scenario_id,
          option_id: opt.option_id,
          choice_type: opt.choice_type,
          choice_text: opt.option_text,
        });

        currentId++;
        shakeCard();
        loadScenario();
      };

      optionsDiv.appendChild(btn);
    });

    startTimer();
  } catch {
    stopVoice();
    document.body.innerHTML = "<h2>All scenarios completed</h2>";
  }
}
