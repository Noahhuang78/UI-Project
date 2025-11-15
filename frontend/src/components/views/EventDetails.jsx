import { useParams } from "react-router-dom";
import events from "../../assets/EventData.json";
import Image from "../cards/Image";
import Button from "../buttons/Button"

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((event) => event.id == id);

  return (
    <div className="details-container">
      <div className="header">
        <Image imgSrc={event.imgSrc} category={event.category} />
        <p>{event.tag}</p>
        <span>{event.organisation}</span>
        <h1>{event.title}</h1>
        <div className="footer"></div>
        <div className="details">
          <div className="about">
            <h2>About this Opportunity</h2>
            {event.description}
          </div>
        </div>
      </div>
      <Button text="Register" />
    </div>
  );
}
