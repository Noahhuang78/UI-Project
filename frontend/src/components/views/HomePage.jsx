// HomePage.jsx
import { useState } from "react";
import RightSideBar from "../bars/RightSideBar";
import Dashboard from "../sections/Dashboard";
import Recommended from "../sections/Recommended";
import UpcomingEvents from "../sections/UpcomingEvents";
import PersonalizeInterests from "../sections/PersonalizeInterests";
import ClubTags from "../../assets/ClubTags.json";
import EventTags from "../../assets/EventTags.json";
import InternshipTags from "../../assets/InternshipTags.json";
import "./Homepage.css";

export default function HomePage({ data }) {

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [hasSavedInterests, setHasSavedInterests] = useState(false);
  const allTags = [...new Set([
    ...ClubTags,
    ...EventTags,
    ...InternshipTags
  ])];
  


  // toggle a chip on/off
  function handleToggleInterest(interest) {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  }

  function handleSaveInterests() {
    setHasSavedInterests(true);
    // later we can also persist to localStorage or backend here
  }

  function handleSkip() {
    // for now just hide the personalize card
    setHasSavedInterests(true);
  }

  return (
    <div className="grid-container">
      {/* 1) Personalize banner at top (until saved/skipped) */}
      {!hasSavedInterests && (
        <PersonalizeInterests
        allInterests={allTags}              // ⬅ use tags from JSON
        selectedInterests={selectedInterests}
        onToggleInterest={handleToggleInterest}
        onSave={handleSaveInterests}
        onSkip={handleSkip}
      />      
      )}
  
      {/* 2) Upcoming events section – always visible */}
      <UpcomingEvents />
  
      {/* 3) Recommended For You – only after interests are saved/skipped */}
      {hasSavedInterests && (
        <Recommended selectedInterests={selectedInterests} />
      )}
    </div>
  );
}