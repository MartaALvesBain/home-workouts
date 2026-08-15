const workouts = {
 A: {
   title:"Workout A",
   focus:"Split squat + hinge",
   duration:"~45 min",
   sections:[
     {name:"Movement prep", exercises:[
       {name:"Treadmill walk", dose:"2 min easy", type:"timer", cue:"Relaxed pace. Use this to warm up, not fatigue yourself."},
       {name:"90/90 hip switches", dose:"6 / side", type:"reps", cue:"Sit tall; rotate through the hips without forcing the knees down."},
       {name:"Adductor rock-back", dose:"8 / side", type:"reps", cue:"Hips back, spine quiet. Feel the inner thigh, not the lower back."},
       {name:"Glute bridge", dose:"10 reps", type:"reps", cue:"Squeeze glutes. Stop before your lower back arches."},
       {name:"Band pull-apart", dose:"12 reps", type:"reps", cue:"Shoulders away from ears; pull the band toward upper chest."},
       {name:"Bodyweight split squat", dose:"5 / side", type:"reps", cue:"Move down and up. Use support if balance distracts you."}
     ]},
     {name:"Athletic primer", exercises:[
       {name:"Fast step-up", dose:"3 × 4 / leg", sets:3, type:"reps", cue:"Drive up crisply; step down slowly. No jumping."}
     ]},
     {name:"Strength 1", exercises:[
       {name:"Supported split squat", dose:"2 × 8 / leg", sets:2, weight:5, reps:8, type:"weighted", cue:"Front foot flat; back knee travels toward floor. Hold support lightly."},
       {name:"1-arm dumbbell row", dose:"2 × 10–12 / side", sets:2, weight:8, reps:10, type:"weighted", cue:"Long spine; pull elbow toward back pocket. Do not shrug."},
       {name:"Dead bug", dose:"2 × 6 / side", sets:2, reps:6, type:"repsets", cue:"Keep ribs down and lower back controlled as the leg reaches away."}
     ]},
     {name:"Strength 2", exercises:[
       {name:"DB Romanian deadlift", dose:"2 × 10", sets:2, weight:8, reps:10, type:"weighted_pair", cue:"Push hips back; dumbbells stay close. Stop when hamstrings limit you."},
       {name:"DB floor press", dose:"2 × 8–10", sets:2, weight:8, reps:8, type:"weighted_pair", cue:"Neutral grip; wrists stacked. Upper arms touch floor gently."},
       {name:"Pallof press", dose:"2 × 8 / side", sets:2, reps:8, type:"repsets", cue:"Press away without letting the band rotate your torso."}
     ]},
     {name:"Conditioning", exercises:[
       {name:"Incline intervals", dose:"4 rounds: 60s at 5 km/h, 8–10% + 60s at 4–4.5 km/h, 2–3%", type:"timer", cue:"Hard but controlled. About 7/10 effort."}
     ]}
   ]
 },
 B: {
   title:"Workout B",
   focus:"Squat + single-leg hinge",
   duration:"~45 min",
   sections:[
     {name:"Movement prep", exercises:[
       {name:"Treadmill walk", dose:"2 min easy", type:"timer", cue:"Relaxed pace."},
       {name:"90/90 hip switches", dose:"6 / side", type:"reps", cue:"Move smoothly through the hips."},
       {name:"Adductor rock-back", dose:"8 / side", type:"reps", cue:"Hips back, spine quiet."},
       {name:"Glute bridge", dose:"10 reps", type:"reps", cue:"Squeeze glutes; avoid over-arching."},
       {name:"Band pull-apart", dose:"12 reps", type:"reps", cue:"Keep neck relaxed."},
       {name:"Lateral squat / weight shift", dose:"6 / side", type:"reps", cue:"Shift into one hip while keeping the whole foot grounded."}
     ]},
     {name:"Athletic primer", exercises:[
       {name:"March → knee-drive hold", dose:"3 × 5 / side", sets:3, type:"reps", cue:"Drive knee up, freeze for 2 seconds, stay tall."}
     ]},
     {name:"Strength 1", exercises:[
       {name:"Goblet squat", dose:"2 × 10–12", sets:2, weight:15, reps:10, type:"weighted", cue:"Sit between your legs; knees follow toes; whole foot stays down."},
       {name:"Half-kneeling band pulldown", dose:"2 × 10–12 / side", sets:2, reps:10, type:"repsets", cue:"Brace and pull elbow toward ribs without leaning back."},
       {name:"Side plank", dose:"2 × 15–25 sec / side", sets:2, reps:20, unit:"sec", type:"repsets", cue:"Push floor away; keep shoulder, hip and knee aligned."}
     ]},
     {name:"Strength 2", exercises:[
       {name:"Supported 1-leg RDL", dose:"2 × 8 / leg", sets:2, weight:5, reps:8, type:"weighted", cue:"Torso forward as back leg reaches behind. Keep pelvis square."},
       {name:"Incline push-up", dose:"2 × 8–12", sets:2, reps:8, type:"repsets", cue:"Body stays long; elbows angle back. Swap for floor press if wrists hurt."},
       {name:"Band face pull", dose:"2 × 12–15", sets:2, reps:12, type:"repsets", cue:"Pull toward face and slightly apart; shoulders stay away from ears."}
     ]},
     {name:"Conditioning", exercises:[
       {name:"Incline walk", dose:"8 min at 4.5–5 km/h, 5–8%", type:"timer", cue:"Conversational, around 5–6/10 effort."}
     ]}
   ]
 },
 C: {
   title:"Workout C",
   focus:"Unilateral legs + glutes",
   duration:"~45 min",
   sections:[
     {name:"Movement prep", exercises:[
       {name:"Treadmill walk", dose:"2 min easy", type:"timer", cue:"Relaxed pace."},
       {name:"90/90 hip switches", dose:"6 / side", type:"reps", cue:"Move smoothly."},
       {name:"Adductor rock-back", dose:"8 / side", type:"reps", cue:"Inner-thigh stretch, not lower-back stretch."},
       {name:"Glute bridge", dose:"10 reps", type:"reps", cue:"Squeeze glutes."},
       {name:"Band pull-apart", dose:"12 reps", type:"reps", cue:"Neck relaxed."},
       {name:"Bodyweight split squat", dose:"5 / side", type:"reps", cue:"Use support if useful."}
     ]},
     {name:"Athletic primer", exercises:[
       {name:"Low-box alternating step-up", dose:"3 × 5 / leg", sets:3, type:"reps", cue:"Smooth and quick going up; controlled coming down."}
     ]},
     {name:"Strength 1", exercises:[
       {name:"Reverse lunge / split squat", dose:"2 × 8 / leg", sets:2, weight:5, reps:8, type:"weighted", cue:"Keep most of the work in the front leg. Use a static split squat if preferred."},
       {name:"1-arm dumbbell row", dose:"2 × 10 / side", sets:2, weight:8, reps:10, type:"weighted", cue:"Pull toward hip; avoid rotating your torso."},
       {name:"Pallof press", dose:"2 × 8 / side", sets:2, reps:8, type:"repsets", cue:"Resist rotation."}
     ]},
     {name:"Strength 2", exercises:[
       {name:"DB hip thrust / glute bridge", dose:"2 × 10–12", sets:2, weight:15, reps:10, type:"weighted", cue:"Drive through feet; finish with glutes rather than arching your back."},
       {name:"DB floor press", dose:"2 × 8–10", sets:2, weight:8, reps:8, type:"weighted_pair", cue:"Neutral grip; wrists stacked."},
       {name:"Suitcase march", dose:"2 × 30 sec / side", sets:2, weight:12.5, reps:30, unit:"sec", type:"weighted", cue:"Stay tall and level. Do not let the weight pull you sideways."}
     ]},
     {name:"Conditioning", exercises:[
       {name:"Incline intervals", dose:"6 rounds: 30s at 5 km/h, 10–12% + 50s at 4–4.5 km/h, 2–3%", type:"timer", cue:"Finish with ~1 min easy."}
     ]}
   ]
 },
 D: {
   title:"Optional Day D",
   focus:"Conditioning + mobility",
   duration:"30–40 min",
   sections:[
     {name:"Easy conditioning", exercises:[
       {name:"Incline treadmill walk", dose:"25–30 min at ~4–6% incline, comfortable pace", type:"timer", cue:"About 4–5/10 effort. You should be able to talk normally."}
     ]},
     {name:"Mobility", exercises:[
       {name:"90/90 hip switches", dose:"6 / side", type:"reps", cue:"Easy range."},
       {name:"Adductor rock-back", dose:"8 / side", type:"reps", cue:"Move slowly."},
       {name:"Band pull-apart", dose:"12 reps", type:"reps", cue:"Keep neck relaxed."}
     ]}
   ]
 },
 T1: {
   title:"Travel Workout 1",
   focus:"Bodyweight strength",
   duration:"30–40 min",
   travel:true,
   sections:[
     {name:"Warm-up", exercises:[
       {name:"90/90 hip switches", dose:"6 / side", type:"reps", cue:"Sit tall and move through a comfortable hip range."},
       {name:"Adductor rock-back", dose:"8 / side", type:"reps", cue:"Hips back, spine quiet."},
       {name:"Glute bridge", dose:"10 reps", type:"reps", cue:"Squeeze glutes; do not over-arch your back."},
       {name:"Bodyweight split squat", dose:"5 / side", type:"reps", cue:"Use a wall or chair for balance if helpful."},
       {name:"Arm circles / shoulder rolls", dose:"10 each direction", type:"reps", cue:"Easy, relaxed range; keep your neck soft."}
     ]},
     {name:"Circuit A · 3 rounds", exercises:[
       {name:"Tempo split squat", dose:"10–15 / leg", sets:3, reps:10, type:"repsets", cue:"Lower for 3 seconds, pause 1 second, then stand. Stop with ~2 good reps left."},
       {name:"Push-up", dose:"6–15 reps", sets:3, reps:8, type:"repsets", cue:"Use a wall, desk, bed edge or floor so every rep is controlled."},
       {name:"Single-leg glute bridge", dose:"8–12 / leg", sets:3, reps:8, type:"repsets", cue:"Keep pelvis level and finish by squeezing the working-side glute."}
     ]},
     {name:"Circuit B · 3 rounds", exercises:[
       {name:"Single-leg RDL reach", dose:"8–10 / leg", sets:3, reps:8, type:"repsets", cue:"Reach one leg back as your torso tips forward; hold a wall lightly if needed."},
       {name:"Reverse lunge", dose:"8–12 / leg", sets:3, reps:8, type:"repsets", cue:"Step back and keep most of the work in the front leg."},
       {name:"Dead bug", dose:"6–8 / side", sets:3, reps:6, type:"repsets", cue:"Move slowly and keep your lower back controlled."}
     ]},
     {name:"Core finisher · 2 rounds", exercises:[
       {name:"Side plank", dose:"20–30 sec / side", sets:2, reps:20, unit:"sec", type:"repsets", cue:"Push the floor away and keep your neck long."},
       {name:"Front plank", dose:"20–30 sec", sets:2, reps:20, unit:"sec", type:"repsets", cue:"Ribs down, glutes lightly squeezed; stop before your lower back sags."},
       {name:"Glute bridge hold", dose:"30 sec", sets:2, reps:30, unit:"sec", type:"repsets", cue:"Hold with glutes, not your lower back."}
     ]}
   ]
 },
 T2: {
   title:"Travel Workout 2",
   focus:"Bodyweight conditioning + strength",
   duration:"30–35 min",
   travel:true,
   sections:[
     {name:"Warm-up", exercises:[
       {name:"March in place", dose:"60 sec", type:"timer", cue:"Easy pace; gradually increase arm swing and knee lift."},
       {name:"90/90 hip switches", dose:"6 / side", type:"reps", cue:"Use a comfortable range."},
       {name:"Glute bridge", dose:"10 reps", type:"reps", cue:"Squeeze glutes and keep ribs down."},
       {name:"Lateral squat / weight shift", dose:"6 / side", type:"reps", cue:"Shift into one hip while keeping the whole foot grounded."},
       {name:"Bodyweight squat", dose:"10 reps", type:"reps", cue:"Sit between your legs and keep your whole foot down."}
     ]},
     {name:"Strength circuit · 3 rounds", exercises:[
       {name:"Tempo bodyweight squat", dose:"12–15 reps", sets:3, reps:12, type:"repsets", cue:"Lower for 3 seconds, pause 1 second, then stand strongly."},
       {name:"Alternating reverse lunge", dose:"8–10 / leg", sets:3, reps:8, type:"repsets", cue:"Step back smoothly; front leg does most of the work."},
       {name:"Incline push-up", dose:"8–15 reps", sets:3, reps:8, type:"repsets", cue:"Choose a stable surface height that keeps reps crisp and wrist-friendly."},
       {name:"Side plank", dose:"20 sec / side", sets:3, reps:20, unit:"sec", type:"repsets", cue:"Stay long from shoulder through hips; do not sink into the shoulder."}
     ]},
     {name:"Low-impact conditioning · 8 rounds", exercises:[
       {name:"30:30 conditioning rotation", dose:"30 sec brisk + 30 sec easy × 8; rotate fast march, step jacks, knee drives, squat-to-reach", type:"timer", cue:"Aim for ~7/10 effort. No jumping required."}
     ]},
     {name:"Glutes + trunk · 2 rounds", exercises:[
       {name:"Single-leg glute bridge", dose:"10 / leg", sets:2, reps:10, type:"repsets", cue:"Keep hips level and squeeze the working glute."},
       {name:"Bird dog", dose:"6 / side", sets:2, reps:6, type:"repsets", cue:"Reach long without twisting or arching your back."},
       {name:"Dead bug", dose:"6 / side", sets:2, reps:6, type:"repsets", cue:"Keep ribs down; use a smaller leg reach if your back arches."},
       {name:"Side plank", dose:"20–30 sec / side", sets:2, reps:20, unit:"sec", type:"repsets", cue:"Push the floor away; keep your head aligned with your spine."}
     ]}
   ]
 }
};

