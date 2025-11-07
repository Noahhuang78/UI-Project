import RightSideBar from '../bars/RightSideBar'
import Dashboard from '../sections/Dashboard'
import Recommended from '../sections/Recommended'
import UpcomingEvents from '../sections/UpcomingEvents'
import "./Homepage.css"

export default function HomePage(){
    return (
        <div className="home-container">
            
            <UpcomingEvents/>
        </div>
        
    )
}