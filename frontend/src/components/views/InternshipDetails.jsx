import { useParams } from "react-router-dom";
import Internships from "../../assets/InternshipData.json";
import Image from "../cards/Image";
import ApplyButton from "../buttons/ApplyButton";
import SaveButton from "../buttons/SaveButton";
import BackButton from "../buttons/BackButton";
import BreadCrumbs from "../bars/BreadCrumbs";
import NavBar from "../bars/BackBar";

export default function InternshipDetails({
  savedInternships,
  setSavedInternships,
  appliedInternships,
  setAppliedInternships,
}) {
  const { id } = useParams();
  const internship = Internships.find((internship) => internship.id == id);

  const isApplied = appliedInternships.some(
    (internship) => internship.id == id
  );
  const isSaved = savedInternships.some((internship) => internship.id == id);

  const handleSaveToggle = async () => {
    if (isSaved) {
      // remove from joined list
      setSavedInternships(savedInternships.filter((c) => c.id !== id));

      const unSaveInternship = async () => {
        await fetch(`http://localhost:8000/myinternships/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
      };
      unSaveInternship();
    } else {
      // add to joined list
      setSavedInternships([...savedInternships, internship]);

      const saveInternship = async () => {
        try {
          await fetch("http://localhost:8000/myinternships", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(internship),
          });
        } catch (e) {
          console.error(e);
        }
      };
      saveInternship();
    }
  };
  return (
    <>
      <div className="details-container">
        <NavBar />
        <div className="header">
          <Image imgSrc={internship.imgSrc} category={internship.category} />
          <text>{internship.organisation}</text>
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
          </div>
          <div className="company-info">
            <h3>Company Information</h3>
            <div className="info-wrapper">
              <div className="info-item">
                <span className="material-symbols-outlined">
                  calendar_today
                </span>
                <span>{internship.date}</span>
              </div>

              <div className="info-item">
                <span className="material-symbols-outlined">
                  nest_clock_farsight_analog
                </span>
                <span>{internship.time}</span>
              </div>

              <div className="info-item">
                <span className="material-symbols-outlined">location_on</span>
                <span>{internship.location}</span>
              </div>

              <div className="info-item">
                <span className="material-symbols-outlined">group</span>
                <span>{internship.spots} spots</span>
              </div>

              <div className="info-item">
                <span className="material-symbols-outlined">local_atm</span>
                <span>Salary {internship.salary}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-row">
          <ApplyButton
            text={isApplied ? "Applied" : "Apply"}
            icon={isApplied ? "check_circle" : null}
            internship={internship}
            setAppliedInternships={setAppliedInternships}
            isApplied={isApplied}
          />
          <SaveButton
            text={isSaved ? "Saved" : "Save"}
            icon={isSaved ? "check_circle" : null}
            onClick={handleSaveToggle}
          />
        </div>
      </div>
    </>
  );
}
