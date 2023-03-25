import React from 'react'
import '../styles/volunteer.css'
import {Link} from "react-router-dom"

function volunteer() {
  return (
    <div className="v_container">
      <div className="left">
      <h1 className = "title">Let's<br />Do<br />This!</h1>
      </div>
      <div className="vertical-divider"></div>
      <div className="right">
        <h2 className="subtitle">Volunteers<br />Needed</h2>
        <p className='textt'>PakTree hosts monthly donation drives, food distribution campaigns, plantations and cleanliness drives. You can choose to assist us in any of these events by signing up at the link below.</p>
        <Link to="/volunteerform">
        <button className="button">Volunteer Now</button>
        </Link>
      </div>
    </div>
  )
}

export default volunteer