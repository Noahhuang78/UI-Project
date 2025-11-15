import { useParams } from "react-router-dom";
import clubs from "../../assets/ClubData.json";
import Image from "../cards/Image";
import Button from "../buttons/Button"

export default function ClubDetails() {
  const { id } = useParams();
  const club = clubs.find((club) => club.id == id);

  return (
    <div className="details-container">
      <div className="header">
        <Image imgSrc={club.imgSrc} category={club.category} />
        <p>{club.tag}</p>
        <span>{club.organisation}</span>
        <h1>{club.title}</h1>
        <div className="footer"></div>
        <div className="details">
          <div className="about">
            <h2>About this Opportunity</h2>
            {club.description}
          </div>
        </div>
        <div className="info-wrapper">
          <span className="material-symbols-outlined">calendar_today</span>
          <span>{club.date}</span>
          <span className="material-symbols-outlined">
            nest_clock_farsight_analog
          </span>
          <span>{club.time}</span>
          <span className="material-symbols-outlined">location_on</span>
          <span>{club.location}</span>
          <span className="material-symbols-outlined">group</span>
          <span>{club.spots} spots</span>
          <span className="material-symbols-outlined">local_atm</span>
          <span>Salary {club.salary}</span>
        </div>
        <Button text="Join" />
      </div>
    </div>
  );
}
