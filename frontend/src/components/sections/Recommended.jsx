// src/components/sections/Recommended.jsx
import ClubData from "../../assets/ClubData.json";
import EventData from "../../assets/EventData.json";
import InternshipData from "../../assets/InternshipData.json";
import ClubCard from "../cards/ClubCard";
import EventCard from "../cards/EventCard";
import InternshipCard from "../cards/InternshipCard";

function filterByInterests(items, selectedInterests, limit = 4) {
  if (!items || items.length === 0) return [];

  if (!selectedInterests || selectedInterests.length === 0) {
    return items.slice(0, limit);
  }

  const lowerInterests = selectedInterests.map((t) => t.toLowerCase());

  const scored = items
    .map((item) => {
      const itemTags = (item.tags || []).map((t) => t.toLowerCase());
      let score = 0;

      lowerInterests.forEach((tag) => {
        if (itemTags.includes(tag)) score += 1;
      });

      return { item, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.item);

  if (scored.length === 0) {
    return [];
  }

  return scored.slice(0, limit);
}

export default function Recommended({ selectedInterests }) {
  console.log("Recommended – selectedInterests:", selectedInterests);

  const recommendedClubs = filterByInterests(ClubData, selectedInterests, 3);
  const recommendedEvents = filterByInterests(EventData, selectedInterests, 3);
  const recommendedInternships = filterByInterests(
    InternshipData,
    selectedInterests,
    3
  );

  return (
    <section className="recommended-section">
      <h2>Recommended For You</h2>
      <p className="recommended-subtitle">
        Based on your saved interests, here are some clubs, events, and
        internships you might like.
      </p>

      <div className="recommended-grid">
        {/* ---- Clubs column ---- */}
        <div className="recommended-column">
          <h3>Clubs</h3>
          <div className="recommended-card-list">
            {recommendedClubs.map((club) => (
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

        {/* ---- Events column ---- */}
        <div className="recommended-column">
          <h3>Events</h3>
          <div className="recommended-card-list">
            {recommendedEvents.map((event) => (
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

        {/* ---- Internships column ---- */}
        <div className="recommended-column">
          <h3>Internships</h3>
          <div className="recommended-card-list">
            {recommendedInternships.map((internship) => (
              <InternshipCard
                key={internship.id}
                id={internship.id}
                category={internship.category}
                organisation={internship.organisation}
                description={internship.shortDescription || internship.description}
                title={internship.title}
                date={internship.date}
                time={internship.time}
                location={internship.location}
                spots={internship.spots}
                imgSrc={internship.imgSrc}
                tags={internship.tags}
                salary={internship.salary}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
