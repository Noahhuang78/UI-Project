// src/components/sections/NewsPreferences.jsx

export default function NewsPreferences({
    availableFilters,
    selectedNewsFilters,
    onToggleFilter,
    onClearFilters
  }) {
    return (
      <section className="news-pref-card">
        <div className="news-pref-header">
          <div>
            <h2>Newsletter Preferences</h2>
            <p>Select what kind of updates you want to see in your newsfeed.</p>
          </div>
  
          {/* Optional clear button */}
          {selectedNewsFilters.length > 0 && (
            <button
              type="button"
              className="btn-ghost"
              onClick={onClearFilters}
            >
              Clear
            </button>
          )}
        </div>
  
        <div className="news-pref-tags">
          {availableFilters.map((filter) => {
            const isActive = selectedNewsFilters.includes(filter);
            return (
              <button
                key={filter}
                type="button"
                // reuse the same chip styles as interests for now
                className={
                  "interest-chip" + (isActive ? " interest-chip-active" : "")
                }
                onClick={() => onToggleFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>
    );
  }
  