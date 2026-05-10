// ── Data ──────────────────────────────────────────────────────────────────────

const system1 = [
  { letter: "A", name: "Alternate Nostril Breathing", desc: "Nadi Shodhana — close each nostril in turn to balance the nervous system and sharpen focus." },
  { letter: "B", name: "Box Breathing", desc: "4-count inhale, hold, exhale, hold. Used by Navy SEALs to regulate stress and sharpen calm." },
  { letter: "C", name: "Coherent Breathing", desc: "5 breaths per minute (6-second inhale, 6-second exhale) to synchronize heart rate and breath." },
  { letter: "D", name: "Diaphragmatic Breathing", desc: "Belly breathing — engage the diaphragm fully to activate the parasympathetic nervous system." },
  { letter: "E", name: "Extended Exhale", desc: "Inhale for 4 counts, exhale for 8. The longer exhale signals safety to the nervous system." },
  { letter: "F", name: "Fire Breathing (Kapalabhati)", desc: "Short, sharp exhales with passive inhales. Energizes, clears the sinuses, and warms the body." },
  { letter: "G", name: "Guided Visualization Breathing", desc: "Pair slow breath with a calming mental image — a wave, a candle, a forest. Deepens relaxation." },
  { letter: "H", name: "Humming Bee Breath (Bhramari)", desc: "Exhale with a gentle hum to create internal vibration that soothes the mind and lowers heart rate." },
  { letter: "I", name: "Interval Breathing", desc: "Alternate fast and slow breath cycles to build awareness and control of respiratory rhythm." },
  { letter: "J", name: "Jaw-Release Breathing", desc: "Inhale deeply while consciously unclenching the jaw; exhale through parted lips. Melts tension." },
  { letter: "K", name: "Kriya Breathing", desc: "Rhythmic breath sequences from Kundalini yoga designed to cleanse and energize the body." },
  { letter: "L", name: "Lion's Breath (Simhasana)", desc: "Wide eyes, open mouth, tongue out, strong exhale. Releases jaw, throat, and chest tension fast." },
  { letter: "M", name: "Moon Breathing", desc: "Breathe in only through the left nostril to activate calming, cooling lunar energy." },
  { letter: "N", name: "Nasal Breathing", desc: "Commit to nose-only breathing to filter air, boost nitric oxide, and improve CO₂ tolerance." },
  { letter: "O", name: "Ocean Breath (Ujjayi)", desc: "Slight constriction at the back of the throat creates a soft wave-like sound. Anchors attention." },
  { letter: "P", name: "Pursed Lip Breathing", desc: "Inhale through the nose, exhale slowly through pursed lips. Improves airflow and lung efficiency." },
  { letter: "Q", name: "Quiet Breath", desc: "Breathe so gently your breath is almost silent. Trains fine motor control of the respiratory muscles." },
  { letter: "R", name: "Resonance Breathing", desc: "Breathing at your personal resonant frequency (~5 breaths/min) to maximize heart-rate variability." },
  { letter: "S", name: "Sitali (Cooling Breath)", desc: "Curl the tongue into a tube and inhale through it. Rapidly reduces heat and inflammation." },
  { letter: "T", name: "Triangle Breathing", desc: "Equal 3-count inhale, hold, exhale. A gentler version of box breathing for beginners." },
  { letter: "U", name: "Upward-Breath (Uddiyana Bandha)", desc: "After a full exhale, draw the belly up and in under the ribcage. Massages organs and builds core." },
  { letter: "V", name: "Victorious Breath", desc: "Ujjayi with a triumphant, slightly louder exhale — builds heat and confidence during active practice." },
  { letter: "W", name: "Wim Hof Breathing", desc: "30–40 deep, fast breaths followed by a breath-hold. Builds cold tolerance and mental resilience." },
  { letter: "X", name: "Cross-Lateral Breathing", desc: "Sync breath with cross-body movements to integrate left and right brain hemispheres." },
  { letter: "Y", name: "Yoga Complete Breath", desc: "Fill the belly, ribs, then chest on inhale; reverse on exhale. Maximizes lung capacity." },
  { letter: "Z", name: "Zone Breathing", desc: "Ultra-slow breath (2 breaths/min) used by elite athletes to enter deep flow states before performance." },
];

