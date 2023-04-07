import React from 'react'
import Axios from "axios"
import "../styles/addStory.css"
import { useState,useNavigate } from "react"

function AddNews() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [headline,setHeadline] = useState("")
    const [textBody,setBody] = useState("")

    const addingNews = () => {

        console.log(date,headline,textBody)

        Axios.post("http://paktree-backend.herokuapp.com/addnews", {
                date: date,
                headline: headline,
                text: textBody
               
                }).then((response) => {
                    console.log(response)
                    if(response.data === "Success")
                    {
                        console.log("news addded")
                        alert("Story Added!");

                    }
                    else if (response.data === "Duplicate"){
                        alert("This news already exists");

                    }
                })
                .catch((err)=>{console.log(err)});
        }


    return(
        <div className="newStory">
            <form>
            <h2 className="heading"> Add new news</h2>
            <div >
                <input className="namefield" type="text" placeholder="Enter Headline" required onChange={(event) => {setHeadline(event.target.value)}}></input>
            </div>
            <div >
                <input className="storyfield" type="text" placeholder="Enter News Text" required onChange={(event) => {setBody(event.target.value)}}></input>
            </div>
            
            <div >
                <button className="story-button" onClick={addingNews}>Submit</button>
            </div>
        </form>
        </div>
    )
};

export default AddNews;