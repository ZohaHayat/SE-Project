import { Link } from "react-router-dom"
import "../styles/viewTeamDirector.css"

const ViewTeamDirector= ()=>{
    return (
        <div className="container">
            <h1>View Team</h1>
            <div className="buttons">
                <div>
                    <Link to= "/directorPage/viewSponsors">
                    <button className="but">Sponsors</button>
                    </Link>
                </div>

                <div>
                <button className="but">Donors</button>
                </div>

                <div>
                    <Link to="/directorPage/viewVolunteers">
                    <button className="but">Volunteers</button>
                    </Link>
                </div>

                <div>
                    <Link to='/directorViewDirectors'>
                        <button className="but">Directors</button>
                    </Link>
                </div>
            </div>
        </div>
        )

}

export default ViewTeamDirector