const system2 = [
  { letter: "A", name: "Anxiety Relief", desc: "4-7-8 breathing: inhale 4, hold 7, exhale 8. Cuts acute anxiety in minutes." },
  { letter: "B", name: "Brain Boost", desc: "Brisk nasal breathing for 60 seconds increases oxygen and alertness — your desk-side espresso." },
  { letter: "C", name: "Calm Focus", desc: "Box breathing (4-4-4-4) quiets noise without dimming clarity. Perfect before deep work." },
  { letter: "D", name: "Deep Relaxation", desc: "Progressive muscle release paired with 6-second inhale / 6-second exhale for full-body rest." },
  { letter: "E", name: "Energy Elevation", desc: "Bellows breath (Bhastrika) — rapid, forceful in-and-out through the nose for 30 seconds." },
  { letter: "F", name: "Fear Reset", desc: "Physiological sigh (double inhale through nose, long exhale through mouth) resets panic fast." },
  { letter: "G", name: "Grounding", desc: "Slow 5-5-5 breathing while pressing feet into the floor. Reconnects body and mind to the present." },
  { letter: "H", name: "Heart Rate Regulation", desc: "Coherent breathing at 5 breaths/min maximizes heart-rate variability and cardiovascular resilience." },
  { letter: "I", name: "Immune Support", desc: "Humming on the exhale boosts nasal nitric oxide — a key antiviral and immune-signaling molecule." },
  { letter: "J", name: "Joy Activation", desc: "Quick inhales through the nose with a big smile, then a long sigh out. Triggers the smile-breath loop." },
  { letter: "K", name: "Kinesthetic Awareness", desc: "Breathe into specific body zones (belly, side ribs, back, chest) sequentially to map tension." },
  { letter: "L", name: "Lung Capacity Building", desc: "3-phase inhale (belly → ribs → chest) then slow exhale. Expands total respiratory volume over weeks." },
  { letter: "M", name: "Mood Lift", desc: "10 energizing breaths (short in, long out) followed by 2 minutes of normal breathing. Elevates affect." },
  { letter: "N", name: "Nervous System Reset", desc: "Extended exhale breathing (4 in, 8 out) for 5 minutes resets the autonomic nervous system." },
  { letter: "O", name: "Oxygen Optimization", desc: "Nasal-only + CO₂ tolerance training (5.5-5.5 pattern) for peak cellular oxygen delivery." },
  { letter: "P", name: "Pain Management", desc: "Long, slow exhales during a pain spike reduce pain signals by activating the vagus nerve." },
  { letter: "Q", name: "Quiet Mind", desc: "3-3-3 breathing (inhale, hold, exhale at 3 counts each) creates a mental pause between thoughts." },
  { letter: "R", name: "Recovery", desc: "Post-exercise box breathing (4-4-4-4) accelerates lactate clearance and speeds heart-rate return." },
  { letter: "S", name: "Stress Release", desc: "Physiological sigh on demand — double inhale, long slow exhale — drops cortisol in 90 seconds." },
  { letter: "T", name: "Tension Melt", desc: "Scan from crown to feet, exhaling tension from each area. Pairs with slow diaphragmatic breathing." },
  { letter: "U", name: "Ultimate Calm", desc: "4-6 breathing (4 in, 6 out) for 10+ minutes. The gold standard for deep parasympathetic activation." },
  { letter: "V", name: "Vagal Tone", desc: "Humming, gargling, and cold-water face dips combined with slow breathing to strengthen vagal tone." },
  { letter: "W", name: "Wakefulness", desc: "Alternate-nostril breathing starting with the right nostril activates solar energy and alertness." },
  { letter: "X", name: "eXhale Focus", desc: "Breathe normally but give 100% attention to every exhale for 5 minutes. A simple reset for scattered minds." },
  { letter: "Y", name: "Yoga Nidra Breath", desc: "61-point body scan with slow breath. Induces a sleep-like state while maintaining awareness." },
  { letter: "Z", name: "Zero Stress", desc: "Combine the physiological sigh, coherent breathing, and a cold-water face dip for a full stress reset." },
];

// ── Tab Switching ─────────────────────────────────────────────────────────────

function switchTab(id) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-selected", "false");
  });
  document.getElementById("panel-" + id).classList.add("active");
  const btn = document.getElementById("tab-" + id);
  btn.classList.add("active");
  btn.setAttribute("aria-selected", "true");
}

// ── Card Rendering ────────────────────────────────────────────────────────────

function renderCards(data, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = data.map(({ letter, name, desc }) => `
    <article class="card">
      <div class="card-letter">${letter}</div>
      <div class="card-name">${name}</div>
      <div class="card-desc">${desc}</div>
    </article>
  `).join("");
}

// ── CSV Download ──────────────────────────────────────────────────────────────

function downloadCSV(system) {
  const data = system === "system1" ? system1 : system2;
  const label = system === "system1" ? "Breathing_Techniques" : "Breathing_Intentions";
  const header = "Letter,Name,Description\n";
  const rows = data.map(({ letter, name, desc }) =>
    `${letter},"${name}","${desc.replace(/"/g, '""')}"`
  ).join("\n");
  const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Breathing_Exercises_AZ_${label}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Init ──────────────────────────────────────────────────────────────────────

renderCards(system1, "grid-system1");
renderCards(system2, "grid-system2");
