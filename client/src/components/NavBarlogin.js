import { useState } from 'react'
import Logo from '../assets/tree_logo.png' //.. to get out of the components folder and go into assets folder
import Logo2 from '../assets/profile.png' //.. to get out of the components folder and go into assets folder
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbarlogin.css'
import { useNavigate } from 'react-router-dom';

function NavBarlogin() {
    const [openLinks, setOpenLinks] = useState(false)
    let navigate = useNavigate();
    const toggleNavbar = () => {
        setOpenLinks(!openLinks) 
    }
    return (
    <div className = "navbarlogin">
        <div className = "leftSide" id ={openLinks ? "open" : "close" }>
            <Link to ="/"><img src={Logo}/>PakTree</Link>
            <div className = "hiddenLinks">
            </div>
            <div className ="dropdown">
                <button className ="dropbtn">About Us</button>
                    <div className ="dropdown-content">
                        <Link to ="/about">About Us</Link>
                        <Link to ="/team">View Team</Link>
                        <Link to ="/contact">Contact Us</Link>
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
            <div className ="dropdown">
                <button className ="dropbtn"><img src={Logo2}/></button>
                    <div className ="dropdown-content">
                        <Link to ="/changepass">Change password</Link>
                        <Link to ="/delacc">Delete account</Link>
                        <Link to ="/records">View Records</Link>
                        <Link to ="/status">View status</Link>
                    </div>
            </div>
            <div className="login"><button className ="loginbutton" onClick={()=>navigate("/")}>Logout</button></div>
        </div>
        <div className = "rightSide">
            <div className ="dropdown">
                <button className ="dropbtn">About Us</button>
                    <div className ="dropdown-content">
                        <Link to ="/about">About Us</Link>
                        <Link to ="/team">View Team</Link>
                        <Link to ="/contact">Contact Us</Link>
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

export default NavBarlogin