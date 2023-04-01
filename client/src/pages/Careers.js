import React, { useRef } from 'react';
import Axios from "axios"
import "../styles/Careers.css"
import { useState } from "react"


function Careers() {
    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [inst, setInst] = useState("")
    const [why, setWhy] = useState("")
    const [contact, setContact] = useState("")

    const form = useRef();

    const sendApplication = () => {
        Axios.post("http://localhost:3000/careers", {
            name: name,
            dob : dob,
            email : email,
            inst : inst,
            why : why,
            contact: contact,
            status:"undecided"
        }).then((response) => {
            console.log(response.data)
        });
    }

    return (
        <div className="careers-form">
            <form ref={form} onSubmit={sendApplication}>

                <h2 className="heading">Apply to become a PakTree Ambassador</h2>

                <input className="full-name" type="text" placeholder="Full Name" required
                onChange={(event) => { setName(event.target.value) }}></input>

                <input className="dob" type="date" placeholder="Date of birth" required
                onChange={(event) => { setDob(event.target.value) }}></input>  <br/>

                <input className="c-email" type="email" placeholder="Email" required
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" 
                onChange={(event) => { setEmail(event.target.value) }}></input>  <br/>

                <input className="c-contact" type="number" placeholder="Contact number" required
                onChange={(event) => { setContact(event.target.value) }}></input>  <br/>

                <input className="your-institution" type="text" placeholder="Your Institution" required
                onChange={(event) => { setInst(event.target.value) }}></input> <br/>

                <textarea className="why" type="text" placeholder="Why do you want to become an ambassador?" required
                onChange={(event) => { setWhy(event.target.value) }}></textarea> <br/>

                <div >
                    <button class="apply-button" >Apply</button>
                </div>

            </form>
            
        </div>
      )
}

export default Careers;