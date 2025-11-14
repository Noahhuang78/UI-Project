import { useParams } from "react-router-dom";
import Internships from "../../assets/InternshipData.json";
import Image from "../cards/Image";
import Button from "../buttons/Button";

export default function InternshipDetails() {
  const { id } = useParams();
  const internship = Internships.find((internship) => internship.id == id);

  return (
    <div className="details-container">
      <div className="header">
        <Image imgSrc={internship.imgSrc} category={internship.category} />
        <p>{internship.tag}</p>
        <span>{internship.organisation}</span>
        <h1>{internship.title}</h1>
        <div className="footer"></div>
      </div>

      <div className="details">
        <div className="about">
          <h2>About this Opportunity</h2>
          {internship.description}
        </div>
        <div className="requirements">
          <h2>Requirements</h2>
          <ul>
            {internship.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          <div className="company-info">
            <h3>Company Information</h3>
            <div className="info-wrapper">
              <span className="material-symbols-outlined">calendar_today</span>
              <span>{internship.date}</span>
              <span className="material-symbols-outlined">
                nest_clock_farsight_analog
              </span>
              <span>{internship.time}</span>
              <span className="material-symbols-outlined">location_on</span>
              <span>{internship.location}</span>
              <span className="material-symbols-outlined">group</span>
              <span>{internship.spots} spots</span>
              <span className="material-symbols-outlined">local_atm</span>
              <span>Salary {internship.salary}</span>
            </div>
          </div>
        </div>
      </div>
      <Button />
      <button style={{ backgroundColor: "gray" }}>
        <div className="save-internship">
            <span class="material-symbols-outlined">bookmark</span>
            Save
        </div>
      </button>
    </div>
  );
}
