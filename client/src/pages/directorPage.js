import { Link } from "react-router-dom"
import "../styles/directorPage.css"
import Banner from '../assets/grass.jpg'

const DirectorPage=()=>{
    // style={{backgroundImage: `url(${Banner})`}}

    return(
    <div className = "gradient" >
        <h1>Welcome</h1> 
        <h2 className="g-h2">Manage your tasks</h2>
        <div className="sub-container">
            <h2>Materials</h2>

            <div className="b-container-1">
                <div>
                    <Link to='directorEvents'>
                        <button className="b">Events</button>
                    </Link>
                </div>

                <div>
                    <Link to='directorNews'>
                        <button className="b">News</button>

                    </Link>
                    
                </div>

                <div>
                    <Link to="/directorPage/directorStories">
                    <button className="b">Stories</button>
                    </Link>
                </div>

                <div>
                    <Link to="/directorPage/sendNewsletter">
                    <button className="b">Newsletter</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="sub-container">
            <h2>Careers</h2>

            <div className="b-container-2">
                <div>
                    <Link to= "/directorPage/members">
                        <button className="b">Members</button>
                    </Link>
                </div>

                <div>
                    <Link to="/directorPage/memberapp">
                        <button className="b">Member Applications</button>
                    </Link>
                </div>

                <div>
                    <Link to="/directorPage/viewAmbassadors">
                        <button className="b">Ambassadors</button>
                    </Link>
                </div>

                <div>
                    <Link to='/AmbassadorApplications'>
                        <button className="b">Ambassador Applications</button>
                    </Link>
                </div>
            </div>
        </div>
    
        
        
        <div className="sub-container">
            <h2>Stakeholders</h2>

            <div className="b-container-3">
                <div>
                    <Link to="/directorPage/viewbeneficiaries">
                        <button className="b">Beneficiaries</button>
                    </Link>
                </div>

                <div>
                    <Link to="/directorPage/viewTeamDirector">
                        <button className="b">Team</button>
                    </Link>
                </div> 
            </div>
        </div>

    </div>      
    
    )
}

export default DirectorPage