import React from 'react'
import Axios from "axios"
import "../styles/stories.css"
import { useState, useEffect } from "react";

function Stories() {
    
    const [story,setStory] = useState([])
    
    useEffect(() => {
    Axios.get("http://localhost:3000/stories")
    .then(res => {
        setStory(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    })
    

    return (
        <div className = "Stories_">
            <h1 className = "Storyheading_">Stories</h1>
            <div className='horizontal_line'></div>
            {story.map((val, key) => { 
                return (
                    <div className="flex-container">
                    <div className="flex-child-magenta">
                        <h2>{val.Name}</h2>
                        <p>{val.Date}</p>
                        <p>{val.Text}</p>
                    </div>
                    </div>)
            })}
            
        </div>
      )
}

export default Stories;