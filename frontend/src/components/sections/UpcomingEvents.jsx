import EventCard from "../cards/EventCard"
export default function UpcomingEvents() {
  return (
    <div className="upcoming-events-container">
        <h1>Upcoming Events</h1>
        <div className="upcoming-events-wrapper">
            <EventCard date="Dec 21, 2025" time="3.00pm"/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    </div>
  )
}
