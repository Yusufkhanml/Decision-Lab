let synth = window.speechSynthesis;
let utterance = null;
let enabled = true;

export function speak(text) {
  if (!enabled || !text) return;

  stopVoice();

  utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  utterance.volume = 1;

  const voices = synth.getVoices();
  utterance.voice = voices.find(v => v.lang.includes("en")) || voices[0];

  synth.speak(utterance);
}

export function stopVoice() {
  if (synth.speaking) synth.cancel();
}

export function toggleVoice(btn) {
  enabled = !enabled;
  btn.innerText = enabled ? "🔊 Voice ON" : "🔇 Voice OFF";
  if (!enabled) stopVoice();
}
