import { Link } from "react-router-dom"
import "../styles/directorPage.css"
import Banner from '../assets/grass.jpg'

const DirectorPage=()=>{
    return(
    <div className = "dir-bg" style={{backgroundImage: `url(${Banner})`}}>
        <div className = "headContainer" >
    <div className="buttons">
        <div>
            <Link to='/directorEevents'>
                <button className="b">Events</button>
            </Link>
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
        <Link to="/directorPage/memberapp">
        <button className="b2">Member Applications</button>
        </Link>
        </div>

        <div>
        <Link to="/directorPage/viewAmbassadors">
        <button className="b">Ambassadors</button>
        </Link>
        </div>

        <div>
            <Link to='/AmbassadorApplications'>
                <button className="b2">Ambassador Applications</button>
            </Link>
        </div>

        <div>
        <Link to="/directorPage/directorNews">
        <button className="b">News</button>
        </Link>
        </div>

        <div>
            <Link to="/directorPage/directorStories">
            <button className="b">Stories</button>
            </Link>
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