const API_BASE = "https://decision-lab-backend-v2.onrender.com/api";

export async function getScenario(id) {
  const res = await fetch(`${API_BASE}/scenarios/${id}`);
  if (!res.ok) throw new Error("Scenario load failed");
  return res.json();
}

export async function submitResponse(payload) {
  await fetch(`${API_BASE}/response`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
