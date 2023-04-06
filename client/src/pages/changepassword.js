import { useState } from "react"
import "../styles/changepassword.css"
import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

const Change =()=>{
    const [old, setOld]=useState("")
    const [newp, setNewp]=useState("")
    const [email, setEmail]=useState("")

    const navigate = useNavigate()


    const changing = () => {
        
        Axios.post("http://localhost:3000/change", {
            email: email,
            old: old,
            newp: newp
            }).then((response) => {
                console.log(response.data)
                if(response.data === "Success")
                {
                    alert("Password changed");
                }
                else
                {
                    alert("Incorrect username or password")
                }
            });
    };

    
        
    return (
        <div className="change">

            {/* <form ref={form} onSubmit={logging} > */}
            <h2 className="heading">Login</h2>
            <div>
                <input id="email" className="email" type="email" placeholder="Enter your Email" required onChange={(event) => {setEmail(event.target.value)}}></input>
            </div>
            <div >
                <input id="password" className="password" type="password" placeholder="Old Password" required onChange={(event) => {setOld(event.target.value)}}></input>
            </div>
            <div>
                <input id="password" className="password" type="password" placeholder="New Password" required onChange={(event) => {setNewp(event.target.value)}}></input>
            </div>
            <div >
                <button className="change-button" onClick={(event) => [changing()]}>Change Password</button>
            </div>
            {/* </form> */}
        </div>
    )
}

export default Change