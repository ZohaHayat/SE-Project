import { useState } from "react"
import "../styles/deleteacc.css"
import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

const DeleteAcc =()=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const navigate = useNavigate()

    
    const form = useRef();

    const deleting = () => {
        
        Axios.post("https://paktree-backend.herokuapp.com/del", {
            email: email,
            password: password
            }).then((response) => {
                console.log(response.data)
                navigate("/");
            });
    };

    
        
    return (
        <div className="del">

            {/* <form ref={form} onSubmit={logging} > */}
            <h2 className="heading">Delete Account</h2>
            <div >
                <input id="email" className="email" type="text" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" name="user_email" placeholder="Email" required onChange={(event) => {setEmail(event.target.value)}}></input>
            </div>
            <div>
                <input id="password" className="password" type="password" placeholder="Password" required onChange={(event) => {setPassword(event.target.value)}}></input>
            </div>
            <div >
                <button className="del-button" onClick={(event) => [deleting()]}>Delete Account</button>
            </div>
            {/* </form> */}
        </div>
    )
}

export default DeleteAcc