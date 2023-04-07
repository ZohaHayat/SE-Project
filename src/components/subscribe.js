import React from 'react'
import Sub from "../assets/sub.webp";
import '../styles/subscribe.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Axios from 'axios'


import { useState } from 'react';

function ChatIcon() {
  const [st,setSt] = useState("Submit")
  const [subscriberEmail, setSubscriber] = useState(null)
  var templateParams = {
    name:"User",
    email: subscriberEmail,
    message:'Thank you for subscribing to our Newsletter. This will help us in keeping you updated about our upcoming events and drives as well as inform you about donation and sponsorship opportunities.',
    subject: "Thank you for subscribing to our Newsletter"
};

  const sub_form = useRef();
  const sendSub = (s) => {
    s.preventDefault();
    
    emailjs.send('service_su8frdt','template_resgpox',templateParams, "-ZL5kuj6IL5iYqLqM")
    .then((result) => {
      console.log(result.text);
      s.target.reset()
      setSt("Submitted")
    },(error) => {
      console.log(error.text);
    })
  }

  const storeSub = () => {
    if (subscriberEmail)
    {Axios.post("https://paktree-backend.herokuapp.com/storeSub",
    {
      subscriberEmail: subscriberEmail
    }
    ).then ((res) => {
      alert(res.data)

    }).catch(err => {console.log(err)})}
    else{
      alert("Please enter email")
    }
  }




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
            <div className='The_headers'>
              <h3 className='hh'>Add impact to your inbox</h3>
              <p className='pp'>Get our emails to stay in the know</p>
            </div>
              <form ref={sub_form} onSubmit={sendSub} className="this_form">
                <div className='email_form'>
                  <input className='sub_email' type="email" name = "subscribe_email" placeholder='Email' required onChange={ (e) => {setSubscriber(e.target.value)}  }/>
                </div>
                <div className='sub_pop_button'>
                  <button className='butt_sub' onClick={(e) => [storeSub()]}>Subscribe</button>
                </div>
              </form>
          </div>
        </div>
      </div>)}
    </div>
  );
}


export default ChatIcon;



