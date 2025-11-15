// src/components/sections/PersonalizeInterests.jsx
export default function PersonalizeInterests({
    allInterests,
    selectedInterests,
    onToggleInterest,
    onSave,
    onSkip,
  }) {
    return (
      <section className="personalize-card">
        <div className="personalize-header">
          <div>
            <h2>Personalize Your Experience</h2>
            <p>Select your interests to get tailored recommendations</p>
          </div>
          <button className="personalize-close" onClick={onSkip}>
            ✕
          </button>
        </div>
  
        <div className="personalize-tags">
          {allInterests.map((interest) => {
            const isActive = selectedInterests.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                className={
                  "interest-chip" + (isActive ? " interest-chip-active" : "")
                }
                onClick={() => onToggleInterest(interest)}
              >
                {interest}
              </button>
            );
          })}
        </div>
  
        <div className="personalize-actions">
          <button type="button" className="btn-ghost" onClick={onSkip}>
            Skip for now
          </button>
          <button type="button" className="btn-primary" onClick={onSave}>
            Save Interests
          </button>
        </div>
      </section>
    );
  }
  