import { useState } from "react"
import "../styles/login.css"
import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login =(props)=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const navigate = useNavigate()

    
    const form = useRef();

    const logging = () => {
        
        Axios.post("https://paktree-backend.herokuapp.com/login", {
            email: email,
            password: password
            }).then((response) => {
                console.log(response)
                if(response.data === "User not found")
                {
                    alert("Failed! Account not recognised. Please sign up or check log in details.");
                }
                else if (response.data === "Found user")
                {
                    navigate("/loginhome");
                }
                else if (response.data === "Found director")
                {
                    props.handleLogin();
                    navigate("/directorPage");
                }
                else
                {
                    alert("Incorrect Password")
                }
            });
    };

    
        
    return (
        <div className="login">

            {/* <form ref={form} onSubmit={logging} > */}
            <h2 className="heading">Login</h2>
            <div >
                <input id="email" className="email" type="text" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" name="user_email" placeholder="Email" required onChange={(event) => {setEmail(event.target.value)}}></input>
            </div>
            <div>
                <input id="password" className="password" type="password" placeholder="Password" required onChange={(event) => {setPassword(event.target.value)}}></input>
            </div>
            <div >
                <button className="login-button" onClick={(event) => [logging()]}>Login</button>
            </div>
            <div className="forgetpass">
                <Link to="/forgotPassword">Forgot Password?</Link>
                
            </div>
            <h4>This page is for authorised personnel only.</h4>
            {/* <h4 className="texts">New user? <Link to ="/signup"><u>Sign up</u></Link></h4> */}
            {/* </form> */}
        </div>
    )
}

export default Login