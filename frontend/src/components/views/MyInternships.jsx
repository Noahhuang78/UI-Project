import InternshipCard from "../cards/InternshipCard";
import { useState } from "react";
import Internshiptags from "../../assets/InternshipTags.json";
import BackButton from "../buttons/BackButton";
import BreadCrumbs from "../bars/BreadCrumbs";
import NavBar from "../bars/BackBar";

export default function MyInternships({ savedInternships }) {
  const [selectedTag, setSelectedTag] = useState("");
  const [search, setSearch] = useState("");

  const filteredData = savedInternships.filter((event) => {
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
        <h1>Saved Internships</h1>
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
            {Internshiptags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="events-wrapper">
          {filteredData.map((event) => (
            <InternshipCard
              key={event.id}
              id={event.id}
              tags={event.tags}
              category={event.category}
              organisation={event.organisation}
              description={event.shortDescription}
              title={event.title}
              date={event.date}
              time={event.time}
              salary={event.salary}
              location={event.location}
              spots={event.spots}
              imgSrc={event.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
