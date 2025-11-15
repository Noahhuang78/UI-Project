import InternshipData from "../../assets/InternshipData.json";
import Internships from "../sections/Internships";
import Internshiptags from "../../assets/InternshipTags.json";

export default function InternshipPage() {
  return(
  <div className="grid-container">
    <Internships data={InternshipData} category="Internship" tags={Internshiptags} />
  </div>
 )}
