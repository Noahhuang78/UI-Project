import EventCard from "../cards/EventCard";
import eventImage from "../../assets/event_image.png";
export default function Events({ data }) {
  return (
    
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <div className="events-wrapper">
        {data.map((event)=> <EventCard key={event.id} category={event.category} organisation={event.organisation} description={event.description} title={event.title} date={event.date} time={event.time} location={event.location} spots={event.spots} imgSrc={`${event.imgSrc}?w=400&h=300&fit=crop&auto=format`}/>)}

      </div>
    </div>
  );
}
