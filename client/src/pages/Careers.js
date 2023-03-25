import React from 'react'
import Axios from "axios"
import "../styles/Careers.css"
import { useState } from "react"


function Careers() {
    const [status, setStatus]=useState("Apply")

    const sendApplication = () => {
        setStatus("Applied!");
    }

    return (
        <div className="careers-form">
            <form onSubmit={sendApplication}>

                <h2 className="heading">Apply to become a PakTree Ambassador</h2>

                <input className="full-name" type="text" placeholder="Full Name"></input>
                <input className="age" type="text" placeholder="Age"></input>  <br/>
                <input className="c-email" type="text" placeholder="Email"></input>  <br/>
                <input className="your-institution" type="text" placeholder="Your Institution"></input> <br/>
                <input className="why" type="text" placeholder="Why do you want to become an ambassador?"></input> <br/>

                <div >
                    <button class="apply-button" > {status} </button>
                </div>
            </form>

            
        </div>
      )
}

export default Careers;