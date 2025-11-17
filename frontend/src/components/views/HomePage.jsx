// src/components/views/HomePage.jsx
import { useState, useEffect } from "react";
import RightSideBar from "../bars/RightSideBar";
import Recommended from "../sections/Recommended";
import Dashboard from "../sections/Dashboard";
import PersonalizeInterests from "../sections/PersonalizeInterests";

// newsletter feature
import NewsPreferences from "../sections/NewsPreferences";
import NewsFeed from "../sections/NewsFeed";

import ClubTags from "../../assets/ClubTags.json";
import EventTags from "../../assets/EventTags.json";
import InternshipTags from "../../assets/InternshipTags.json";
import "./Homepage.css";

const LS_INTERESTS_KEY = "campushub_interests";
const LS_NEWS_FILTERS_KEY = "campushub_news_filters";

export default function HomePage({ joinedClubs,registeredEvents, savedInternships }) {
  // ----- interests for Recommended section -----
  const allTags = [...new Set([...ClubTags, ...EventTags, ...InternshipTags])];

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [hasSavedInterests, setHasSavedInterests] = useState(false);

  // controls whether the personalise popup/banner is visible
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);

  // ----- newsletter filters for NewsFeed -----
  const availableNewsFilters = [
    "Events",
    "Internships",
    "Clubs",
    "Wellness",
    "Academics",
    "Volunteering",
  ];

  const [selectedNewsFilters, setSelectedNewsFilters] = useState([]);

  // 🔹 Load saved interests + news filters on first render
  useEffect(() => {
    // interests
    try {
      const storedInterests = JSON.parse(
        localStorage.getItem(LS_INTERESTS_KEY) || "[]"
      );

      if (storedInterests.length > 0) {
        setSelectedInterests(storedInterests);
        setHasSavedInterests(true);
        setIsPersonalizeOpen(false); // user already set them
      } else {
        // first time user → show popup
        setIsPersonalizeOpen(true);
      }
    } catch (e) {
      console.warn("Failed to read interests from localStorage", e);
      setIsPersonalizeOpen(true);
    }

    // news filters
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

  // ----- handlers for interests -----
  function handleToggleInterest(interest) {
    setSelectedInterests((prev) => {
      const next = prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest];
      return next;
    });
  }

  function handleSaveInterests() {
    setHasSavedInterests(true);
    setIsPersonalizeOpen(false);
    // persist to localStorage
    localStorage.setItem(LS_INTERESTS_KEY, JSON.stringify(selectedInterests));
  }

  function handleSkip() {
    setHasSavedInterests(true);
    setIsPersonalizeOpen(false);
    // if you want to also clear saved interests on skip, uncomment:
    // localStorage.removeItem(LS_INTERESTS_KEY);
  }

  // ----- handlers for newsletter filters -----
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

  function handleOpenPersonalize() {
    setIsPersonalizeOpen(true);
  }

  // ----- JSX -----
  return (
    <div className="grid-container">
      {/* Personalize interests popup */}
      {isPersonalizeOpen && (
        <PersonalizeInterests
          allInterests={allTags}
          selectedInterests={selectedInterests}
          onToggleInterest={handleToggleInterest}
          onSave={handleSaveInterests}
          onSkip={handleSkip}
        />
      )}

      {/* Top: dashboard + stats / welcome section */}
      <Dashboard onEditInterests={handleOpenPersonalize} joinedClubs={joinedClubs}
                registeredEvents={registeredEvents}
                savedInternships={savedInternships}/>
      {/* Recommended For You (based on interests) */}
      {hasSavedInterests && (
        <Recommended selectedInterests={selectedInterests} />
      )}

      {/* Newsletter Preferences + Newsfeed grouped together */}
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
