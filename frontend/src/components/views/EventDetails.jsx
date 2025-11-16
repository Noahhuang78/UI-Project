import { useParams } from "react-router-dom";
import events from "../../assets/EventData.json";
import Image from "../cards/Image";
import RegisterButton from "../buttons/RegisterButton";
import { useState } from "react";

export default function EventDetails({ registeredEvents, setRegisteredEvents }) {
  const { id } = useParams();
  const event = events.find((event) => event.id == id);
  const isRegistered = registeredEvents.some((event) => event.id == id);

  return (
    <div className="details-container">
      <div className="header">
        <Image imgSrc={event.imgSrc} category={event.category} />
        <text>{event.organisation}</text>
        <h1>{event.title}</h1>
        <div className="footer"></div>
      </div>

      <div className="details">
        <div className="about">
          <h2>About this Opportunity</h2>
          {event.description}
        </div>

        <div className="company-info">
          <h3>Company Information</h3>
          <div className="info-wrapper">
            <div className="info-item">
              <span className="material-symbols-outlined">calendar_today</span>
              <span>{event.date}</span>
            </div>

            <div className="info-item">
              <span className="material-symbols-outlined">
                nest_clock_farsight_analog
              </span>
              <span>{event.time}</span>
            </div>

            <div className="info-item">
              <span className="material-symbols-outlined">location_on</span>
              <span>{event.location}</span>
            </div>

            <div className="info-item">
              <span className="material-symbols-outlined">group</span>
              <span>{event.spots} interested</span>
            </div>
          </div>
        </div>
      </div>
      <RegisterButton
        text={isRegistered ? "Registered" : "Register"}
        icon={isRegistered ? "check_circle" : null}
        isRegistered={isRegistered}
        event={event}
        setRegisteredEvents={setRegisteredEvents}
      />
    </div>
  );
}
