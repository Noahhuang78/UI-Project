// src/components/sections/NewsFeed.jsx
import NewsData from "../../assets/NewsData.json";

function filterNewsByFilters(newsItems, selectedFilters) {
  if (!selectedFilters || selectedFilters.length === 0) {
    // No filters → show latest few items
    return newsItems.slice(0, 6);
  }

  const lowerFilters = selectedFilters.map(f => f.toLowerCase());

  // Map UI chips to keywords in type/tags
  const filterMap = {
    events: ["events", "event"],
    internships: ["internships", "internship"],
    clubs: ["clubs", "club"],
    wellness: ["wellness", "mental health"],
    academics: ["academics", "scholarships"],
    volunteering: ["volunteering", "community", "teaching", "service"]
  };

  return newsItems.filter(item => {
    const allKeywords = [
      item.type?.toLowerCase() || "",
      ...(item.tags || []).map(t => t.toLowerCase())
    ];

    // for each selected filter, check mapped keywords
    return lowerFilters.some(filterLabel => {
      const key = filterLabel.toLowerCase(); // "events", "internships", etc.
      const mappedKeywords = filterMap[key] || [key];
      return mappedKeywords.some(kw => allKeywords.includes(kw));
    });
  });
}

export default function NewsFeed({ selectedNewsFilters }) {
  const filteredNews = filterNewsByFilters(NewsData, selectedNewsFilters);

  return (
    <section className="newsfeed-section">
      <h2>Newsfeed</h2>
      {filteredNews.length === 0 ? (
        <p>No news found for your selected filters yet.</p>
      ) : (
        <div className="newsfeed-grid">
          {filteredNews.map(item => (
            <article key={item.id} className="news-card">
              <p className="news-date">{item.date}</p>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-summary">{item.summary}</p>
              <div className="news-tags">
                {(item.tags || []).slice(0, 4).map(tag => (
                  <span key={tag} className="news-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
