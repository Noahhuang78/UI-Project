import Events from "../sections/Events";

export default function EventPage({data}) {
  return (
    <div className="grid-container">
      <Events data={data}/>
    </div>
  );
}
