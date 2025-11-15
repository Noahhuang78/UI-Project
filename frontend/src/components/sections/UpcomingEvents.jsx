export default function UpcomingEvents() {
  return (
    <div className="dashboard-container">
      <h1>Welcome back, Name</h1>
      <p>Your gateway to campus activities, clubs, and opportunities.</p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span className="material-symbols-outlined">padel</span>2 My Clubs
        </div>
        <div className="dashboard-card">
          <span class="material-symbols-outlined">event</span>1 Upcoming Events
        </div>
        <div className="dashboard-card">
          <span class="material-symbols-outlined">work</span>8 Opportunities
        </div>
      </div>
      <button className="update-interest-btn">Update my Interests</button>
    </div>
  );
}
