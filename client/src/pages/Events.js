import React from 'react'
import Axios from "axios"
import { useEffect, useState } from 'react'
import {EventList} from '../helpers/EventList'
// import EventItem from '../components/eventItem'
import "../styles/event.css"
// we are importing a variable so curly braces used; here export default not used

function Events() {
  const [popupcontent,setpopupcontent] = useState([]);
  const [popuptoggle, setpopuptoggle] = useState(false);
  const [styling, setstyling] = useState(null);
  const changecontent = (eventitem) => {
    setpopupcontent([eventitem]);
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
        {/* <div className="EventList">
            {EventList.map((eventitem,key) => {
                return ( <div className='content_card'>
                <EventItem 
                key={key}
                image={eventitem.image} 
                name={eventitem.name} 
                text={eventitem.text}/>

                </div>
                ); 
              })}
          </div> */}
          <div className="EventList">
            {
              EventList.map((eventitem) => {
                return (
                  <div className="EventItem">
                    <img src={eventitem.image} alt=""/>
                    <h1>{eventitem.name}</h1>
                    <p>{eventitem.text}</p>
                    <button className="button_events" onClick={()=> {changecontent(eventitem)}}>View More</button>
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
              {popupcontent.map((pop)=>{
                return (
                  <div className="pop_up_card">
                    <h2>{pop.name}</h2>
                    <p>{pop.details}</p>
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