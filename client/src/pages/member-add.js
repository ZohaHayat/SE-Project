import { useState } from "react"
import "../styles/member-add.css"
import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

const MemberAdd = () => {
    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [cnic, setCnic] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [position, setPosition] = useState("")
    const [joiningMsg, setJoiningMsg] = useState("")

    const navigate = useNavigate()

    const form = useRef();

    const addMember = () => {

        Axios.post("http://localhost:3000/directorPage/addMember", {
            name: name,
            dob : dob,
            email : email,
            cnic:cnic,
            contactNo : contactNo,
            position : position,
            joiningMsg : joiningMsg
        }).then((response) => {
            console.log(response.data)
        });
    };



    return (
        <div className="member-add-div">

            <form className="form-div" ref={form} onSubmit={addMember} >
                <h2 className="heading">Become a Member</h2>
                <div className="form">

                    <input id="name"
                        className="form-field form-field-margin-top"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        onChange={(event) => { setName(event.target.value) }}></input>

                    <input id="dob"
                        className="form-field form-field-margin-top"
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                        required
                        onChange={(event) => { setDob(event.target.value) }}></input>

                    <input id="email"
                        className="form-field form-field-margin-top"
                        type="text"
                        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={(event) => { setEmail(event.target.value) }}></input>
                    
                    <input id="cnic"
                        className="form-field form-field-margin-top cnic-btn-width"
                        type="text"
                        name="cnic"
                        placeholder="CNIC"
                        required
                        onChange={(event) => { setCnic(event.target.value) }}></input>

                    <input id="contactNo"
                        className="form-field form-field-margin-top"
                        type="text"
                        name="contactNo"
                        placeholder="Contact Number"
                        required
                        onChange={(event) => { setContactNo(event.target.value) }}></input>

                    <input id="position"
                        className="form-field form-field-margin-top"
                        type="text"
                        name="position"
                        placeholder="Position"
                        required
                        onChange={(event) => { setPosition(event.target.value) }}></input>

                    <textarea id="joiningMsg" 
                        name="joiningMsg"
                        className="form-field-margin-top joiningMsg-form-field"
                        required
                        placeholder="Why do you want to join us?"
                        onChange={(event) => { setJoiningMsg(event.target.value) }}
                        rows="4" cols="40">
                    </textarea>
                </div>

                <div >
                    <button className="apply-button" >Apply</button>
                </div>
            </form>
        </div>
    )
}

export default MemberAdd