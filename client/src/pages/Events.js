import React from 'react'
import {EventList} from '../helpers/EventList'
import EventItem from '../components/eventItem'
import "../styles/event.css"
// we are importing a variable so curly braces used; here export default not used

function Events() {
  return (
    <div clasName = "Events">
        <h1 className = "EventTitle">Events</h1>
        <div className="EventList">
            {EventList.map((eventitem,key) => {
                return (<EventItem 
                key={key}
                image={eventitem.image} 
                name={eventitem.name} 
                text={eventitem.text}/>)
            })}
        </div>
    </div>
  )
}

export default Events