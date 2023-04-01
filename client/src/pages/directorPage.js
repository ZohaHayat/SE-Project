import { Link } from "react-router-dom"
import "../styles/directorPage.css"
import Banner from '../assets/grass.jpg'

const DirectorPage=()=>{
    return(
    <div className = "dir-bg" style={{backgroundImage: `url(${Banner})`}}>
        <div className = "headContainer" >
    <div className="buttons">
        <div>
        <button className="b">Events</button>
        </div>

        <div>
        <Link to="/directorPage/viewbeneficiaries">
        <button className="b">Beneficiaries</button>
        </Link>
        </div>

        <div>
            <Link to= "/directorPage/members">
                <button className="b">Members</button>
            </Link>
        </div>

        <div>
        <button className="b2">Member Applications</button>
        </div>

        <div>
        <Link to="/directorPage/viewAmbassadors">
        <button className="b">Ambassadors</button>
        </Link>
        </div>

        <div>
        <button className="b2">Ambassador Applications</button>
        </div>

        <div>
        <button className="b">News</button>
        </div>

        <div>
        <button className="b">Stories</button>
        </div>

        <div>
            <Link to="/directorPage/viewTeamDirector">
            <button className="b">View Team</button>

            </Link>
        </div>
        </div>

    </div>
    </div>)
}

export default DirectorPage