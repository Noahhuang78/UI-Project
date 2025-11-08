import eventImage from "../../assets/event_image.png";
export default function EventCard({ date, time }) {
  return (
    <div className="event-card">
      <img src={eventImage} alt="event" />
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
    </div>
  );
}
