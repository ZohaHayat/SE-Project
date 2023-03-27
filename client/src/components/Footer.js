import React from 'react';
import Insta from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import '../styles/footer.css'
function Footer() {
  return (
    <div className = "footer">
        <div className="socialMedia">
            <Insta onClick={event =>  window.open('https://www.instagram.com/officialpaktree/','_blank')}/><Facebook onClick={event =>  window.open('https://m.facebook.com/Paktreeofficial/','_blank')}/><Twitter onClick={event =>  window.open('https://twitter.com/pak_tree?s=09','_blank')}/>
        </div>
        <p> &copy; 2023 www.paktree.com</p>
    </div>
  )
}
//https://twitter.com/pak_tree?s=09

export default Footer