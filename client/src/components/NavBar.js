import React, { useState } from 'react'
import Logo from '../assets/tree_logo.png' //.. to get out of the components folder and go into assets folder
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false)
    //whenever we change the value of the state, the website will be re-rendered so that the display is according to the new state
    const toggleNavbar = () => {
        setOpenLinks(!openLinks) //set is to opposite of what it is
    }
    return (
    <div className = "navbar">
        <div className = "leftSide" id ={openLinks ? "open" : "close" }>
            <img src={Logo}/>
            PakTree
            <div className = "hiddenLinks">
                <Link to ="/">Home</Link>
                <Link to ="/events">Events</Link>
                <Link to ="/about">About</Link>
                <Link to ="/contact">Contact</Link>

            </div>
        </div>
        <div className = "rightSide">
            <Link to ="/">Home</Link>
            <Link to ="/events">Events</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contact">Contact</Link>
            <button onClick = {toggleNavbar}>
            <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default NavBar