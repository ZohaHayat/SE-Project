import { useState, useEffect } from "react"
import "../styles/success.css"
import React, { useRef } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Success2 = () =>{
    const navigate = useNavigate()
    let amt;
    let name;
    let email;
    let bank;
    let event;

    const spon = () => {

        const urlParams = new URLSearchParams(window.location.search);
        amt = urlParams.get('amt');
        name = urlParams.get('name');
        email = urlParams.get('email');
        bank = urlParams.get('bank');
        event = urlParams.get('event');

    Axios.post("http://paktree-backend.herokuapp.com/okay2", {
            email: email,
            amt: amt*12,
            name: name,
            bank: bank,
            event: event
            }).then((response) => {
                console.log(response.data)
                if(response.data)
                {
                    alert("Your sponsorship donation has been successfully processed.");
                }
            });
        }
        
    return (
        <div className="donate-donate">

           <div className="succcontainer">
             <h3 className="success-h3">Please click on the button below to confirm your sponsorship.</h3>
             <button className="okay-button" onClick={(event) => {spon()}}>Confirm</button>
           </div>
        </div>
    )
}

export default Success2