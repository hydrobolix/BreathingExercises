import csv

system1 = [
    ("A","Deep 'Ahhh'","Deep oxygenation & expansion","Fills entire torso from belly to shoulders","Inhale deeply through the nose while silently sounding Ahhh in your mind. Let the breath fill your torso from the bottom up. Exhale slowly through the mouth."),
    ("B","Soft 'Buh'","Creates balance & stability","Broadly into the belly","Place one hand on your belly. Inhale gently through the nose, letting only the belly rise. Exhale slowly and feel the belly fall."),
    ("C","Calm 'Ccc'","Circulates calm energy","Expands sideways into the chest and ribs","Inhale slowly for 4 counts, feeling the chest expand sideways. Exhale for 4 counts with a quiet Ccc sound on the lips."),
    ("D","Diaphragmatic 'Duh'","Deep grounding draw","Draws deeply downward into the diaphragm","Place both hands on your lower belly. Inhale through the nose and press your hands outward as the diaphragm drops. Exhale slowly."),
    ("E","Extended 'Ehhh'","Releases & empties tension","Empties the lungs completely on a full exhale","Inhale for 4 counts. Exhale slowly for 8 counts with a quiet Ehhh sound. Squeeze every last bit of air out."),
    ("F","Full 'Fff'","Floods with fresh energy","Floods the entire frame from core to fingertips","Take a full deep inhale from belly to chest. Exhale completely with a Fff sound through the teeth. Let the next inhale flood in naturally."),
    ("G","Gentle 'Guh'","Grounds and gathers energy","Gathers throughout the body toward the center","Inhale slowly through the nose with a gentle Guh sensation. Feel the breath collect at your center. Exhale fully, feeling grounded."),
    ("H","'Hmm' (humming)","Deep pull & vibration","Deep pull into the core with skull resonance","Close your lips and inhale through the nose. Exhale with a steady Hmm hum. Feel the vibration spread through your chest and skull."),
    ("I","Inward 'Eee'","Invigorates inner awareness","Concentrates inward into the inner core","Inhale sharply through the nose with a bright Eee sensation pulling inward. Hold for 2 counts. Exhale slowly."),
    ("J","Joyful 'Juh'","Playful energy boost","Pulses lightly through the chest and upper body","Inhale playfully through the mouth with a bouncy Juh feeling. Exhale with a quiet smile, releasing any stiffness."),
    ("K","Kinetic 'Kah'","Keeps energy flowing","Kicks oxygen dynamically through the mid-body","Inhale quickly and powerfully through the nose. Hold briefly at the top. Exhale forcefully, keeping energy moving."),
    ("L","Long 'Lll'","Lifts life force","Loads long and upward into the lungs","Inhale slowly and fully with a long Lll sensation. Feel the lift from belly to crown. Exhale gently."),
    ("M","Mindful 'Mmm'","Merges with calm focus","Measured and even throughout the lungs","Close your eyes and inhale mindfully through the nose. Exhale with a soft Mmm hum. Stay present with each breath."),
    ("N","Nasal 'Nnn'","Nurtures present-moment calm","Nourishes through the nasal passages and sinuses","Seal your lips and breathe only through the nose with a gentle Nnn awareness. Exhale the same way, slow and nourishing."),
    ("O","Open 'Ohh'","Opens overall awareness","Opens the entire chest and expands awareness outward","Open your mouth slightly in an O shape. Inhale with an Ohh sense of opening. Exhale gently, maintaining openness."),
    ("P","Powerful 'Puh'","Provides pure presence","Powerful draw into the full chest cavity","Inhale powerfully through the nose with a strong Puh drive. Exhale firmly, maintaining power all the way out."),
    ("Q","Quiet 'Qwh'","Quiets the mind","Quiets and stills the whole chest cavity","Inhale so gently you can barely hear yourself. Make the breath as silent as possible. Exhale with equal quiet."),
    ("R","Rhythmic 'Rrr'","Relaxes the body","Rises rhythmically through the ribs","Inhale through the nose to a steady count. Exhale at the same count. Keep the Rrr sensation rolling through the ribs like a wave."),
    ("S","Slow 'Sss'","Soothes the nervous system","Streams slow and steady through the full body","Inhale slowly through the nose. Exhale with a long steady Sss sound through slightly parted lips."),
    ("T","Torso 'Tuh'","Total intake & centering","Fills the torso with a gentle lateral twist","Inhale into the full torso. Gently twist to one side at the top. Exhale and return to center. Alternate sides each breath."),
    ("U","Upward 'Uhh'","Uplifts energy","Upward undulations from the core toward the crown","Inhale and feel the breath rise upward. Exhale slowly from top to bottom, letting it undulate downward like a wave."),
    ("V","Vibrant 'Vvv'","Vitalizes the whole self","Vibrates through the chest as a resonant column","Inhale fully. Exhale with a strong buzzing Vvv vibration on the lips and teeth. Keep the buzz steady until empty."),
    ("W","Wide 'Wwh'","Welcomes fresh wind","Widens across the back body and ribcage","Inhale wide, feeling the ribs expand outward like wings. Exhale with a Wwh breath, feeling the back body open."),
    ("X","eXhaling 'Xss'","Extends deep relaxation","Extends from the lower lungs on a long emptying exhale","Inhale gently. Exhale for as long as possible with a quiet Xss sound. Then allow a natural rebound inhale."),
    ("Y","Yawning 'Yah'","Youthful release & renewal","Yields to full airflow from throat to belly","Open wide and inhale with a big Yah yawn. Let the release be full and uninhibited. Exhale with a sigh."),
    ("Z","Zen 'Zzz'","Zones into calm focus","Zeroes in with gentle vibration through the whole body","Inhale slowly. Exhale with a deep low Zzz drone. Let the vibration deepen with each breath until the whole body feels still."),
]

