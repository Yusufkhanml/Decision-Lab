-- ======================
-- SCENARIO 1: Spend vs Save
-- ======================
INSERT INTO scenarios (domain, title, story_text)
VALUES (
    'finance',
    'Spend vs Save',
    'He wants to buy something. Spending gives joy now. Saving gives security later. Both feel right.'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(1, 'I am not sure', 'uncertain', 1),
(1, 'I will spend the money, but saving is also not wrong', 'balanced_A', 2),
(1, 'I will save the money, but spending is also not wrong', 'balanced_B', 3),
(1, 'Definitely, I will spend the money', 'definite_A', 4),
(1, 'Definitely, I will save the money', 'definite_B', 5);

-- ======================
-- SCENARIO 2: Specialist vs Generalist
-- ======================
INSERT INTO scenarios (domain, title, story_text)
VALUES (
    'career',
    'Specialist vs Generalist',
    'Mastering one skill gives depth. Learning many gives flexibility. Both have risks.'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(2, 'I am not sure', 'uncertain', 1),
(2, 'I will specialize, but generalizing is also not wrong', 'balanced_A', 2),
(2, 'I will generalize, but specializing is also not wrong', 'balanced_B', 3),
(2, 'Definitely, I will specialize', 'definite_A', 4),
(2, 'Definitely, I will generalize', 'definite_B', 5);

-- ======================
-- SCENARIO 3: Overthink vs Let Go
-- ======================
INSERT INTO scenarios (domain, title, story_text)
VALUES (
    'psychology',
    'Overthink vs Let Go',
    'Thinking more feels responsible. Letting go feels peaceful. His mind keeps looping.'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(3, 'I am not sure', 'uncertain', 1),
(3, 'I will overthink, but letting go is also not wrong', 'balanced_A', 2),
(3, 'I will let go, but overthinking is also not wrong', 'balanced_B', 3),
(3, 'Definitely, I will overthink', 'definite_A', 4),
(3, 'Definitely, I will let go', 'definite_B', 5);

-- ======================
-- SCENARIO 4: Stay vs Leave
-- ======================
INSERT INTO scenarios (domain, title, story_text)
VALUES (
    'relationships',
    'Stay vs Leave',
    'Staying feels safe. Leaving might lead to something better. Both choices hurt.'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(4, 'I am not sure', 'uncertain', 1),
(4, 'I will stay, but leaving is also not wrong', 'balanced_A', 2),
(4, 'I will leave, but staying is also not wrong', 'balanced_B', 3),
(4, 'Definitely, I will stay', 'definite_A', 4),
(4, 'Definitely, I will leave', 'definite_B', 5);

-- ======================
-- SCENARIO 5: Healthy vs Tasty
-- ======================
INSERT INTO scenarios (domain, title, story_text)
VALUES (
    'lifestyle',
    'Healthy Meal vs Tasty Meal',
    'Healthy food supports the body. Tasty food comforts the mood. Both feel justified.'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(5, 'I am not sure', 'uncertain', 1),
(5, 'I will eat healthy, but tasty food is also not wrong', 'balanced_A', 2),
(5, 'I will eat tasty food, but healthy eating is also not wrong', 'balanced_B', 3),
(5, 'Definitely, I will eat healthy food', 'definite_A', 4),
(5, 'Definitely, I will eat tasty food', 'definite_B', 5);

-- ======================
-- SCENARIO 6: Cheap vs Quality
-- ======================
INSERT INTO scenarios (domain, title, story_text)
VALUES (
    'finance',
    'Buy Cheap vs Buy Quality',
    'Cheap saves money now. Quality saves money later. Neither feels perfect.'
);

INSERT INTO scenario_options (scenario_id, option_text, choice_type, display_order) VALUES
(6, 'I am not sure', 'uncertain', 1),
(6, 'I will buy cheap, but quality is also not wrong', 'balanced_A', 2),
(6, 'I will buy quality, but cheap is also not wrong', 'balanced_B', 3),
(6, 'Definitely, I will buy cheap', 'definite_A', 4),
(6, 'Definitely, I will buy quality', 'definite_B', 5);
