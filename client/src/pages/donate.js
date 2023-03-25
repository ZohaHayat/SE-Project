import { useState } from "react"
import "../styles/donate.css"
import React, { useRef } from 'react';

const Donate = () =>{

    const donating = () => {
        
    }
        
    return (
        <div className="donate">

        <form action="https://buy.stripe.com/test_8wMaEQ1SL8Vz5UsfYY" >
            <h2 className="heading">Make a Donation</h2>
            <div >
                <input id="amount" className="amount" type="text" placeholder="Enter Amount to donate" required></input>
            </div>
            <div >
                <button className="donate-button">Donate</button>
            </div>
            </form>
        </div>
    )
}

export default Donate