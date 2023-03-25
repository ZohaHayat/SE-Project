import { useState } from "react"
import "../styles/signup.css"
import React, { useRef } from 'react';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup =()=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [fname, setFname]=useState("")
    const [lname, setLname]=useState("")

    const navigate = useNavigate()

    
    const form = useRef();

    const signingup = () => {
        
        Axios.post("http://localhost:3000/signup", {
            email: email,
            password: password,
            fname: fname,
            lname: lname
            }).then((response) => {
                if(response.data === "User already exists")
                {
                    // alert("Failed! Account not recognised. Please sign up or check log in details.");
                    alert("User account already exists");
                }
                else if (response.data === "Success")
                {
                    navigate("/loginhome");
                }
            });

        
    };

    
        
    return (
        <div className="signup">

            <form ref={form} onSubmit={signingup} >
                <h2 className="heading">Signup</h2>
                <div className="sign_container">
                <div className="sign_form">
                    <div className='name_contain'>
                    <div className="form-group">
                    <input type="text" id="your-name" name="your-name" placeholder='First Name' required onChange={(event) => {setFname(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                    <input type="text" id="your-name" name="your-name" placeholder='Last Name' required onChange={(event) => {setLname(event.target.value)}}/>
                    </div>
                    </div>
                    <div className="form-group">
                    <input type="email" id="sign_email" name="sign_email" placeholder='Email' required onChange={(event) => {setEmail(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                    <input type="password" id="sign_email" name="sign_email" placeholder='Password' required onChange={(event) => {setPassword(event.target.value)}}/>
                    </div>
                    <button type="submit" className="sign-submit-button">
                    Signup
                    </button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Signup