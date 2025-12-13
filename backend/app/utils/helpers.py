def certainty_score(choice_type: str) -> float:
    mapping = {
        "uncertain": 0.0,
        "balanced_A": 0.5,
        "balanced_B": 0.5,
        "definite_A": 1.0,
        "definite_B": 1.0
    }
    return mapping.get(choice_type, 0.0)
