import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import EventPage from "./components/views/EventPage";
import NewsPage from "./components/views/NewsPage";
import InternshipPage from "./components/views/InternshipPage";
import ClubPage from "./components/views/ClubPage";
import RightSideBar from "./components/bars/RightSideBar";
import { useEffect, useState } from "react";
import EventData from "./assets/EventData.json";
import InternshipDetails from "./components/views/InternshipDetails";
import EventDetails from "./components/views/EventDetails";
import ClubDetails from "./components/views/ClubDetails";
import MyEvents from "./components/views/MyEvents";
import MyClubs from "./components/views/MyClubs";
import MyInternships from "./components/views/MyInternships";
import NewsDetail from "./components/views/NewsDetail";
import ChatBot from "./components/chatbot/Chatbot";

export default function App() {
  const [appliedInternships, setAppliedInternships] = useState([]);
  const [savedInternships, setSavedInternships] = useState([]);
  const [joinedClubs, setJoinedClubs] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    const loadSavedInternships = async () => {
      try {
        const res = await fetch("http://localhost:8000/myinternships");
        const myinternships = await res.json();
        setSavedInternships(myinternships);
      } catch (e) {
        console.error(`failed to retrieve my internships: ${e}`);
      }
    };

    const loadJoinedClubs = async () => {
      try {
        const res = await fetch("http://localhost:8000/myclubs");
        const myclubs = await res.json();
        setJoinedClubs(myclubs);
      } catch (e) {
        console.error(`failed to retrieve my clubs: ${e}`);
      }
    };

    const loadRegisteredEvents = async () => {
      try {
        const res = await fetch("http://localhost:8000/myevents");
        const myevents = await res.json();
        setRegisteredEvents(myevents);
      } catch (e) {
        console.error(`failed to retrieve my events: ${e}`);
      }
    };

    loadSavedInternships();
    loadJoinedClubs();
    loadRegisteredEvents();
  }, []);

  return (
    <>
      <div className="hub-container">
        <RightSideBar />

        <Routes>
          {/* main branch paths */}
          <Route
            path="/RegisteredEvents"
            element={<MyEvents registeredEvents={registeredEvents} />}
          ></Route>
          <Route
            path="/SavedInternships"
            element={<MyInternships savedInternships={savedInternships} />}
          ></Route>
          <Route
            path="/MyClubs"
            element={<MyClubs joinedClubs={joinedClubs} />}
          />

          {/* details */}
          <Route
            path="/clubs/:id"
            element={
              <ClubDetails
                joinedClubs={joinedClubs}
                setJoinedClubs={setJoinedClubs}
              />
            }
          />
          <Route
            path="/events/:id"
            element={
              <EventDetails
                registeredEvents={registeredEvents}
                setRegisteredEvents={setRegisteredEvents}
              />
            }
          />
          <Route
            path="/internships/:id"
            element={
              <InternshipDetails
                savedInternships={savedInternships}
                setSavedInternships={setSavedInternships}
                appliedInternships={appliedInternships}
                setAppliedInternships={setAppliedInternships}
              />
            }
          />

          {/* pages */}
          <Route
            path="/home"
            element={
              <HomePage
                joinedClubs={joinedClubs}
                registeredEvents={registeredEvents}
                savedInternships={savedInternships}
              />
            }
          />
          <Route path="/events" element={<EventPage data={EventData} />} />
          <Route path="/internships" element={<InternshipPage />} />
          <Route path="/clubs" element={<ClubPage />} />

          {/* 📰 News */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>

        {/* ✅ Chatbot appears on all pages */}
        <ChatBot />
      </div>
    </>
  );
}
