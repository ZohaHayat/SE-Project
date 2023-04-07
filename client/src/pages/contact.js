import { useState } from "react"
import "../styles/contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact =()=>{
    const [status, setStatus]=useState("Submit")

    
    const form = useRef();

    const sendEmail = (e) => {
        
        e.preventDefault();
        emailjs.sendForm('service_su8frdt','template_84v1yuc',form.current, "-ZL5kuj6IL5iYqLqM")
        .then((result) => {
            console.log(result.text);
            e.target.reset()
            setStatus("Submitted!")
            alert("Submitted!")
        }, (error) => {
            alert("failure")
            console.log(error.text);
        });

        
    };

    
        
    return (
        <div className="contact-us">
            
            <form ref={form} onSubmit={sendEmail} >
                <div className="contactForm">
                    <h2 class="heading">Contact Us</h2>
                        <div >
                            <input id="user_email" class="email" type="text" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" name="user_email" placeholder="Email" required></input>
                        </div>
                        <div >
                            <textarea id="message" class="query-message" name="user_message" type="text" placeholder="Write your query" required></textarea>
                        </div>
                        <div >
                            <button class="contact-submit-button" >{status}</button>
                        </div>
                </div>
            </form>
        </div>

    )
}

export default Contact