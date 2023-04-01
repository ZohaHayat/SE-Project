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
        // <div className = "About">
        //     <h1 className = "About">About Us</h1>
        //         <h3>PakTree was started in 2016 by our President - currently a student of the Aga Khan University. The motto we abide by is #SaveGreenSavePakistan, for if we lose the green, we lose our uniqueness-inspired by our flag, which is nothing but a white piece of cloth without meaning if we were to let that green fade away. Our logo is the perfect portrayal of Paktree's ambition, that is, we want to see the entire globe green for that is our long-term intent, but we want to see our homeland, Pakistan, greener than the rest for that will always be our primary objective. For us, this greenery is not just limited to plantations and environmental awareness but is also a symbol of growth and positivity.</h3>
        // </div>
        <div className = "About">
            <h1 className = "About">About Us</h1>
            {abt.map((val, key) => { 
                return (
                    <div className="flex-contain">
                        <div class="flex-child-g">
                            <h3>{val.Mission}</h3>
                         </div>
                    
                    </div>)
            })}
        </div>
      )
}

export default About