import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import EventPage from "./components/views/EventPage";
import InternshipPage from "./components/views/InternshipPage";
import ClubPage from "./components/views/ClubPage";
import RightSideBar from "./components/bars/RightSideBar";

export default function App() {
  return (
    <>
    <div className="hub-container">
      <RightSideBar/>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/EventPage" element={<EventPage />} />
        <Route path="/InternshipPage" element={<InternshipPage />} />
        <Route path="/ClubPage" element={<ClubPage />} />
      </Routes>
    </div>
  
  </>
  )
}
