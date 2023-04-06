import { useState } from "react"
import "../styles/sponsor.css"
import React, { useRef } from 'react';
import Axios from 'axios'
import Stripe from 'stripe';


const Sponsor = () =>{

    const [amt, setAmt] = useState("");
    const [bank, setBank] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [event, setEvent] = useState("");

    const sponsoring = async () => {

        if (amt < 200)
        {
            alert('The amount entered is less than the minimum amount donated. Please donate a value greater than 200 Rs.')
        }
        else{

        var stripe = new Stripe('sk_test_51Mp7mTFJDc8oaStDTeaSLVZxTszm4hGy6lGCkCn14e9vcgGDiaEdrYV4dux1S422XalmLpKytqJPpBPC7ekqTaW500zcIyztTu');

        console.log(amt,email,name,bank)

    Axios.post("http://localhost:3000/sponsor", {
            email: email,
            amt: amt,
            name: name,
            bank: bank,
            event: event
            }).then((response) => {
                console.log(response.data)
                if(response.data)
                {
                    console.log(response.data.url)
                    console.log(stripe)
                    window.location.href = `${response.data.url}`;
                }
            });
        }
    }
        
    return (
        <div className="sponsor">

            <h2 className="heading">Sponsor an Event</h2>
            <div >
                <input className="amount" type="text" placeholder="Please select event to sponsor" required onChange={(event) => {setEvent(event.target.value)}}></input>
                <p className='vol_text'>Don't know the name? View events<a className='vol_a' href="/events">here</a> </p>
            </div>
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
                <input className="amount" type="email" placeholder="Enter your email" required onChange={(event) => {setEmail(event.target.value)}}></input>
            </div>
            <button className="sponsor-button" onClick={ (event) => {sponsoring()}}>Sponsor</button>
        </div>
    )
}

export default Sponsor