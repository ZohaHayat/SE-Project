import { useState } from "react"
import "../styles/success.css"
import React, { useRef } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Failure2 = () =>{
    const navigate = useNavigate()

    const fail = () => {
            navigate("/sponsor")
        }
        
    return (
        <div className="donate-donate">

           <div className="succcontainer">
             <h3 className="success-h3">Your sponsorship donation could not be processed.</h3>
             <button className="okay-button" onClick={(event) => {fail()}}>Try Again</button>
           </div>
        </div>
    )
}

export default Failure2