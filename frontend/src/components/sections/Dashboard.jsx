import { useNavigate } from "react-router-dom";

export default function Dashboard({
  joinedClubs,
  registeredEvents,
  savedInternships,
  onEditInterests,
}) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome back, Luvin</h1>
      <p>Your gateway to campus activities, clubs, and opportunities.</p>

      <div className="dashboard-cards">
        <div
          className="dashboard-card"
          onClick={() => navigate("/MyClubs")}
        >
          <span className="material-symbols-outlined">padel</span>
          <h2>{joinedClubs.length}</h2> My Clubs
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/RegisteredEvents")}
        >
          <span className="material-symbols-outlined">event</span>
          <h2>{registeredEvents.length}</h2> Registered Events
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/SavedInternships")}
        >
          <span className="material-symbols-outlined">work</span>
          <h2>{savedInternships.length}</h2> Saved Internships
        </div>
      </div>

      <button
        className="update-interest-btn"
        onClick={onEditInterests}
      >
        Update my Interests
      </button>
    </div>
  );
}
