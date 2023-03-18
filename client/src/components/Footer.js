import React from 'react';
import Insta from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import '../styles/footer.css'
function Footer() {
  return (
    <div className = "footer">
        <div className="socialMedia">
            <Insta/><Facebook/><Twitter/>
        </div>
        <p> &copy; 2023 www.paktree.com</p>
    </div>
  )
}

export default Footer