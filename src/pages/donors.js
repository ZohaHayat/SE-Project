import React from 'react'
import Axios from "axios"
import "../styles/donors.css"
import { useState, useEffect } from "react";
import PersonAvatar from '../assets/nodp.png'

function Donors() {
    
    const [donors, setDonors] = useState([])
    
    useEffect(() => {
    Axios.get("https://paktree-backend.herokuapp.com/directorPage/donors")
    .then(res => {
        setDonors(res.data.list);
    })
    .catch(err => {console.log(err)})
    },[])
    

    return (
        <div className='Members_'>
        <h1 className = "memHeading">Donors</h1>
        <div className='horizontal_line'></div>
        <div className="memList">
            {/* <div className='horizontal_line'></div> */}

            {
              donors.map((val) => {
                return (
                    <div className='memItem'>
                  <div className="memImg">
                    <img src={PersonAvatar} alt=""/>
                    </div>
                    <div className="memText">
                    <h2>{val.Name}</h2>
                    <p>Donated Rs. {val.DonationAmount}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>


    </div>

        // <div className='flex-container'>
        //     <h1 className='heading' >Donors</h1>
        //     {donors.map((val, key) => { 
        //         return (
        //             <div className='donor-div' key={val.Name}>
        //                 <img className='donor-avatar' src={PersonAvatar}/>
        //                 <div className='donor-details-div'>
        //                     <div className='donor-name-div'> {val.Name} </div> 
        //                     <div> Donated Rs. {val.DonationAmount} </div>
        //                 </div>
        //             </div>)
        //     })}
            
        // </div>
      )
}

export default Donors;