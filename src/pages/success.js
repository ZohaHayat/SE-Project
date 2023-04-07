import { useState, useEffect } from "react"
import "../styles/success.css"
import React, { useRef } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Success = () =>{
    const navigate = useNavigate()
    let amt;
    let name;
    let email;
    let bank;

    // useEffect(() => {
        const succ = () => {
        console.log(amt)

        const urlParams = new URLSearchParams(window.location.search);
        amt = urlParams.get('amt');
        name = urlParams.get('name');
        email = urlParams.get('email');
        bank = urlParams.get('bank');

    Axios.post("http://paktree-backend.herokuapp.com/okay", {
            email: email,
            amt: amt,
            name: name,
            bank: bank
            }).then((response) => {
                console.log(response.data)
                if(response.data)
                {
                    alert("Your donation has been successfully processed.");
                }
            });
        }
        
    return (
        <div className="donate-donate">

           <div className="succcontainer">
             <h3 className="success-h3">Please click on the button below to confirm your donation.</h3>
             {/* <button className="okay-button" onClick={(event) => {navigate("/")}}>Back to Home</button> */}
             <button className="okay-button" onClick={(event) => {succ()}}>Confirm</button>
           </div>
        </div>
    )
}

export default Success