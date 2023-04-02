import React from 'react'
import Axios from "axios";
import { useEffect, useState } from 'react'
import AmbassIcon from "../assets/icon.jpg";
import "../styles/ambassadors.css"
import { useNavigate } from 'react-router-dom';


function ViewAmbassadors() {
    const [ambass, setambass] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("http://localhost:3000/directorPage/getambassadors")
        .then (res => {
            console.log("hello")
            setambass(res.data.list);
        })
        .catch(err => {
            console.log(err)
        })
    })

    const RemoveAmbass = (name, email) => {
      console.log(`The name and email to be removed ${name} and ${email}`)

      Axios.post("http://localhost:3000/directorPage/ambassremove",{
        name:name,
        email:email
      }).then((res) =>{
        console.log(res)
      })
      .catch(err =>{
        console.log(err)
      })

    }
  return (
    <div className='Ambassadors_'>
        <h1 className = "AmbassHeading">Ambassadors</h1>
        <div className='horizontal_line'></div>
        <div className="AmbassList">
            {
              ambass.map((val) => {
                return (
                    <div className='AmbassItem'>
                  <div className="AmbassImg">
                    <img src={AmbassIcon} alt=""/>
                    </div>
                    <div className="AmbassText">
                    <h2>{val.Name}</h2>
                    <p>{val.Email}</p>
                    </div>
                    <div className="AmbassButt">
                    <button className="button_ambass" onClick={() => RemoveAmbass(val.Name, val.Email)}>Remove</button>
                    </div>
                  </div>
                )
              })
            }

          </div>


    </div>
  )
}

export default ViewAmbassadors