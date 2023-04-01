import React from 'react'
import Axios from "axios"
import "../styles/donors.css"
import { useState, useEffect } from "react";
import PersonAvatar from '../assets/person-icon.png'

function Donors() {
    
    const [donors, setDonors] = useState([])
    
    useEffect(() => {
    Axios.get("http://localhost:3000/directorPage/donors")
    .then(res => {
        setDonors(res.data.list);
    })
    .catch(err => {console.log(err)})
    },[])
    

    return (
        <div className='flex-container'>
            <h1 className='heading' >Donors</h1>
            {donors.map((val, key) => { 
                return (
                    <div className='donor-div' key={val.Name}>
                        <img className='donor-avatar' src={PersonAvatar}/>
                        <div className='donor-details-div'>
                            <div className='donor-name-div'> {val.Name} </div> 
                            <div> Donated Rs. {val.DonationAmount} </div>
                        </div>
                    </div>)
            })}
            
        </div>
      )
}

export default Donors;