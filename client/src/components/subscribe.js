import React from 'react'
import Sub from "../assets/sub.webp";
import '../styles/subscribe.css'


import { useState } from 'react';

function ChatIcon() {
  const [showForm, setShowForm] = useState(false);
  const [popupcontent,setpopupcontent] = useState([]);
  const [popuptoggle, setpopuptoggle] = useState(false);
  const [styling, setstyling] = useState(null);

  const changecontent = (vall) => {
    setpopupcontent([vall]);
    setpopuptoggle(!popuptoggle);
    if (styling === null){
      setstyling({
        posiyion:'fixed',
      });
    }else(setstyling (null))
  }

  return (
    <div>
      <button className="chat-icon" onClick={changecontent}>
        <img src={Sub} alt="Chat Icon" />
      </button>
      {popuptoggle && (<div className="chat_pop_up_container" onClick={changecontent}>
<div className="chat_pop_up_body" onClick = {(e)=> e.stopPropagation()}>
  <div className="chat_pop_up_header">
    <button className="chat_button" onClick={changecontent}>x</button>
  </div>
  <div className="chat_pop_up_content">
      Subscribe to our Newsletter
  </div>
  </div>
</div>)}
      
     
     
    </div>
  );
}


export default ChatIcon;