const exerciseDescriptions = {
  "Treadmill walk":"Walk at an easy pace with a natural stride and relaxed shoulders. Let your arms swing normally. This is preparation, not conditioning, so you should feel warmer but not winded.",
  "90/90 hip switches":"Sit with both knees bent and your hands behind you for support if needed. Let both knees rotate gently from one side to the other while keeping the movement controlled. Do not force either knee to the floor.",
  "Adductor rock-back":"Start on hands and knees, extend one leg out to the side with the foot on the floor, then send your hips backward. Keep your spine long and stop when you feel a mild inner-thigh stretch.",
  "Glute bridge":"Lie on your back with knees bent and feet flat. Brace lightly, push through your feet and squeeze your glutes to lift your hips. Stop before your lower back starts to arch, then lower slowly.",
  "Band pull-apart":"Hold a light band in front of your chest with straight arms. Keep shoulders away from your ears and pull your hands apart until the band approaches your upper chest. Return slowly without shrugging.",
  "Bodyweight split squat":"Stand in a staggered stance with feet about hip-width apart side to side. Lower the back knee toward the floor while the front foot stays flat, then push through the front leg to stand. Use light support if balance gets in the way.",
  "Fast step-up":"Place your whole foot on a low, stable box. Drive through the top leg to stand quickly, stabilize at the top, then step down under control. Do not jump or push aggressively off the trailing foot.",
  "Supported split squat":"Set up in a staggered stance next to a stable support. Hold it lightly, lower the back knee toward the floor and keep the front foot planted. Drive through the front leg to rise; the support is for balance, not pulling yourself up.",
  "1-arm dumbbell row":"Support one hand on your box and hinge forward with a long spine. Let the dumbbell hang, then pull your elbow toward your hip or back pocket. Keep your neck relaxed and avoid twisting or shrugging.",
  "Dead bug":"Lie on your back with hips and knees near 90 degrees and arms reaching upward. Brace gently, then extend one leg away while keeping your ribs and lower back controlled. Return and alternate sides; shorten the reach if your back arches.",
  "DB Romanian deadlift":"Stand tall holding the dumbbells close to your thighs. Soften your knees and push your hips backward as the dumbbells slide down your legs. Stop when your hamstrings limit the motion, then squeeze your glutes to stand.",
  "DB floor press":"Lie on your back with knees bent and a dumbbell in each hand. Keep a neutral or semi-neutral grip and lower until your upper arms gently meet the floor. Press up while keeping wrists stacked over elbows and your neck relaxed.",
  "Pallof press":"Stand sideways to a band anchored around chest height. Hold the band at your chest, brace, then press your hands straight forward without allowing your torso to rotate. Pause briefly and return with control.",
  "Incline intervals":"Alternate the harder and easier treadmill segments exactly as written. During hard periods, stay tall and use the handrails only if needed for safety. The goal is controlled breathing stress, not an all-out effort.",
  "Lateral squat / weight shift":"Stand wider than hip-width and shift your hips toward one side while that knee bends. Keep the working foot fully grounded and the other leg longer. Move only through a comfortable hip range, then switch sides.",
  "March → knee-drive hold":"Stand tall, drive one knee upward briskly, then freeze for about two seconds without leaning back. Lower with control and alternate sides. Use a wall lightly if balance limits the movement.",
  "Goblet squat":"Hold one dumbbell close to your chest. Sit down between your legs with knees following the direction of your toes and your whole foot staying grounded. Descend only as far as you can maintain control, then stand strongly.",
  "Half-kneeling band pulldown":"Kneel on one knee facing a high band anchor. Brace your trunk and squeeze the glute of the kneeling side, then pull the band down toward your ribs. Avoid leaning backward to create extra range.",
  "Side plank":"Lie on your side with your elbow under your shoulder. Start from bent knees if needed, lift your hips and make a straight line through shoulder, hip and knee or ankle. Push the floor away and keep your head aligned with your spine.",
  "Supported 1-leg RDL":"Stand on one leg beside a stable support and hold it lightly. Push your hips back while your free leg reaches behind you and your torso tips forward. Keep your pelvis mostly square, then squeeze the standing-side glute to return.",
  "Incline push-up":"Place your hands on a stable raised surface and step back until your body is in a straight line. Brace, lower your chest toward the surface with elbows angled slightly back, then press away. Raise the surface if your wrists or technique are uncomfortable.",
  "Band face pull":"Anchor a light band around eye level. Pull the band toward your face while separating your hands slightly. Keep your shoulders down and your neck relaxed; this should feel controlled rather than heavy.",
  "Incline walk":"Walk continuously at the prescribed incline and speed. Stay tall, use a natural stride and keep the effort conversational. Reduce incline before compromising posture or holding heavily onto the rails.",
  "Low-box alternating step-up":"Place your whole foot on a low stable box and step up smoothly, using the top leg rather than bouncing from the floor. Step down under control, then alternate legs. Keep the movement crisp but not exhausting.",
  "Reverse lunge / split squat":"For a reverse lunge, step one foot backward and lower the back knee toward the floor, keeping most of the work in the front leg. If stepping bothers your balance, keep both feet planted and perform a split squat instead.",
  "DB hip thrust / glute bridge":"Set up for a bridge or with your upper back supported if using a hip thrust. Place the dumbbell securely over the hips, drive through your feet and squeeze your glutes to finish. Do not chase extra height by arching your lower back.",
  "Suitcase march":"Hold one dumbbell at your side like a suitcase and stand tall. March slowly without leaning toward or away from the weight. Keep shoulders and hips level, then switch sides after the prescribed time.",
  "Incline treadmill walk":"Walk at a comfortable pace with a modest incline. Keep posture tall and avoid hanging on the rails. This session should feel restorative and conversational, around 4–5 out of 10 effort.",
  "Arm circles / shoulder rolls":"Stand tall and make small-to-moderate controlled circles with the arms, then relaxed shoulder rolls. Keep the range comfortable and avoid forcing the neck or shoulders.",
  "Tempo split squat":"Use the same split-squat setup, but make bodyweight harder by taking about three seconds to lower and pausing for one second near the bottom. Stand normally and keep roughly two good reps in reserve.",
  "Push-up":"Place hands on a stable surface at a height that suits your strength, from wall to floor. Keep your body long, lower your chest with elbows angled back, then press away. If wrists hurt, use a higher surface or another comfortable hand position.",
  "Single-leg glute bridge":"Lie on your back with one foot planted and the other leg lifted. Brace lightly, drive through the planted foot and squeeze that glute to raise your hips. Keep your pelvis level and stop before your lower back takes over.",
  "Single-leg RDL reach":"Stand on one leg, soften the knee and reach your free leg backward as your torso tips forward. Reach your hands forward for counterbalance. Keep hips mostly square and use a wall lightly if balance is the limiting factor.",
  "Reverse lunge":"From standing, step one foot backward and lower the back knee toward the floor. Keep the front foot planted and push through the front leg to return to standing. Use support or switch to a static split squat if balance is awkward.",
  "Front plank":"Set your elbows under your shoulders and extend your legs behind you, or use your knees for an easier version. Brace your abdomen and lightly squeeze your glutes so your body stays long. Stop when your hips sag or your lower back takes over.",
  "Glute bridge hold":"Lift into the top of a glute bridge and hold there by squeezing your glutes. Keep your ribs down and pelvis controlled rather than arching higher through the lower back.",
  "March in place":"Stand tall and alternate lifting the knees while swinging the opposite arm. Start easy and gradually make the march brisker. Keep it low impact and use this to warm the whole body.",
  "Bodyweight squat":"Stand about shoulder-width with toes slightly turned out if comfortable. Sit between your legs while keeping your whole foot grounded and knees tracking with toes. Stand by pushing the floor away.",
  "Tempo bodyweight squat":"Perform a normal bodyweight squat but take about three seconds to lower and pause for one second at your controlled bottom position. Stand smoothly without bouncing; the slow tempo creates the challenge.",
  "Alternating reverse lunge":"Step one foot backward into a reverse lunge, push through the front leg to return to standing, then alternate sides. Stay controlled and use light support if balance interferes with leg work.",
  "30:30 conditioning rotation":"Work briskly for 30 seconds, then move easily for 30 seconds. Rotate among fast marching, low-impact step jacks, alternating knee drives and squat-to-reach. Keep impact low and effort around 7 out of 10.",
  "Bird dog":"Start on hands and knees with a long spine. Reach one arm forward and the opposite leg back without twisting your pelvis or arching your lower back. Pause, return slowly and alternate sides."
};

const weeks = {
 1:"2 sets · learn movements · ~3 reps in reserve",
 2:"2 sets · add a little load or reps",
 3:"3 sets on strength work · 2–3 reps in reserve",
 4:"3 sets · progress load/reps",
 5:"2 sets · recovery week",
 6:"3 sets · ~2 reps in reserve",
 7:"3 sets · progress load/reps",
 8:"3 sets · strongest week, no grinding"
};
