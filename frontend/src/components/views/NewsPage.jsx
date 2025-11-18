// src/components/views/NewsPage.jsx
import { useState, useEffect } from "react";
import NewsPreferences from "../sections/NewsPreferences";
import NewsFeed from "../sections/NewsFeed";
import "../views/Homepage.css"; // or a new CSS if you prefer

const LS_NEWS_FILTERS_KEY = "campushub_news_filters";

export default function NewsPage() {
  const availableNewsFilters = [
    "Events",
    "Internships",
    "Clubs",
    "Wellness",
    "Academics",
    "Volunteering",
    "Business-Society",
    "DJ",
  ];

  const [selectedNewsFilters, setSelectedNewsFilters] = useState([]);

  useEffect(() => {
    try {
      const storedFilters = JSON.parse(
        localStorage.getItem(LS_NEWS_FILTERS_KEY) || "[]"
      );
      if (storedFilters.length > 0) {
        setSelectedNewsFilters(storedFilters);
      }
    } catch (e) {
      console.warn("Failed to read news filters from localStorage", e);
    }
  }, []);

  function handleToggleNewsFilter(filter) {
    setSelectedNewsFilters((prev) => {
      const next = prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter];

      localStorage.setItem(LS_NEWS_FILTERS_KEY, JSON.stringify(next));
      return next;
    });
  }

  function handleClearNewsFilters() {
    setSelectedNewsFilters([]);
    localStorage.removeItem(LS_NEWS_FILTERS_KEY);
  }

  return (
    <div className="grid-container">
      <section className="news-section">
        <NewsPreferences
          availableFilters={availableNewsFilters}
          selectedNewsFilters={selectedNewsFilters}
          onToggleFilter={handleToggleNewsFilter}
          onClearFilters={handleClearNewsFilters}
        />
        <NewsFeed selectedNewsFilters={selectedNewsFilters} />
      </section>
    </div>
  );
}
