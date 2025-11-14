import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import EventPage from "./components/views/EventPage";
import InternshipPage from "./components/views/InternshipPage";
import ClubPage from "./components/views/ClubPage";
import RightSideBar from "./components/bars/RightSideBar";
import { useState } from "react";
import ClubData from "./assets/ClubData.json"
import EventData from "./assets/EventData.json"
import InternshipData from "./assets/EventData.json"
import InterestTags from "./assets/InterestTags.json"


export default function App() {
  const tags = InterestTags
  
  const [joinedClubs, setjoinedClujbs] = useState([])
  const [registeredEvents, setRegisteredEvents] = useState([])
  const [appliedInternships, setappliedInternships] = useState([])

  return (
    <>
    <div className="hub-container">
      <RightSideBar/>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/EventPage" element={<EventPage data={EventData} />} />
        <Route path="/InternshipPage" element={<InternshipPage />} />
        <Route path="/ClubPage" element={<ClubPage />} />
      </Routes>
    </div>
  
  </>
  )
}
