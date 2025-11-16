import { Link } from "react-router-dom";
export default function RightSideBar() {
  return (
    <div className="right-side-bar">
      <ul>
        <li className="menu-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/clubs">Browse Clubs</Link>
        </li>
        <li className="menu-item">
          <Link to="/events">Browse Events</Link>
        </li>
        <li className="menu-item">
          <Link to="/internships">Browse Internships</Link>
        </li>
      </ul>
    </div>
  );
}
