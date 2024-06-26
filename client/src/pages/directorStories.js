import React from 'react'
import Axios from "axios"
import "../styles/directorStories.css"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';





function SingleStory({...props}){
    
  
    return (
    <div className="flex-container">

    <div className="flex-child-magenta">
        <h2>{props.Name}</h2>
        <p className='story_p'>{props.Date}</p>
        <p className='story_p'>{props.Text}</p>
    </div>

    <div className="flex-child-green">
        <button className = "dir-story-button" onClick={()=> {
            console.log(props._id+" button clicked")
            deleteStory(props.Name,props.Date,props.Text)
            }} >Remove</button>
        
    </div>

</div>)

}

function deleteStory(delete_name,delete_date,delete_text) {
    Axios.post("http://localhost:3000/deleteStory",{name:delete_name,date:delete_date,text:delete_text}).then((msg)=>{console.log(msg)})
}


function DirectorStories() {
    
    const [story,setStory] = useState([])
    const navigate = useNavigate()
    
    const navigateToAddStory = () => {
        navigate('/directorPage/addstory')
    }
    
    useEffect(() => {
    Axios.get("http://localhost:3000/stories")
    .then(res => {
        setStory(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    },[story])

    const deleteStory = (passed_name,passed_date,passed_text) => {
        Axios.post("http://localhost:3000/deleteStory", {
        name:passed_name,
        date:passed_date,
        text:passed_text
        }).then((response) => {
            console.log("name:",passed_name)
            console.log(response.data)
            if (response==="Success"){
                window.location.reload(false);
            }
        });  


    }


  
    
    

    return (
        <div className = "Stories_">
            <div className='above_hor_line'>
            <h1 className = "Storyheading_">Stories</h1>
            <div className='stor_button_new_text'>
            <h2 className = "Storysubheading">Add New</h2>
                <IconButton  sx={{display: "flex", justifyContent: "flex-end"}} onClick={navigateToAddStory}>
                    <AddCircleIcon style={{color: "#92D4D2", fontSize:60}}/>
                </IconButton>
                </div>
                </div>
            <div className='horizontal_line'></div>
            {/* <div className="flex-container">
                <h2 className = "Storysubheading">Add new story</h2>
                <IconButton size="large" sx={{display: "flex", justifyContent: "flex-end"}} onClick={navigateToAddStory}>
                    <AddCircleIcon style={{color: "#92D4D2"}}/>
                </IconButton>

            </div> */}
            

            {story.map((val, key) => { 
                return (<div key={key}>{SingleStory(val)}</div>)
            })}
            
        </div>
      )
}

export default DirectorStories;



// variant="contained" style={{
//     borderRadius: 15,
//     backgroundColor: "#f96b7c",

//     // padding: "18px 36px",
//     // fontSize: "18px"
//     }} 