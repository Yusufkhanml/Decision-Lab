const scenarios = [
  "Choose MSc or start a job?",
  "Gym or home workout?",
  "Startup or corporate job?",
  "Save money or invest?"
];

document.getElementById("scenarioText").innerText =
  scenarios[Math.floor(Math.random() * scenarios.length)];
