import { getScenario, submitResponse } from "./api.js";

let currentScenario = 1;
const TOTAL_SCENARIOS = 6;

// DOM
const loader = document.getElementById("loader");
const app = document.getElementById("app");

const titleEl = document.getElementById("title");
const storyEl = document.getElementById("story");
const optionsEl = document.getElementById("options");
const imageEl = document.getElementById("scenarioImage");

window.onload = () => {
  showLoader();
  loadScenario(currentScenario);
};

function showLoader() {
  loader.style.display = "flex";
  app.style.display = "none";
}

function showApp() {
  loader.style.display = "none";
  app.style.display = "block";
}

async function loadScenario(id) {
  try {
    const data = await getScenario(id);
    renderScenario(data);
    showApp();
  } catch (err) {
    loader.innerText = "Server waking up… please wait";
  }
}

function renderScenario(data) {
  const scenario = data.scenario;

  titleEl.innerText = scenario.title;

  // Story
  storyEl.innerHTML = "";
  scenario.story_text.split("\n").forEach(line => {
    const p = document.createElement("p");
    p.innerText = line;
    storyEl.appendChild(p);
  });

  // Image
  imageEl.src = scenario.image_url;
  imageEl.onerror = () => {
    imageEl.style.display = "none";
  };

  // Options
  optionsEl.innerHTML = "";
  data.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.option_text;

    btn.onclick = async () => {
      // UI moves instantly
      currentScenario++;
      showLoader();

      // Fire & forget backend save
      submitResponse({
        scenario_id: scenario.scenario_id,
        option_id: option.option_id
      }).catch(() => {});

      // Next scenario immediately
      if (currentScenario <= TOTAL_SCENARIOS) {
        loadScenario(currentScenario);
      } else {
        window.location.href = "end.html";
      }
    };

    optionsEl.appendChild(btn);
  });
}
