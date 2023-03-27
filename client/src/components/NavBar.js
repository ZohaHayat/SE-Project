import React, { useState } from 'react'
import Logo from '../assets/tree_logo.png' //.. to get out of the components folder and go into assets folder
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false)
    let navigate = useNavigate();
    //whenever we change the value of the state, the website will be re-rendered so that the display is according to the new state
    const toggleNavbar = () => {
        setOpenLinks(!openLinks) //set is to opposite of what it is
    }
    return (
    <div className = "navbar">
        <div className = "leftSide" id ={openLinks ? "open" : "close" }>
            {/* <img src={Logo}/> */}
            <Link to ="/"><img src={Logo}/>PakTree</Link>
            <div className = "hiddenLinks">
                {/* <Link to ="/">Home</Link> */}
                {/* <Link to ="/events">Events</Link> */}
                {/* <Link to ="/about">About Us</Link>
                <Link to ="/about">Get Involved</Link>
                <Link to ="/contact">Updates</Link> */}
            </div>
            <div className ="dropdown">
                <button className ="dropbtn">About Us</button>
                    <div className ="dropdown-content">
                        <Link to ="/about">About Us</Link>
                        <Link to ="/team">View Team</Link>
                        <Link to ="/contact">Contact Us</Link>
                        <Link to ="/follow">Follow us!</Link>
                    </div>
            </div>
            <div className ="dropdown">
                <button className ="dropbtn">Get Involved</button>
                    <div className ="dropdown-content">
                        <Link to ="/donate">Donate</Link>
                        <Link to ="/sponsor">Sponsor</Link>
                        <Link to ="/volunteerform">Volunteer</Link>
                        <Link to ="/events">View Upcoming Events</Link>
                        <Link to ="/careers">Careers</Link>
                        <Link to ="/member">Become a Member</Link>
                    </div>
            </div>
            <div className ="dropdown">
                <button className ="dropbtn">Updates</button>
                    <div className ="dropdown-content">
                        <Link to ="/stories">Stories</Link>
                        <Link to ="/news">News</Link>
                    </div>
            </div>
            <div className="login"><button className ="loginbutton" onClick={()=>navigate("/login")}>Login</button></div>
        </div>
        <div className = "rightSide">
            {/* <Link to ="/">Home</Link>
            <Link to ="/events">Events</Link>
            <Link to ="/about">About Us</Link>
            <Link to ="/about">Get Involved</Link>
            <Link to ="/contact">Updates</Link> */}
            {/* <Link to ="/">Home</Link> */}
            {/* <Link to ="/events">Events</Link> */}
            <div className ="dropdown">
                <button className ="dropbtn">About Us</button>
                    <div className ="dropdown-content">
                        <Link to ="/about">About Us</Link>
                        <Link to ="/team">View Team</Link>
                        <Link to ="/contact">Contact Us</Link>
                        <Link to ="/follow">Follow us!</Link>
                    </div>
            </div>
            <div className ="dropdown">
                <button className ="dropbtn">Get Involved</button>
                    <div className ="dropdown-content">
                        <Link to ="/donate">Donate</Link>
                        <Link to ="/sponsor">Sponsor</Link>
                        <Link to ="/volunteer">Volunteer</Link>
                        <Link to ="/events">Viw Upcoming Events</Link>
                        <Link to ="/careers">Careers</Link>
                        <Link to ="/member">Become a Member</Link>
                    </div>
            </div>
            <div className ="dropdown">
                <button className ="dropbtn">Updates</button>
                    <div className ="dropdown-content">
                        <Link to ="/stories">Stories</Link>
                        <Link to ="/news">News</Link>
                    </div>
            </div>
            <button onClick = {toggleNavbar}>
            <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default NavBar