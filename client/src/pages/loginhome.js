import React from 'react'
import Axios from "axios"
import Banner from '../assets/grass.jpg'
import '../styles/Home.css'
import {Link} from 'react-router-dom'


function LoginHome() {
    // NavBar()
  return (
    <div className = "home" style={{backgroundImage: `url(${Banner})`}}>
        <div className = "headerContainer" >
        <h1>Help Our Cause</h1>
        <p>Join us in our journey of serving humanity and the environment through targeted awareness campaigns, plantations, and donation drives for those in need.</p>
        <Link to="/donate">
        <button>Donate Now</button>
        </Link>
    </div>
    </div>
  )
}

export default LoginHome