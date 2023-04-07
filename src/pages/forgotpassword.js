import { useState } from "react"
import emailjs from '@emailjs/browser';
import { json, useNavigate } from "react-router-dom";
import React, { useRef } from 'react';
import Axios  from "axios";
import '../styles/forgotpassword.css'

const ForgotPassword=()=>{

    const [email, setEmail]=useState("y")
    const navigate = useNavigate();
    const [content, setContent] =useState(<div></div>)
    const form = useRef();

    const onChangeHandler=(event)=>{
        setEmail(event.target.value)


    }

    const sendEmail=(e)=>{
        e.preventDefault()
        let code = (Math.random() + 1).toString(36).substring(7);
        console.log("inside", code)
        let message="Here is your new Password: " + code + ". Please use this to login. To reset your password use the reset password option."
        var templateParams = {
            name:"User",
            email: email,
            message:message,
            subject: "New password"
        };
        Axios.post("https://paktree-backend.herokuapp.com/forgotpass", {
                        email:email,
                        password: code
                    
                    }).then((response) => {
                        console.log(response.data)
                        if(response.data==="Success"){
                            
                            emailjs.send('service_su8frdt','template_resgpox',templateParams, "-ZL5kuj6IL5iYqLqM")
                            .then((result) => {
                                
                            console.log(result.text);
                            navigate("/passcode")})
                        }

                       

                            // e.target.reset()
                        }, (error) => {
                            alert("Account does not exist")
                            navigate("/login")

                            console.log(error.text);
                            
                        });
                        
        


    
    }

     

    
    return(
        <div className="forgotpasscontain">
            
            <div>
                <input name="email" className="email" type="text" onChange={onChangeHandler} pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"  placeholder="Email" required ></input>
            </div>
            <div>
                <button className="subbut" onClick={sendEmail}>Submit</button>
            </div>

            
        </div>
    )

}

export default ForgotPassword