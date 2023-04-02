import React from 'react'
import Axios from "axios"
import { useEffect, useState } from 'react'
import {EventList} from '../helpers/EventList'
// import EventItem from '../components/eventItem'
import "../styles/directorEvents.css"
import Plantation from "../assets/plantation.webp";
import Clothes from "../assets/clothes.webp";
import Food from "../assets/food.jpg";
import Water from "../assets/water.jpg";
// we are importing a variable so curly braces used; here export default not used

function DEvents() {

  const [eve, seteve] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/events/get")
    .then (res => {
      seteve(res.data.list);
    })
    .catch(err => {
      console.log(err)
    })
  })

  const handleRemove = (event) => {
    Axios.delete(`http://localhost:3000/events/delete/${event.EventID}`)
    .then(res => {
      console.log(res.data.message);
      const updatedEvents = eve.filter(e => e.EventID !== event.EventID);
      seteve(updatedEvents);
    })
    .catch(err => {
      console.log(err);
    });
  }

  
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
                <p>{val.Date}</p>
                <p>{val.Description}</p>
                <button className="d-button_events" onClick={()=> {changecontent(val)}}>View More</button>
                <button className="button_events_remove" onClick={()=> {handleRemove(val)}}>Remove</button>
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

export default DEvents