import React from 'react'
import Axios from "axios"
import { useEffect, useState } from 'react'
import {EventList} from '../helpers/EventList'
import EventItem from '../components/eventItem'
import "../styles/event.css"
// we are importing a variable so curly braces used; here export default not used

function Events() {
  // const [popupContent,seePopUpContent] = useState([]);
  return (
    <div clasName = "Events">
        <h1 className = "EventTitle">Events</h1>
        <div className="EventList">
            {EventList.map((eventitem,key) => {
                return ( <div className='content_card'>
                <EventItem 
                key={key}
                image={eventitem.image} 
                name={eventitem.name} 
                text={eventitem.text}/>
                </div>
                ); })}</div>

        
        </div>
  )
}

export default Events