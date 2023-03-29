import { Link } from "react-router-dom"
import "../styles/viewTeamDirector.css"

const ViewTeamDirector= ()=>{
    return (
        <div className="container">
            <h1>View Team</h1>
            <div className="buttons">
                <div>
                    <Link to= "/viewSponsors">
                    <button className="but">Sponsors</button>
                    </Link>
                </div>

                <div>
                <button className="but">Donors</button>
                </div>

                <div>
                    <Link to="/viewVolunteers">
                    <button className="but">Volunteers</button>
                    </Link>
                </div>

                <div>
                <button className="but">Directors</button>
                </div>
            </div>
        </div>
        )

}

export default ViewTeamDirector
