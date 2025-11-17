import { useParams } from "react-router-dom";
import clubs from "../../assets/ClubData.json";
import Image from "../cards/Image";
import Button from "../buttons/ApplyButton";
import JoinButton from "../buttons/JoinButton";
import BackButton from "../buttons/BackButton";
import BreadCrumbs from "../bars/BreadCrumbs";
import NavBar from "../bars/BackBar";

export default function ClubDetails({ joinedClubs, setJoinedClubs }) {
  const { id } = useParams();
  const club = clubs.find((club) => club.id == id);
  const isJoined = joinedClubs.some((club) => club.id == id);

  const handleJoinToggle = async () => {
    if (isJoined) {
      // remove from joined list
      setJoinedClubs(joinedClubs.filter((c) => c.id !== id));
      const leaveClub = async () => {
        try {
          await fetch(`http://localhost:8000/myclubs/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
        } catch (e) {
          console.error(e);
        }
      };
      leaveClub();
    } else {
      // add to joined list
      setJoinedClubs([...joinedClubs, club]);
      const joinClub = async () => {
        try {
          await fetch("http://localhost:8000/myclubs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(club),
          });
        } catch (e) {
          console.error(e);
        }
      };
      joinClub();
    }
  };
  return (
    <div className="details-container">
      <NavBar />
      <div className="header">
        <Image imgSrc={club.imgSrc} category={club.category} />
        <text>{club.organisation}</text>
        <h1>{club.title}</h1>
        <div className="footer"></div>
      </div>

      <div className="details">
        <div className="about">
          <h2>About this Opportunity</h2>
          {club.description}
        </div>

        <div className="company-info">
          <h3>Company Information</h3>
          <div className="info-wrapper">
            <div className="info-item">
              <span className="material-symbols-outlined">calendar_today</span>
              <span>{club.date}</span>
            </div>

            <div className="info-item">
              <span className="material-symbols-outlined">
                nest_clock_farsight_analog
              </span>
              <span>{club.time}</span>
            </div>

            <div className="info-item">
              <span className="material-symbols-outlined">location_on</span>
              <span>{club.location}</span>
            </div>

            <div className="info-item">
              <span className="material-symbols-outlined">group</span>
              <span>{club.spots} members</span>
            </div>
          </div>
        </div>
      </div>
      <div className="button-row">
        <JoinButton
          text={isJoined ? "Joined" : "Join"}
          icon={isJoined ? "check_circle" : null}
          onClick={handleJoinToggle}
        />
      </div>
    </div>
  );
}
