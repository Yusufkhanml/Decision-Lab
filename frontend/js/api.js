const API_BASE = "https://decision-lab.onrender.com";


async function getScenario(id) {
  const res = await fetch(`${API_BASE}/scenario/${id}`);
  return res.json();
}

async function sendResponse(payload) {
  await fetch(`${API_BASE}/response/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}

