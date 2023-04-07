import React, { useState } from 'react'
import Logo from '../assets/tree_logo.svg' //.. to get out of the components folder and go into assets folder
import {Link} from 'react-router-dom'
import Logo2 from '../assets/profile.svg' //.. to get out of the components folder and go into assets folder
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
    const handleLogoutClick = () => {
        props.handleLogout();
        navigate("/")
      };
    const [openLinks, setOpenLinks] = useState(false)
    let navigate = useNavigate();
    //whenever we change the value of the state, the website will be re-rendered so that the display is according to the new state
    const toggleNavbar = () => {
        setOpenLinks(!openLinks) //set is to opposite of what it is
    }
    return (
    <div className = "navbar">
        <div className = "leftSide" id ={openLinks ? "open" : "close" }>
            
            {props.loggedIn && <Link to ="/directorPage"><img className="tree-logo" src={Logo}/> <p className="logo-text">PakTree</p> </Link>}
            {props.loggedIn &&
            <div className ="dropdown">
                <button className ="profile-dropbtn"><img className="profile-icon" src={Logo2}/></button>
                    <div className ="dropdown-content">
                        <Link to ="/changepass">Change password</Link>
                    </div>
            </div>}

            {props.loggedIn && 
            <div className="logout"><button className ="logoutbutton" onClick={handleLogoutClick}>Logout</button></div>}

            {!props.loggedIn && 
            <Link to ="/"><img className="tree-logo" src={Logo}/> <p className="logo-text">PakTree</p> </Link>} 

            {!props.loggedIn &&
            <div className = "hiddenLinks">
                {/* <Link to ="/">Home</Link> */}
                {/* <Link to ="/events">Events</Link> */}
                {/* <Link to ="/about">About Us</Link>
                <Link to ="/about">Get Involved</Link>
                <Link to ="/contact">Updates</Link> */}
            </div>}
            {!props.loggedIn &&
            <div className ="dropdown">
                <button className ="dropbtn">About Us</button>
                    <div className ="dropdown-content">
                        <Link to ="/about">About Us</Link>
                        <Link to ="/team">View Team</Link>
                        <Link to ="/contact">Contact Us</Link>
                        {/* <Link to ="/follow">Follow us!</Link> */}
                    </div>
            </div> }
            {!props.loggedIn &&
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
            </div> }
            {!props.loggedIn && 
            <div className ="dropdown">
                <button className ="dropbtn">Get Updates</button>
                    <div className ="dropdown-content">
                        <Link to ="/stories">Stories</Link>
                        <Link to ="/news">News</Link>
                    </div>
            </div> }
            {!props.loggedIn && <div className="login"><button className ="loginbutton" onClick={()=>navigate("/login")}>Login</button></div>}
        </div>

        {/* <div className = "rightSide">
            !props.loggedIn && 
            <div className ="dropdown">
                <button className ="dropbtn">About Us</button>
                    <div className ="dropdown-content">
                        <Link to ="/about">About Us</Link>
                        <Link to ="/team">View Team</Link>
                        <Link to ="/contact">Contact Us</Link>
                        <Link to ="/follow">Follow us!</Link> 
                    </div>
            </div> 
            {props.loggedIn &&
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
            </div> }
            {props.loggedIn &&
            <div className ="dropdown">
                <button className ="dropbtn">Updates</button>
                    <div className ="dropdown-content">
                        <Link to ="/stories">Stories</Link>
                        <Link to ="/news">News</Link>
                    </div>
            </div> }
            <button onClick = {toggleNavbar}>
            <ReorderIcon/>
            </button>
        </div>  */}
    </div>
  )
}

export default NavBar