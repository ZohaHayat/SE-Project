import React from 'react'
import Axios from "axios"
import { useEffect, useState } from 'react'
import {EventList} from '../helpers/EventList'
// import EventItem from '../components/eventItem'
import "../styles/event.css"
import Plantation from "../assets/plantation.webp";
import Clothes from "../assets/common.jpg";
import Food from "../assets/food.jpg";
import Water from "../assets/water.jpg";
// we are importing a variable so curly braces used; here export default not used

function Events() {

  const [eve, seteve] = useState([]);

  useEffect(() => {
    Axios.get("https://paktree-backend.herokuapp.com/events/get")
    .then (res => {
      seteve(res.data.list);
    })
    .catch(err => {
      console.log(err)
    })
  })

  
  const [popupcontent,setpopupcontent] = useState([]);
  const [popuptoggle, setpopuptoggle] = useState(false);
  const [styling, setstyling] = useState(null);
  const changecontent = (vall) => {
    setpopupcontent([vall]);
    setpopuptoggle(!popuptoggle);
    if (styling === null){
      setstyling({
        posiyion:'fixed',
      });
    }else(setstyling (null))

  };
  return (
    <div clasName = "Events">
        <h1 className = "EventTitle">Events</h1>
          <div className="EventList">
            {
              eve.map((val) => {
                return (
                  <div className="EventItem">
                    <img src={Clothes} alt=""/>
                    <h1>{val.EventName}</h1>
                    <p>Event Date: {val.Date}</p>
                    {/* <p>{val.Description}</p> */}
                    <button className="button_events" onClick={()=> {changecontent(val)}}>View More</button>
                  </div>
                )
              })
            }

          </div>
          {popuptoggle && (<div className="pop_up_container" onClick={changecontent}>
          <div className="pop_up_body" onClick = {(e)=> e.stopPropagation()}>
            <div className="pop_up_header">
              <button className="button_events_2" onClick={changecontent}>x</button>
            </div>
            <div className="pop_up_content">
              {popupcontent.map((val)=>{
                return (
                  <div className="pop_up_card">
                   <h2>{val.EventName}</h2>
                   <p>{val.Date}</p>
                    <p>{val.Description}</p>
                  </div>
                )

              })}
            </div>
            </div>
          </div>)}


        
        </div>
  )
}

export default Events