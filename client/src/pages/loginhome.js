import React from 'react'
import Axios from "axios"
import {Link} from "react-router-dom"
import Banner from '../assets/grass.jpg'
import '../styles/Home.css'
import childStudying from '../assets/childStudying.jpg'

function Loginhome() {
  return (
    <div>
      <div className = "home-donate" style={{backgroundImage: `url(${Banner})`}}>
        <div className = "headerContainer" >
          <h1>Help Our Cause</h1>
          <p>Join us in our journey of serving humanity and the environment through targeted awareness campaigns, plantations, and donation drives for those in need.</p>
          <Link to="/donate">
          <button>Donate Now</button>
          </Link>
        </div>
      </div>

      <div className="home-sponsor">
        <div className = "sponsor-container" >
          <h1>Make a Sponsorship</h1>
          <p>PakTree supports the education of children in need along with the needs of those affected by disasters.</p>
          <Link to="/sponsor">
          <button>Sponsor</button>
          </Link>
        </div>
        <div>
          <img src={childStudying} className="child-studying"/>
        </div>
      </div>

      <div className='home-volunteer'>
        <h1> Let's <br/> Do <br/> This! </h1>
        <div className="vertical-line"></div>
        <h2 className="volunteers"> Volunteers </h2>
        <h2 className="needed"> Needed </h2>
        <div className="volunteer-p">
          <p>
            PakTree hosts monthly donation, plantation, and cleanliness drives along with 
            food distribution campaigns. You can choose to assist us in any of these events by signing up below. 
          </p>
        </div>
        <Link to="/volunteerform">
          <button>Volunteer</button>
        </Link>
        {/* <h1>Help Our Cause</h1>
        <p>Join us in our journey of serving humanity and the environment through targeted awareness campaigns, plantations, and donation drives for those in need.</p>
        <Link to="/donate">
        <button>Donate Now</button>
        </Link> */}
      </div>

      
    </div>
  )
}

export default Loginhome