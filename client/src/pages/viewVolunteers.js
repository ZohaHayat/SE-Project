import React from 'react'
import Axios from "axios"
import Icon from '../assets/nodp.png'
// import Logo1 from '../assets/team2.jpeg'
// import Logo2 from '../assets/team3.jpeg'
// import Logo3 from '../assets/team4.jpeg'
// import Logo4 from '../assets/team5.jpeg'
// import Logo5 from '../assets/team6.jpeg'
// import Logo6 from '../assets/team7.jpeg'
import "../styles/viewVolunteers.css"
import { useState,useEffect } from 'react'

const ViewVolunteers=()=> {

    const [volunteers,setVolunteer] = useState([])
    
    useEffect(() => {
    Axios.get("http://localhost:3000/directorPage/viewVolunteers")
    .then(res => {
        setVolunteer(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    })

    return (
        <div className='Members_'>
        <h1 className = "memHeading">Volunteers</h1>
        <div className='horizontal_line'></div>
        <div className="memList">
            {/* <div className='horizontal_line'></div> */}

            {
              volunteers.map((val) => {
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
        // <div className = "Volunteers">
        //     <h1 className = "Volunteerheading">Volunteers</h1>
        //     {volunteers.map((val, key) => { 
        //         return (
        //             <div className="flex-container">
        //                 <div class="flex-child-magenta">
        //                     <img className="volunteer-img" src={Logo}/>
        //                 </div>
        //                 <div class="flex-child-green">
        //                     <h3>{val.Name}</h3>
        //                     <h4>{val.Event}</h4>
        //                  </div>
                    
        //             </div>)
        //     })}
          

           
        // </div>
      )
}

export default ViewVolunteers