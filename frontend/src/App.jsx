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
import ChatBot from "./components/chatbot/ChatBot";

export default function App() {
  
  const [joinedClubs, setjoinedClujbs] = useState([])
  const [registeredEvents, setRegisteredEvents] = useState([])
  const [appliedInternships, setappliedInternships] = useState([])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/EventPage" element={<EventPage />} />
      <Route path="/InterestPage" element={<InterestPage />} />
      <Route path="/ClubPage" element={<ClubPage />} />
    </Routes>
  );
}
