import internshipImage from "../../assets/internship_image.png";
export default function InternshipCard({ applyDate, location, partTime, pay }) {
  return (
    <div className="-card">
      <img src={internshipImage} alt="internship" />
      <div className="date">
        <span className="material-symbols-outlined">calendar_today</span>
        <span>{date}</span>
      </div>
      <div className="internship-footer">
        <span class="material-symbols-outlined">
        location_on
        </span>
      </div>
    </div>
  );
}