system2 = [
    ("A","Fill whole torso area","mouth wide open, full-body expansion","Stand or sit tall. Inhale through the nose, expanding belly, ribs, and chest in one smooth wave. Hold briefly, then exhale fully from top to bottom."),
    ("B","Adds extra volume that stays put, almost pressurized","lip stop + buzz","Inhale through pursed lips with a subtle buzzing sensation. Hold at the top, feel the breath lock in place. Exhale slowly, keeping the pressure steady."),
    ("C","Fans oxygen outward to sides, backs, ribs; diffuse spread","soft hiss","Inhale through the nose. Exhale with a long soft Sss hiss, imagining the breath fanning out sideways into the ribs and back like a spreading mist."),
    ("D","Drives breath straight down into lower belly / pelvic floor; directed plunge","tongue top behind teeth","Touch your lower belly. Press your tongue to the top of the mouth and inhale, driving breath all the way down to your pelvic floor. Exhale gently."),
    ("E","Pins oxygen into the upper ribs and chest walls; sharp, tight squeeze","ribs lifted","Lift the ribs up and out before inhaling. Breathe into that lifted space, pinning breath into the upper chest walls. Exhale while keeping ribs lifted."),
    ("F","Shoots a focused stream into the front of the lungs","lip-teeth fricative, gentle jet","Part your teeth and lips slightly. Inhale through that narrow gap, sending a focused jet stream into the front of the lungs. Exhale gently."),
    ("G","Locks breath at the base of the throat then drops it lower","throat anchor, gulp","Swallow lightly to anchor the throat. Then inhale, feel the breath drop from that anchor straight down into the belly. Exhale from belly back up."),
    ("H","Soft, full-body mist; pure breath; invisible wave","barely-there breath, silent and weightless","Breathe so softly the breath feels like mist. No sound, no force. Imagine breathing in cloud. Let each breath be purer and lighter than the last."),
    ("I","Concentrates oxygen into a single bright spot in the solar plexus","tight, laser focus","Tighten your core slightly. Inhale with laser-like focus into one spot just above the navel. Feel oxygen concentrate there. Exhale slowly from that spot."),
    ("J","Gentle swirl; starts a clockwise spiral from belly outward","soft, like zh","Inhale through the nose with a soft zh sound. Imagine the breath swirling clockwise from your belly outward in expanding rings. Exhale gently."),
    ("K","Pushes a quick powerful burst into the mid-back","hard stop in throat, explosive burst","Build pressure at the back of the throat. Release with a hard stop, an explosive burst, directing breath into the mid-back. Exhale fully."),
    ("L","Pulls oxygen laterally across the entire ribcage","tongue to palate, side-to-side sweep","Place hands on either side of your ribcage. Press the tongue to the palate and inhale, feeling breath sweep laterally across the ribs. Exhale."),
    ("M","Floods the entire face, head, sinuses, then sinks into lungs","lip hum, stronger than hmm, full-face resonance","Inhale through the nose. Exhale with a strong Mmm hum. Feel it flood your face and sinuses first, then sink down into the lungs."),
    ("N","Opens a vertical highway from third eye down through sternum","nasal, forehead-to-chest channel","Breathe only through the nose. Imagine a vertical channel from forehead to sternum. Inhale along this highway top to bottom. Exhale upward."),
    ("O","Forms a perfect round container in the belly that holds extra deep","round, circular container","Round your belly like a bowl before inhaling. Breathe into that circular space and feel a perfect container form. Hold briefly, then exhale."),
    ("P","Light static refill at the very top of the lungs","lip pop, quick top-up, like a cherry on top","Take a normal inhale. At the very top, add a quick lip-pop burst of extra air into the uppermost part of the lungs. Exhale fully."),
    ("Q","Twists the breath downward in a spiral (deeper than J)","corkscrew combo, twist","Inhale through the nose. Exhale with a twisting corkscrew feeling downward, deeper and tighter than a simple spiral. Imagine a drill descending."),
    ("R","Sends oxygen rolling down the spine like a slow waterfall","tongue roll, spine waterfall","Roll your tongue if possible and inhale through it. As you exhale, imagine a slow waterfall of breath rolling down the spine from neck to tailbone."),
    ("S","Turns the spread from C into a thousand tiny threads reaching everywhere","micro-spread, long hiss","Inhale through the nose. Exhale with a very long fine Sss hiss, imagining the breath splitting into thousands of tiny threads reaching everywhere."),
    ("T","Delivers a pinpoint hit exactly where you aim it","tongue stop, precision tap","Pick a spot in your body. Inhale. On the exhale, tap the tongue to the roof of the mouth and feel a pinpoint of breath hit exactly that target."),
    ("U","Creates a long vertical tube from throat all the way to pelvis","like Moon, deep tube","Imagine a long tube from throat to pelvis. Inhale and feel the tube fill from top to bottom. Exhale slowly from bottom to top along the same tube."),
    ("V","Buzzes a steady column right through the center of the torso","lip-teeth buzz, vibrating column","Part the lips to teeth. Exhale with a steady Vvv buzz, feeling vibration form a column through the center of the torso. Inhale gently, repeat."),
    ("W","Opens the entire back body like a giant hug from behind","lip purse, wide embrace, who","Purse the lips into a wide who shape. Inhale, feeling the entire back body open like arms spreading wide. Exhale, maintaining that open embrace."),
    ("X","Splits oxygen into an X-shape; diagonal lines crossing at the heart","KSA combo, cross pattern","Cross your hands on your chest. Inhale. On the exhale, imagine the breath splitting into diagonal lines crossing at the heart, forming an X."),
    ("Y","Pulls oxygen straight up the spine and out the crown","energizing, upward lift, bee with glide","Inhale through the nose. Exhale with a gliding Y sound, feeling breath pull straight up the spine and exit through the crown of the head."),
    ("Z","Creates a low-frequency vibration that fills literally every cell","buzzing, whole-body drone","Inhale slowly. Exhale with a low sustained buzzing drone. Feel it vibrate in the chest, belly, and limbs. Let the frequency deepen with each breath."),
]

with open(r'c:\Projects\BreathingExercises\system1.csv', 'w', newline='', encoding='utf-8-sig') as f:
    w = csv.writer(f)
    w.writerow(['Letter', 'Sound Vibe', 'Breath Effect', 'Location', 'How To'])
    w.writerows(system1)

with open(r'c:\Projects\BreathingExercises\system2.csv', 'w', newline='', encoding='utf-8-sig') as f:
    w = csv.writer(f)
    w.writerow(['Letter', 'Description', 'Cue', 'How To'])
    w.writerows(system2)

print("Done")
