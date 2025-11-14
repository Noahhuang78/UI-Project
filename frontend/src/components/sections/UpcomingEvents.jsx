import EventCard from "../cards/EventCard"
import eventImage from "../../assets/event_image.png";
export default function UpcomingEvents() {
  return (
    <div className="events-container">
        <h1>Upcoming Events</h1>
        <div className="events-wrapper">
            <EventCard date="Dec 21, 2025" time="3.00pm" location="786 Somapah Road" spots="18/19 attendees" imgSrc={eventImage}/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    </div>
  )
}
