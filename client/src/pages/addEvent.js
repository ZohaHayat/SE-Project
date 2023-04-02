import React from 'react'
import Axios from "axios"
import "../styles/addStory.css"
import { useState,useNavigate } from "react"

function AddEvent() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [name,setName] = useState("")
    const [textBody,setBody] = useState("")

    const addingEvent = () => {

        console.log(date,name,textBody)

        Axios.post("http://localhost:3000/addevent", {
                date: date,
                name: name,
                text: textBody,
                type:""
               
                }).then((response) => {
                    console.log(response)
                    if(response.data === "Success")
                    {
                        console.log("data enetered")
                        

                    }
                    else if (response.data === "Duplicate"){
                        alert("This event already exists");

                    }
                })
                .catch((err)=>{console.log(err)});
        }


    return(
        <div className="newStory">
            <form>
            <h2 className="heading"> Add a new event</h2>
            <div >
                <input className="namefield" type="text" placeholder="Enter Event Name" required onChange={(event) => {setName(event.target.value)}}></input>
            </div>
            <div >
                <input className="storyfield" type="text" placeholder="Enter Event Description" required onChange={(event) => {setBody(event.target.value)}}></input>
            </div>
            
            <div >
                <button className="story-button" onClick={addingEvent}>Submit</button>
            </div>
        </form>
        </div>
    )
};

export default AddEvent;