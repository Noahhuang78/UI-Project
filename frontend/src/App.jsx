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
import InternshipDetails from "./components/views/InternshipDetails";
import EventDetails from "./components/views/EventDetails"
import ClubDetails from "./components/views/ClubDetails";
export default function App() {
  
  const [joinedClubs, setjoinedClujbs] = useState([])
  const [registeredEvents, setRegisteredEvents] = useState([])
  const [appliedInternships, setappliedInternships] = useState([])

  return (
    <>
    <div className="hub-container">
      <RightSideBar/>
      <Routes>
        <Route path='/clubs/:id' element={<ClubDetails/>}></Route>
        <Route path='/events/:id' element={<EventDetails/>}></Route>
        <Route path='/internships/:id' element={<InternshipDetails/>}></Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventPage data={EventData} />} />
        <Route path="/internships" element={<InternshipPage />} />
        <Route path="/clubs" element={<ClubPage />} />
      </Routes>
    </div>
  
  </>
  )
}
