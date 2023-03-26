import { useState } from "react"
import "../styles/donate.css"
import React, { useRef } from 'react';
import Axios from 'axios'

const Donate = () =>{

    const [amt, setAmt] = useState("");
    const [bank, setBank] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const donating = () => {

        console.log(amt,email,name,bank)

    Axios.post("http://localhost:3000/donate", {
            email: email,
            amt: amt,
            name: name,
            bank: bank
            }).then((response) => {
                console.log(response)
                if(response.data === "Success")
                {
                    alert("Donation Made");
                }
            });
        }
        
    return (
        <div className="donate">

        <form action="https://buy.stripe.com/test_8wMaEQ1SL8Vz5UsfYY" >
            <h2 className="heading">Make a Donation</h2>
            <div >
                <input className="amount" type="text" placeholder="Enter Amount to donate" required onChange={(event) => {setAmt(event.target.value)}}></input>
            </div>
            <div >
                <input className="amount" type="text" placeholder="Enter Bank Name" required onChange={(event) => {setBank(event.target.value)}}></input>
            </div>
            <div >
                <input className="amount" type="text" placeholder="Enter your name" required onChange={(event) => {setName(event.target.value)}}></input>
            </div>
            <div >
                <input className="amount" type="text" placeholder="Enter your email" required onChange={(event) => {setEmail(event.target.value)}}></input>
            </div>
            <div >
                <button className="donate-button" onClick={ (event) => {donating()}}>Donate</button>
            </div>
            </form>
        </div>
    )
}

export default Donate