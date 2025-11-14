import Image from "./Image.jsx";
import { useNavigate } from "react-router-dom";

function truncateWords(text, wordLimit) {
  const words = text.split(" "); // split when there's space
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "..."; // join first N words
}

export default function InternshipCard({
  id,
  category,
  tag,
  title,
  organisation,
  description,
  date,
  time,
  location,
  spots,
  salary,
  imgSrc,
}) {
  const navigate = useNavigate();
  return (
    <div className="event-card" onClick={() => navigate(`/internships/${id}`)}>
      <Image imgSrc={imgSrc} category={category} />

      <div className="card-details-wrapper">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-organisation">By {organisation}</div>
        <div className="card-description">{truncateWords(description, 20)}</div>
      </div>
      <div className="internship-card-footer">
        <div className="date">
          <span className="material-symbols-outlined">calendar_today</span>
          <span>{date}</span>
        </div>
        <div className="time">
          <span className="material-symbols-outlined">
            nest_clock_farsight_analog
          </span>
          <span>{time}</span>
        </div>
        <div className="internship-card-location">
          <span className="material-symbols-outlined">location_on</span>
          <span>{location}</span>
        </div>
        <div className="internship-card-spots">
          <span className="material-symbols-outlined">group</span>
          <span>{spots} spots</span>
        </div>
      </div>
    </div>
  );
}
