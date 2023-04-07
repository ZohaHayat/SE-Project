import React from 'react'
import Axios from "axios"
import Icon from '../assets/nodp.png'
import "../styles/viewSponsors.css"
import { useState,useEffect } from 'react'

const ViewSponsors=()=> {

    const [sponsors,setSponsors] = useState([])
    
    useEffect(() => {
    Axios.get("http://paktree-backend.herokuapp.com/directorPage/viewSponsors")
    .then(res => {
        setSponsors(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    })

    return (
        <div className='Members_'>
        <h1 className = "memHeading">Sponsors</h1>
        <div className='horizontal_line'></div>
        <div className="memList">
            {/* <div className='horizontal_line'></div> */}

            {
              sponsors.map((val) => {
                return (
                    <div className='memItem'>
                  <div className="memImg">
                    <img src={Icon} alt=""/>
                    </div>
                    <div className="memText">
                    <h2>{val.Name}</h2>
                    <p>{val.Event}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>


    </div>
        // <div  className='Sponsors'>
        //     <h1 className = "Sponsorheading">Sponsors</h1>
        //     {sponsors.map((val) => { 
        //         return (
        //             <div className="sponsorcontainer">
        //                 <div class="sponsorpic">
        //                     <img className="sponsor-img" src={Logo}/>
        //                 </div>
        //                 <div class="sponsordetail">
        //                     <h3>{val.Name}</h3>
        //                     <h4>{val.Event}</h4>
        //                  </div>
                    
        //             </div>)
        //     })}
          

           
        // </div>
      )
}

export default ViewSponsors