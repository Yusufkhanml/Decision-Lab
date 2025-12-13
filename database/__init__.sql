CREATE TABLE scenarios (
    scenario_id SERIAL PRIMARY KEY,
    domain VARCHAR(50) NOT NULL,
    title VARCHAR(100) NOT NULL,
    story_text TEXT NOT NULL,
    image_url TEXT,
    gif_url TEXT,
    audio_url TEXT
);

CREATE TABLE scenario_options (
    option_id SERIAL PRIMARY KEY,
    scenario_id INT NOT NULL REFERENCES scenarios(scenario_id) ON DELETE CASCADE,
    option_text TEXT NOT NULL,
    choice_type VARCHAR(20) NOT NULL,
    display_order INT NOT NULL
);

CREATE TABLE responses (
    response_id SERIAL PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    scenario_id INT NOT NULL,
    option_id INT NOT NULL,
    choice_type VARCHAR(20) NOT NULL,
    choice_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
