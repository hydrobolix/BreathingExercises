// ── Data ──────────────────────────────────────────────────────────────────────

const system1 = [
  {
    letter: "A", sound: 'Deep "Ahhh"',
    effect: "Deep oxygenation & expansion",
    location: "Fills entire torso from belly to shoulders",
    howTo: "Inhale deeply through the nose while silently sounding 'Ahhh' in your mind. Let the breath fill your torso from the bottom up — belly, ribs, chest. Exhale slowly through the mouth, letting everything soften."
  },
  {
    letter: "B", sound: 'Soft belly "Buh"',
    effect: "Creates balance & stability",
    location: "Broadly into the belly",
    howTo: "Place one hand on your belly. Inhale gently through the nose, letting only the belly rise — chest stays still. Exhale slowly and feel the belly fall. Keep the 'Buh' sensation soft and grounded."
  },
  {
    letter: "C", sound: 'Calm "Ccc"',
    effect: "Circulates calm energy",
    location: "Expands sideways into the chest and ribs",
    howTo: "Inhale slowly for 4 counts, feeling the chest expand sideways like a balloon. Exhale for 4 counts with a quiet 'Ccc' sound on the lips. Let the rhythm carry a sense of circulating calm."
  },
  {
    letter: "D", sound: 'Diaphragmatic "Duh"',
    effect: "Deep grounding draw",
    location: "Draws deeply downward into the diaphragm",
    howTo: "Place both hands on your lower belly. Inhale through the nose and press your hands outward as the diaphragm drops. Exhale slowly, letting the belly fall back. Feel the 'Duh' pull go all the way down."
  },
  {
    letter: "E", sound: 'Extended "Ehhh"',
    effect: "Releases & empties tension",
    location: "Empties the lungs completely on a full exhale",
    howTo: "Inhale for 4 counts. Exhale slowly for 8 counts — twice as long as the inhale — with a quiet 'Ehhh' sound. Squeeze every last bit of air out. Feel all tension drain on the out-breath."
  },
  {
    letter: "F", sound: 'Full "Fff"',
    effect: "Floods with fresh energy",
    location: "Floods the entire frame from core to fingertips",
    howTo: "Take a full, deep inhale from belly to chest. Exhale completely, squeezing air out with a 'Fff' sound through the teeth. Let the next inhale flood in naturally without effort."
  },
  {
    letter: "G", sound: 'Gentle "Guh"',
    effect: "Grounds and gathers energy",
    location: "Gathers throughout the body toward the center",
    howTo: "Inhale slowly through the nose with a gentle 'Guh' sensation gathering inward. Feel the breath collect at your center. Exhale fully, feeling heavy and grounded in your seat."
  },
  {
    letter: "H", sound: '"Hmm" (humming)',
    effect: "Deep pull & vibration",
    location: "Deep pull into the core with skull resonance",
    howTo: "Close your lips and inhale through the nose. Exhale with a steady 'Hmm' hum, keeping lips sealed. Feel the vibration spread through your chest and skull. Keep the hum even until empty."
  },
  {
    letter: "I", sound: 'Inward "Eee"',
    effect: "Invigorates inner awareness",
    location: "Concentrates inward into the inner core",
    howTo: "Inhale sharply through the nose with a bright 'Eee' sensation pulling inward to the center. Hold for 2 counts. Exhale slowly, maintaining awareness of your inner core."
  },
  {
    letter: "J", sound: 'Joyful "Juh"',
    effect: "Playful energy boost",
    location: "Pulses lightly through the chest and upper body",
    howTo: "Inhale playfully through the mouth with a bouncy 'Juh' feeling. Let the breath feel light and fun — almost like a laugh. Exhale with a quiet smile, releasing any stiffness."
  },
  {
    letter: "K", sound: 'Kinetic "Kah"',
    effect: "Keeps energy flowing",
    location: "Kicks oxygen dynamically through the mid-body",
    howTo: "Inhale quickly and powerfully through the nose — a dynamic 'Kah' kick. Hold briefly at the top. Exhale forcefully, keeping energy moving. This is a short, active breath."
  },
  {
    letter: "L", sound: 'Long "Lll"',
    effect: "Lifts life force",
    location: "Loads long and upward into the lungs",
    howTo: "Inhale slowly and fully, drawing breath upward through the lungs with a long 'Lll' sensation. Feel the lift from belly to crown. Exhale gently, maintaining the sense of height."
  },
  {
    letter: "M", sound: 'Mindful "Mmm"',
    effect: "Merges with calm focus",
    location: "Measured and even throughout the lungs",
    howTo: "Close your eyes and inhale mindfully through the nose. Exhale with a soft 'Mmm' hum. Stay present with each breath, noticing the merger of body and mind. No rushing."
  },
  {
    letter: "N", sound: 'Nasal "Nnn"',
    effect: "Nurtures present-moment calm",
    location: "Nourishes through the nasal passages and sinuses",
    howTo: "Seal your lips and breathe only through the nose. Inhale with a gentle 'Nnn' nasal awareness. Feel the air warm and filter through the passages. Exhale the same way — slow and nourishing."
  },
  {
    letter: "O", sound: 'Open "Ohh"',
    effect: "Opens overall awareness",
    location: "Opens the entire chest and expands awareness outward",
    howTo: "Open your mouth slightly in an 'O' shape. Inhale with an 'Ohh' sense of opening — feel awareness expand outward in all directions. Exhale gently, maintaining that openness."
  },
  {
    letter: "P", sound: 'Powerful "Puh"',
    effect: "Provides pure presence",
    location: "Powerful draw into the full chest cavity",
    howTo: "Inhale powerfully through the nose with a strong 'Puh' drive. Feel presence fill your body from the inside. Exhale firmly, maintaining power and steadiness all the way out."
  },
  {
    letter: "Q", sound: 'Quiet "Qwh"',
    effect: "Quiets the mind",
    location: "Quiets and stills the whole chest cavity",
    howTo: "Inhale so gently and quietly that you can barely hear yourself. Make the breath as silent as possible. Exhale with equal quiet — near-invisible breathing. Let stillness grow with each cycle."
  },
  {
    letter: "R", sound: 'Rhythmic "Rrr"',
    effect: "Relaxes the body",
    location: "Rises rhythmically through the ribs",
    howTo: "Inhale through the nose to a steady count. Exhale at the same count. Keep the 'Rrr' sensation rolling through the ribs like a gentle wave — even, unhurried, unwavering."
  },
  {
    letter: "S", sound: 'Slow "Sss"',
    effect: "Soothes the nervous system",
    location: "Streams slow and steady through the full body",
    howTo: "Inhale slowly through the nose. Exhale with a long, steady 'Sss' sound through slightly parted lips. Feel tension melt with each exhale. Make the sound last as long as possible."
  },
  {
    letter: "T", sound: 'Torso "Tuh"',
    effect: "Total intake & centering",
    location: "Fills the torso with a gentle lateral twist",
    howTo: "Inhale into the full torso — belly, ribs, chest. Gently twist to one side at the top of the inhale. Exhale and return to center. Alternate sides with each breath cycle."
  },
  {
    letter: "U", sound: 'Upward "Uhh"',
    effect: "Uplifts energy",
    location: "Upward undulations from the core toward the crown",
    howTo: "Inhale and feel the breath rise upward — belly, ribs, chest, and shoulders lift in sequence. Exhale slowly from top to bottom, feeling energy undulate downward. Let it be wave-like."
  },
  {
    letter: "V", sound: 'Vibrant "Vvv"',
    effect: "Vitalizes the whole self",
    location: "Vibrates through the chest as a resonant column",
    howTo: "Inhale fully. Exhale with a strong, buzzing 'Vvv' vibration on the lips and teeth. Feel vitality resonate through the chest. Keep the buzz steady and even until the lungs are empty."
  },
  {
    letter: "W", sound: 'Wide "Wwh"',
    effect: "Welcomes fresh wind",
    location: "Widens across the back body and ribcage",
    howTo: "Inhale wide — feel the ribs expand outward like wings spreading. Exhale with a 'Wwh' breath, feeling the back body open. Breathe wide and welcome on every inhale."
  },
  {
    letter: "X", sound: 'eXhaling "Xss"',
    effect: "Extends deep relaxation",
    location: "Extends from the lower lungs on a long, emptying exhale",
    howTo: "Inhale gently. Exhale for as long as possible with a quiet 'Xss' sound — extend the exhale beyond your usual limit. Then allow a natural rebound inhale. Let the exhale do the work."
  },
  {
    letter: "Y", sound: 'Yawning "Yah"',
    effect: "Youthful release & renewal",
    location: "Yields to full airflow from throat to belly",
    howTo: "Open wide — mouth, chest, arms if you like — and inhale with a big 'Yah' yawn. Let the release be full and uninhibited. Exhale with a sigh. Don't suppress it; let it happen fully."
  },
  {
    letter: "Z", sound: 'Zen "Zzz"',
    effect: "Zones into calm focus",
    location: "Zeroes in with gentle vibration through the whole body",
    howTo: "Inhale slowly. Exhale with a deep, low 'Zzz' drone — feel it buzz in the chest and belly. Let the vibration deepen with each breath until the whole body feels still and resonant."
  },
];

