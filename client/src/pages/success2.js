import { useState, useEffect } from "react"
import "../styles/success.css"
import React, { useRef } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Success2 = () =>{
    const navigate = useNavigate()

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        let amt = urlParams.get('amt');
        let name = urlParams.get('name');
        let email = urlParams.get('email');
        let bank = urlParams.get('bank');
        let event = urlParams.get('event');

    Axios.post("http://localhost:3000/okay2", {
            email: email,
            amt: amt*12,
            name: name,
            bank: bank,
            event: event
            }).then((response) => {
                console.log(response.data)
                if(response.data)
                {
                    alert("Sponsorship completed");
                }
            });
        },)
        
    return (
        <div className="donate-donate">

           <div className="succcontainer">
             <h3 className="success-h3">Your sponsorship donation has been successfully processed.</h3>
             <button className="okay-button" onClick={(event) => {navigate("/")}}>Back to Home</button>
           </div>
        </div>
    )
}

export default Success2