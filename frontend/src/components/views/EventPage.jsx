import Events from "../sections/Events";
import Eventtags from "../../assets/EventTags.json"

export default function EventPage({data}) {
  return (
    <div className="grid-container">
      <Events data={data} category="Events" tags={Eventtags}/>
    </div>
  );
}
