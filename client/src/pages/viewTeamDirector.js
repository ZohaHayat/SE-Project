import "../styles/viewTeamDirector.css"

const ViewTeamDirector= ()=>{
    return (
        <div className="container">
            <h1>View Team</h1>
            <div className="buttons">
                <div>
                <button className="b">Sponsors</button>
                </div>

                <div>
                <button className="b">Donors</button>
                </div>

                <div>
                <button className="b">Volunteers</button>
                </div>

                <div>
                <button className="b">Directors</button>
                </div>
            </div>
        </div>
        )

}

export default ViewTeamDirector
