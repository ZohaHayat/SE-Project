import React from 'react'
import Axios from "axios";
import { useEffect, useState } from 'react'
import Icon from "../assets/icon.jpg";
import "../styles/memberApp.css"
import { useNavigate } from 'react-router-dom';


function MemberApp() {
  const [mem, setmem] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("http://localhost:3000/getmemberapps")
        .then (res => {
            console.log("hello")
            setmem(res.data.list);
        })
        .catch(err => {
            console.log(err)
        })
    })

  return (
    <div className='Ambassadors_'>
        <h1 className = "memberHeading">Member Applications</h1>
        <div className='horizontal_line'></div>
        <div className="memberList">
            {
              mem.map((val) => {
                return (
                    <div className='memberItem'>
                  <div className="memberImg">
                    <img src={Icon} alt=""/>
                    </div>
                    <div className="memberText">
                    <h2>{val.Name}</h2>
                    <p>{val.Email}</p>
                    </div>
                    <div className="memberButt">
                    <button className="button_member" onClick={() => navigate('acceptdecmember/'+val.Name + "/" + val.Email, {state:{position:val.Position, reason: val.Reason, dob:val.DOB, cnic: val.CNIC, contact: val.Contactno}})}>Learn More</button>
                    </div>
                  </div>
                )
              })
            }

          </div>


    </div>
  )
}

export default MemberApp