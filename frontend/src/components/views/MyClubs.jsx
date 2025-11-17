import ClubCard from "../cards/ClubCard";
import { useState } from "react";
import clubtags from "../../assets/ClubTags.json";
import BackButton from "../buttons/BackButton";
import BreadCrumbs from "../bars/BreadCrumbs";
import NavBar from "../bars/BackBar";

export default function Myclubs({ joinedClubs }) {
  const [selectedTag, setSelectedTag] = useState("");
  const [search, setSearch] = useState("");

  const filteredData = joinedClubs.filter((club) => {
    const matchesSearch = club.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTag = selectedTag === "" || club.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });
  return (
    <div className="grid-container">
      <div className="events-container">
        <NavBar />
        <h1>My clubs</h1>
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
            {clubtags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="events-wrapper">
          {filteredData.map((club) => (
            <ClubCard
              key={club.id}
              id={club.id}
              category={club.category}
              organisation={club.organisation}
              description={club.description}
              title={club.title}
              date={club.date}
              time={club.time}
              location={club.location}
              spots={club.spots}
              imgSrc={club.imgSrc}
              tags={club.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
