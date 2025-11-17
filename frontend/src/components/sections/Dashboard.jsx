// export default function UpcomingEvents({ onEditInterests }) {
//   return (
//     <div className="dashboard-container">
//       <h1>Welcome back, Name</h1>
//       <p>Your gateway to campus activities, clubs, and opportunities.</p>

//       <div className="dashboard-cards">
//         <div className="dashboard-card">
//           <span className="material-symbols-outlined">padel</span>2 My Clubs
//         </div>
//         <div className="dashboard-card">
//           <span className="material-symbols-outlined">event</span>1 Upcoming Events
//         </div>
//         <div className="dashboard-card">
//           <span className="material-symbols-outlined">work</span>8 Opportunities
//         </div>
//       </div>

//       {/* Make this button trigger the Personalize popup */}
//       <button
//         className="update-interest-btn"
//         onClick={onEditInterests}
//       >
//         Update my Interests
//       </button>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
 
export default function Dashboard({ joinedClubs, registeredEvents, savedInternships, onEditInterests }) {
  const navigate = useNavigate();
 
  return (
    <div className="dashboard-container">
      <h1>Welcome back, Name</h1>
      <p>Your gateway to campus activities, clubs, and opportunities.</p>
      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={() => navigate("/joinedClubs")}>
          <span className="material-symbols-outlined">padel</span>
          <h2>{joinedClubs.length}</h2> My Clubs
        </div>
        <div className="dashboard-card" onClick={() => navigate("/registeredEvents")}>
          <span className="material-symbols-outlined">event</span>
          <h2>{registeredEvents.length}</h2> Registered Events
        </div>
        <div className="dashboard-card" onClick={() => navigate("/savedInternships")}>
          <span className="material-symbols-outlined">work</span>
          <h2>{savedInternships.length}</h2> Saved Internships
        </div>
      </div>
      <button  className="update-interest-btn" onClick={onEditInterests}> Update my Interests </button>
    </div>
  );
}
 
 