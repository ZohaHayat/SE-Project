import { useState } from "react"
import "../styles/login.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup =()=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const navigate = useNavigate()

    
    const form = useRef();

    const logging = (e) => {
        
        Axios.post("http://localhost:3000/login", {
            email: email,
            password: password,
            }).then((response) => {
                if(response.data === "User not found")
                {
                    alert("Failed! Account not recognised. Please sign up or check log in details.");
                }
                else
                {
                    navigate("/loginhome");
                }
            });

        
    };

    
        
    return (
        <div className="login">

            <form ref={form} onSubmit={logging} >
                <h2 class="heading">Login</h2>
                <div >
                    <input id="email" class="email" type="text" onChange={(event) => {setEmail(event.target.value)}} pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" name="user_email" placeholder="Email" required></input>
                </div>
                <div>
                    <input id="password" class="password" type="text" onChange={(event) => {setPassword(event.target.value)}} placeholder="Password" required></input>
                </div>
                <div >
                    <button class="login-button" >Login</button>
                </div>
                <h4 class="texts">New user? <Link to ="/signup"><u>Sign up</u></Link></h4>
            </form>
        </div>
    )
}

export default Signup