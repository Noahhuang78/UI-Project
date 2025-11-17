// src/components/sections/Dashboard.jsx

<<<<<<< HEAD
export default function Dashboard({ joinedClubs, registeredEvents, savedInternships }) {
  const navigate = useNavigate();
  
  return (
    <div className="dashboard-container">
      <h1>Welcome back, Name</h1>
      <p>Your gateway to campus activities, clubs, and opportunities.</p>
      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={() => navigate("/MyClubs")}>
          <span className="material-symbols-outlined">padel</span>
          <h2>{joinedClubs.length}</h2> My Clubs
        </div>
        <div className="dashboard-card" onClick={() => navigate("/RegisteredEvents")}>
          <span className="material-symbols-outlined">event</span>
          <h2>{registeredEvents.length}</h2> Registered Events
        </div>
        <div className="dashboard-card" onClick={() => navigate("/SavedInternships")}>
          <span className="material-symbols-outlined">work</span>
          <h2>{savedInternships.length}</h2> Saved Internships
        </div>
      </div>
      <button className="update-interest-btn">Update my Interests</button>
    </div>
  );
}
=======
export default function Dashboard() {
    return (
      <section className="dashboard">
        <h2>Your Dashboard</h2>
      </section>
    );
  }
  
>>>>>>> c43081b5a69720c7350bf77c5f4c4ecef1760369
