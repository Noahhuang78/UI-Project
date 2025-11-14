import Events from "../sections/Events"
import ClubData from "../../assets/ClubData.json"
import Clubtags from "../../assets/ClubTags.json"

export default function ClubPage(){
    return(

    <div className="grid-container">
        <Events data={ClubData} category="Clubs" tags={Clubtags}/>
    </div>
    )
}