const system2 = [
  {
    letter: "A", desc: "Fill whole torso area",
    cue: "mouth wide open, full-body expansion",
    howTo: "Stand or sit tall. Inhale through the nose, expanding belly, ribs, and chest in one smooth wave. Hold briefly, then exhale fully from top to bottom. Let the whole torso move."
  },
  {
    letter: "B", desc: "Adds extra volume that stays put, almost pressurized",
    cue: "lip stop + buzz",
    howTo: "Inhale through pursed lips with a subtle buzzing sensation. Hold at the top — feel the breath lock in place like a pressurized seal. Exhale slowly, keeping the pressure steady as it releases."
  },
  {
    letter: "C", desc: "Fans oxygen outward to sides, backs, ribs; diffuse spread",
    cue: "soft hiss",
    howTo: "Inhale through the nose. Exhale with a long, soft 'Sss' hiss, imagining the breath fanning out sideways into the ribs and back like a spreading mist. Repeat slowly."
  },
  {
    letter: "D", desc: "Drives breath straight down into lower belly / pelvic floor; directed plunge",
    cue: "tongue top behind teeth",
    howTo: "Touch your lower belly. Press your tongue to the top of the mouth and inhale — drive the breath all the way down to your pelvic floor. Feel the directed plunge downward. Exhale gently."
  },
  {
    letter: "E", desc: "Pins oxygen into the upper ribs and chest walls; sharp, tight squeeze",
    cue: "ribs lifted",
    howTo: "Lift the ribs up and out before inhaling. Breathe into that lifted space, pinning the breath into the upper chest walls. Exhale while keeping the ribs lifted as long as possible before releasing."
  },
  {
    letter: "F", desc: "Shoots a focused stream into the front of the lungs",
    cue: "lip-teeth fricative, gentle jet",
    howTo: "Part your teeth and lips slightly to create a narrow gap. Inhale through that gap, sending a focused jet stream into the front of the lungs. Feel the precision of the stream. Exhale gently."
  },
  {
    letter: "G", desc: "Locks breath at the base of the throat then drops it lower",
    cue: "throat anchor — gulp",
    howTo: "Swallow lightly to anchor the throat. Then inhale — feel the breath drop from that throat anchor straight down into the belly. Exhale from the belly back up through the throat anchor."
  },
  {
    letter: "H", desc: "Soft, full-body mist; pure breath; invisible wave",
    cue: "barely-there breath, silent and weightless",
    howTo: "Breathe so softly that the breath feels like mist — barely there, invisible, weightless. No sound, no force. Imagine breathing in cloud. Let each breath be purer and lighter than the last."
  },
  {
    letter: "I", desc: "Concentrates oxygen into a single bright spot in the solar plexus",
    cue: "tight, laser focus",
    howTo: "Tighten your core slightly. Inhale with laser-like focus directing breath into one spot just above the navel. Feel oxygen concentrate there like a bright point of light. Exhale slowly from that spot."
  },
  {
    letter: "J", desc: "Gentle swirl; starts a clockwise spiral from belly outward",
    cue: "soft, like zh",
    howTo: "Inhale through the nose with a soft 'zh' sound. Imagine the breath entering and swirling clockwise from your belly outward in expanding rings. Exhale gently, following the spiral outward."
  },
  {
    letter: "K", desc: "Pushes a quick powerful burst into the mid-back",
    cue: "hard stop in throat, explosive burst",
    howTo: "Build pressure at the back of the throat. Release with a hard stop — an explosive burst — directing the breath into the mid-back. Exhale fully. This is short, sharp, and powerful."
  },
  {
    letter: "L", desc: "Pulls oxygen laterally across the entire ribcage",
    cue: "tongue to palate, side-to-side sweep",
    howTo: "Place hands on either side of your ribcage. Press your tongue to the palate and inhale, feeling breath sweep laterally across the ribs from center to sides. Exhale as the sweep returns."
  },
  {
    letter: "M", desc: "Floods the entire face, head, sinuses, then sinks into lungs",
    cue: "lip hum, stronger than hmm, full-face resonance",
    howTo: "Inhale through the nose. Exhale with a strong 'Mmm' hum — stronger than a gentle hum. Feel it flood your face, forehead, and sinuses first, then sink down into the lungs. Intensify the resonance."
  },
  {
    letter: "N", desc: "Opens a vertical highway from third eye down through sternum",
    cue: "nasal, forehead-to-chest channel",
    howTo: "Breathe only through the nose. Imagine a vertical channel running from your forehead down through your sternum. Inhale along this highway from top to bottom. Exhale along the same channel upward."
  },
  {
    letter: "O", desc: "Forms a perfect round container in the belly that holds extra deep",
    cue: "round, circular container",
    howTo: "Round your belly like a bowl before inhaling. Breathe into that circular space, feeling a perfect container form and fill. Hold briefly — feel the roundness hold. Exhale slowly from the circle."
  },
  {
    letter: "P", desc: "Light static refill at the very top of the lungs",
    cue: "lip pop, quick top-up — like a cherry on top",
    howTo: "Take a normal inhale. At the very top, add a quick lip-pop burst of extra air into the uppermost part of the lungs — like topping off a tank. Hold a beat, then exhale fully."
  },
  {
    letter: "Q", desc: "Twists the breath downward in a spiral (deeper than J)",
    cue: "corkscrew combo — twist",
    howTo: "Inhale through the nose. Exhale with a twisting, corkscrew feeling downward — deeper and tighter than a simple spiral. Imagine a drill turning as it descends. Let each exhale spiral deeper."
  },
  {
    letter: "R", desc: "Sends oxygen rolling down the spine like a slow waterfall",
    cue: "tongue roll, spine waterfall",
    howTo: "Roll your tongue if possible. Inhale through the rolled tongue. As you exhale, imagine a slow waterfall of breath rolling down the back of the spine from neck to tailbone."
  },
  {
    letter: "S", desc: "Turns the spread from C into a thousand tiny threads reaching everywhere",
    cue: "micro-spread, long hiss",
    howTo: "Inhale through the nose. Exhale with a very long, fine 'Sss' hiss — imagine the breath splitting into thousands of tiny threads reaching into every corner of the body simultaneously."
  },
  {
    letter: "T", desc: "Delivers a pinpoint hit exactly where you aim it",
    cue: "tongue stop, precision tap",
    howTo: "Pick a specific spot in your body. Inhale. On the exhale, tap the tongue sharply to the roof of the mouth and mentally aim — feel a pinpoint of breath hit exactly that target. Practice accuracy."
  },
  {
    letter: "U", desc: "Creates a long vertical tube from throat all the way to pelvis",
    cue: "like Moon; deep tube",
    howTo: "Imagine a long tube running from your throat to your pelvis. Inhale and feel the tube fill from top to bottom like water filling a pipe. Exhale slowly from bottom to top along the same tube."
  },
  {
    letter: "V", desc: "Buzzes a steady column right through the center of the torso",
    cue: "lip-teeth buzz, vibrating column",
    howTo: "Part the lips to teeth. Exhale with a steady 'Vvv' buzz, feeling the vibration form a column through the center of your torso from throat to navel. Inhale gently, then buzz again."
  },
  {
    letter: "W", desc: "Opens the entire back body like a giant hug from behind",
    cue: "lip purse, wide embrace — who",
    howTo: "Purse the lips into a wide 'who' shape. Inhale, feeling the entire back body open outward like arms spreading wide for a hug. Exhale, maintaining that wide, open-back embrace."
  },
  {
    letter: "X", desc: "Splits oxygen into an X-shape; diagonal lines crossing at the heart",
    cue: "KSA combo, cross pattern",
    howTo: "Cross your hands on your chest. Inhale. On the exhale, imagine the breath splitting into two diagonal lines that cross at the heart — forming an X through the chest. Feel both lines simultaneously."
  },
  {
    letter: "Y", desc: "Pulls oxygen straight up the spine and out the crown",
    cue: "energizing, upward lift, bee with glide",
    howTo: "Inhale through the nose. Exhale with a gliding 'Y' sound, feeling the breath pull straight up the spine — vertebra by vertebra — and exit through the crown of the head like a fountain."
  },
  {
    letter: "Z", desc: "Creates a low-frequency vibration that fills literally every cell",
    cue: "buzzing, whole-body drone",
    howTo: "Inhale slowly. Exhale with a low, sustained buzzing drone — feel it vibrate in the chest, belly, and limbs. Let the frequency deepen with each breath until every cell seems to hum."
  },
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

// ── Modal ─────────────────────────────────────────────────────────────────────

function openModal(letter, title, body) {
  document.getElementById("modal-letter").textContent = letter;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").textContent = body;
  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// ── Card Rendering ────────────────────────────────────────────────────────────

function renderSystem1(data, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = data.map(({ letter, sound, effect, location, howTo }) => `
    <article class="card" onclick="openModal('${letter}', '${sound.replace(/'/g, "\\'")}', '${howTo.replace(/'/g, "\\'")}')">
      <div class="card-letter">${letter}</div>
      <div class="card-sound">${sound}</div>
      <div class="card-effect">${effect}</div>
      <div class="card-location">${location}</div>
      <div class="card-hint">Tap for how-to</div>
    </article>
  `).join("");
}

function renderSystem2(data, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = data.map(({ letter, desc, cue, howTo }) => `
    <article class="card" onclick="openModal('${letter}', '${desc.replace(/'/g, "\\'")}', '${howTo.replace(/'/g, "\\'")}')">
      <div class="card-letter">${letter}</div>
      <div class="card-desc">${desc}</div>
      ${cue ? `<div class="card-cue">${cue}</div>` : ""}
      <div class="card-hint">Tap for how-to</div>
    </article>
  `).join("");
}

// ── CSV Download ──────────────────────────────────────────────────────────────

function downloadCSV(system) {
  let header, rows, filename;
  if (system === "system1") {
    header = "Letter,Sound Vibe,Breath Effect,Location,How To\n";
    rows = system1.map(({ letter, sound, effect, location, howTo }) =>
      `${letter},"${sound}","${effect}","${location}","${howTo.replace(/"/g, '""')}"`
    ).join("\n");
    filename = "Breathing_Exercises_AZ_System1.csv";
  } else {
    header = "Letter,Description,Cue,How To\n";
    rows = system2.map(({ letter, desc, cue, howTo }) =>
      `${letter},"${desc.replace(/"/g, '""')}","${cue.replace(/"/g, '""')}","${howTo.replace(/"/g, '""')}"`
    ).join("\n");
    filename = "Breathing_Exercises_AZ_System2.csv";
  }
  const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Init ──────────────────────────────────────────────────────────────────────

renderSystem1(system1, "grid-system1");
renderSystem2(system2, "grid-system2");
