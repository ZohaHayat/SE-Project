import { Link } from "react-router-dom"
import "../styles/directorPage.css"

const DirectorPage=()=>{
    return(
    <div className="buttons">
        <div>
            <Link to='/directorEevents'>
                <button className="b">Events</button>
            </Link>
        </div>

        <div>
        <button className="b">People to Sponsor</button>
        </div>

        <div>
        <button className="b">Members</button>
        </div>

        <div>
        <button className="b2">Member Applications</button>
        </div>

        <div>
        <button className="b">Ambassadors</button>
        </div>

        <div>
            <Link to='/AmbassadorApplications'>
                <button className="b2">Ambassador Applications</button>
            </Link>
        </div>

        <div>
        <button className="b">News</button>
        </div>

        <div>
        <button className="b">Stories</button>
        </div>

        <div>
            <Link to="/viewTeamDirector">
            <button className="b">View Team</button>

            </Link>
        </div>

    </div>)
}

export default DirectorPage