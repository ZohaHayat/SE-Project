import React from 'react'
import "../styles/event.css"


function eventItem({image, name, text}) {
  return (
    <div className='EventItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{text}</p>

    </div>
  )
}

export default eventItem