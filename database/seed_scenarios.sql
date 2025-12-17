
INSERT INTO scenarios (scenario_id, domain, title, story_text, image_url)
VALUES (
    'finance',
    'Spend vs Save',
    'He wants to buy something. Spending gives joy now. Saving gives security later. Both feel right.'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(1, 'I am not sure', 'uncertain', 1),
(1, 'I will spend the money, but saving is also not wrong', 'balanced', 2),
(1, 'I will save the money, but spending is also not wrong', 'balanced', 3),
(1, 'Definitely, I will spend the money', 'spend', 4),
(1, 'Definitely, I will save the money', 'save', 5);


INSERT INTO scenarios (scenario_id, domain, title, story_text, image_url)
VALUES (
  2,
  'fitness',
  'Gym or Home',
  'You want to exercise.
Gym needs time and travel.
Home is easy but lazy.
Gym pushes you.
Home comforts you.
Which one will you really follow?',
  'assets/gifs/gym-home.gif.jpg'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(2, 'I am not sure', 'uncertain', 1),
(2, 'I will mix gym and home workouts', 'balanced', 2),
(2, 'I will mostly work out at home', 'home', 3),
(2, 'I will go to the gym regularly', 'gym', 4),
(2, 'I will strictly follow gym workouts', 'gym_strict', 5);


INSERT INTO scenarios (scenario_id, domain, title, story_text, image_url)
VALUES (
  3,
  'career',
  'Job or Study',
  'College finished.
Job gives money now.
Study gives value later.
Job means less waiting.
Study means more growth.
Which matters more now?',
  'assets/gifs/job-study.gif.jpg'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(3, 'I am not sure', 'uncertain', 1),
(3, 'I will work now but study later', 'balanced', 2),
(3, 'I will study but earn part-time', 'balanced', 3),
(3, 'I will take the job now', 'job', 4),
(3, 'I will fully focus on higher studies', 'study', 5);


INSERT INTO scenarios (scenario_id, domain, title, story_text, image_url)
VALUES (
  4,
  'life',
  'Family or Career',
  'Family needs your time.
Career needs your focus.
Helping family feels good.
Career builds your future.
You can’t fully do both.
What comes first?',
  'assets/gifs/family-career.gif.jpg'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(4, 'I am not sure', 'uncertain', 1),
(4, 'I will try to balance both', 'balanced', 2),
(4, 'I will prioritize family more', 'family', 3),
(4, 'I will prioritize career more', 'career', 4),
(4, 'I will clearly choose one', 'decisive', 5);


INSERT INTO scenarios (scenario_id, domain, title, story_text, image_url)
VALUES (
  5,
  'decision',
  'Risk or Safe',
  'One option is risky.
One option is safe.
Risk may fail or succeed.
Safe stays stable.
Big change or no change?',
  'assets/gifs/risk-safe.gif.jpg'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(5, 'I am not sure', 'uncertain', 1),
(5, 'I will take small risks', 'balanced', 2),
(5, 'I will mostly stay safe', 'safe', 3),
(5, 'I will take the risk', 'risk', 4),
(5, 'I will always choose big risks', 'high_risk', 5);


INSERT INTO scenarios (scenario_id, domain, title, story_text, image_url)
VALUES (
  6,
  'ethics',
  'Speak or Stay Quiet',
  'You see a problem.
Talking may cause trouble.
Staying quiet avoids trouble.
Truth or peace?',
  'assets/gifs/speak-quiet.gif.jpg'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(6, 'I am not sure', 'uncertain', 1),
(6, 'I will buy cheap, but quality is also not wrong', 'balanced_A', 2),
(6, 'I will buy quality, but cheap is also not wrong', 'balanced_B', 3),
(6, 'Definitely, I will buy cheap', 'definite_A', 4),
(6, 'Definitely, I will buy quality', 'definite_B', 5);
