import Clubs from "../sections/Clubs"
import ClubData from "../../assets/ClubData.json"
import Clubtags from "../../assets/ClubTags.json"

export default function ClubPage(){
    return(

    <div className="grid-container">
        <Clubs data={ClubData} category="Clubs" tags={Clubtags}/>
    </div>
    )
}



