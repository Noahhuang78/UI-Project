import RightSideBar from "../bars/RightSideBar";
import Dashboard from "../sections/Dashboard";
import Recommended from "../sections/Recommended";
import UpcomingEvents from "../sections/UpcomingEvents";
import { useState } from "react";
import "./Homepage.css";
import { use } from "react";

export default function HomePage({data}) {


  return (  
    <div className="grid-container">
      <UpcomingEvents />
    </div>
  );
}
