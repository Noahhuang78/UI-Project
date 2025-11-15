import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import EventPage from "./components/views/EventPage";
import InterestPage from "./components/views/InterestPage";
import ClubPage from "./components/views/ClubPage";
import ChatBot from "./components/chatbot/ChatBot";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EventPage" element={<EventPage />} />
        <Route path="/InterestPage" element={<InterestPage />} />
        <Route path="/ClubPage" element={<ClubPage />} />
      </Routes>

      <ChatBot />
    </>
  );
}
