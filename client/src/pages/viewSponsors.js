import React from 'react'
import Axios from "axios"
import Logo from '../assets/nodp.png'
import "../styles/viewSponsors.css"
import { useState,useEffect } from 'react'

const ViewSponsors=()=> {

    const [sponsors,setSponsors] = useState([])
    
    useEffect(() => {
    Axios.get("http://localhost:3000/directorPage/viewSponsors")
    .then(res => {
        setSponsors(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    })

    return (
        <div  className='Sponsors'>
            <h1 className = "Sponsorheading">Sponsors</h1>
            {sponsors.map((val) => { 
                return (
                    <div className="sponsorcontainer">
                        <div class="sponsorpic">
                            <img src={Logo}/>
                        </div>
                        <div class="sponsordetail">
                            <h3>{val.Name}</h3>
                            <h4>{val.Event}</h4>
                         </div>
                    
                    </div>)
            })}
          

           
        </div>
      )
}

export default ViewSponsors