import { useState } from "react";
import InternshipCard from "../cards/InternshipCard";

export default function Internships({ data, category, tags }) {
  const [selectedTag, setSelectedTag] = useState("");
  const [search, setSearch] = useState("");

  const filteredData = data.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === "" || event.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });
  
  tags.sort();
  return (
    <div className="events-container">
      <h1>Browse {category} </h1>
      <div className="filter">
        <input type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} />
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">
            All
          </option>
          {tags.map((tag) => (
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
            id = {event.id}
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
  );
}
