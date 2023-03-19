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
        <div className = "Stories">
            <h1 className = "Storyheading">Stories</h1>
            {story.map((val, key) => { 
                return (
                    <div className="Stories">
                        <h2>{val.Name}</h2>
                        <h4>{val.Date}</h4>
                        <h3>{val.Text}</h3>
                    </div>)
            })}
            
        </div>
      )
}

export default Stories;