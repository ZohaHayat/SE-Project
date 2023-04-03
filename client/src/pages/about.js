import React from 'react'
import Axios from "axios"
import "../styles/about.css"
import { useState,useEffect } from 'react'

function About() {

    const [abt,setAbt] = useState([])
    
    useEffect(() => {
    Axios.get("http://localhost:3000/aboutus")
    .then(res => {
        setAbt(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    })

    return (
        <div className = "About">
            <h1 className = "about-h">About Us</h1>
            {abt.map((val, key) => { 
                return (
                    <div className="flex-contain">
                        <h3 className="about-body">{val.Mission}</h3>
                    </div>)
            })}
        </div>
      )
}

export default About