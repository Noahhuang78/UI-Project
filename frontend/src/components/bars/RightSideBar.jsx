import { Link } from "react-router-dom"
export default function RightSideBar(){
    return(
    <div className="right-side-bar">
        <ul>
            <li className="menu-item"><Link to="/Home">Home</Link></li> 
            <li className="menu-item"><Link to="/ClubPage">Browse CLubs</Link></li>
            <li className="menu-item"><Link to="/EventPage">Browse Events</Link></li>
            <li className="menu-item"><Link to="/InternshipPage">Browse Internships</Link></li>
        </ul>
    </div>
    )
}