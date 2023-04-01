import { useState } from "react"
import "../styles/failure.css"
import React, { useRef } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Failure = () =>{
    const navigate = useNavigate()

    const fail = () => {
            navigate("/donation")
        }
        
    return (
        <div className="fail-donate">

           <div className="failcontainer">
             <h3>Your payment could not be pressed. Please click the below button to try again:</h3>
             <button className="fail-button" onClick={(event) => {fail()}}>Try Again</button>
           </div>
        </div>
    )
}

export default Failure