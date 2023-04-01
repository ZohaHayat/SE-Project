import React from 'react'
import Axios from "axios"
import Logo from '../assets/nodp.png'
import "../styles/removeMembers.css"
import { useState,useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const RemoveMembers=()=> {

    const [members,setMembers] = useState([])
    const [buttonText,setButtonText] = useState("Remove")
    const [color,setButtonColor] = useState('rgb(234, 114, 114)')
    const [currentmember,setcurrentmember] = useState("")
    const memberArray=[]

    useEffect(() => {
    Axios.get("http://localhost:3000/directorPage/members")
    .then(res => {
        setMembers(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    })

    const ClickRemoveMember=(id)=>{
        
        setcurrentmember(id)
        // console.log(`this button: ${id} was clicked`)
        // console.log(members)
        
        // for (let i = 0; i < members.length; i++) {
        //     if(members[i]._id === id){
        //         index=i
        //         break

        //     }
        // }  
        // members.splice(index, 1)
        // setMembers(members);
        // setButtonText("Removed")
        // setButtonColor('Green')

        Axios.post("http://localhost:3000/directorPage/members", {

            id:id,
            memstatus:"removed"
            }).then((response) => {

                

                // if(response.data==="success") {
                //     console.log(response)
                    
                    
                // }

                Navigate("/directorPage/members")
               
            });

    }

    return (
        <div  className='Members'>
            <h1 className = "Memberheading">Members</h1>
            {members.map((val) => { 
                return (
                    <div className="membercontainer">
                        <div class="memberpic">
                            <img src={Logo}/>
                        </div>
                        <div class="memberdetail">
                            <h3>{val.Name}</h3>
                            <h4>{val.Event}</h4>
                         </div>
                         <div>
                            <button key={val.Name} style={{backgroundColor:color}} className='removebutton' onClick={()=>ClickRemoveMember(val._id)}>Remove</button>
                         </div>
                    
                    </div>)
            })}
          

           
        </div>
      )
}

export default RemoveMembers