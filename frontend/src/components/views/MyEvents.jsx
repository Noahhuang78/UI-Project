import EventCard from "../cards/EventCard";
import { useState } from "react";
import Eventtags from "../../assets/EventTags.json";
import BackButton from "../buttons/BackButton";
import BreadCrumbs from "../bars/BreadCrumbs";
import NavBar from "../bars/BackBar";

export default function MyEvents({ registeredEvents }) {
  const [selectedTag, setSelectedTag] = useState("");
  const [search, setSearch] = useState("");

  const filteredData = registeredEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTag = selectedTag === "" || event.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });
  return (
    <div className="grid-container">
      <div className="events-container">
        <NavBar />
        <h1>My Events</h1>
        <div className="filter">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">All</option>
            {Eventtags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="events-wrapper">
          {filteredData.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              category={event.category}
              organisation={event.organisation}
              description={event.description}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              spots={event.spots}
              imgSrc={event.imgSrc}
              tags={event.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
