const API_BASE = "https://decision-lab-backend-v2.onrender.com/api";

async function getScenario(id) {
  const res = await fetch(${API_BASE}/scenarios/${id});
  if (!res.ok) throw new Error("Failed to load scenario");
  return res.json();
}

async function submitResponse(userId, scenarioId, option) {
  const res = await fetch(${API_BASE}/response, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: userId,
      scenario_id: scenarioId,
      option_id: option.option_id,
      choice_type: option.choice_type,
      choice_text: option.option_text
    })
  });

  if (!res.ok) throw new Error("Failed to submit response");
}