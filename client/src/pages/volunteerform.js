import React from 'react'
import '../styles/volunteerform.css'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from 'axios'

function Volunteerform() {

  const navigate = useNavigate();

  const [vol, setvol] = useState({
    event_name: "",
    name:"",
    age:"",
    vol_email:"",
    cnic:"",
    contact_num:""
  })
  const handleChange = e =>{
    const {name, value} = e.target
    setvol({
      ...vol,
      [name]:value
    })
  }
  const volun = () => {
    const {event_name, name, age,vol_email, cnic, contact_num} = vol
    if (event_name && name && age && vol_email && cnic){
      console.log("before axios")
      axios.post("http://localhost:3000/volunteersubmit", vol,{headers:{'Content-Type':'application/json'}})
      .then(res => {
        alert(res.data.message)
        navigate.push("/volunteer")
      }).catch(err => {console.log(err)})
    } else {
      alert ("Invalid Input")
    }
  }

  return (
    <div className="vol_container">
      <h1 className="v_title">Volunteer for an Event</h1>
      <div className="vol_form">
        <div className="form-group">
          <input type="text" id="event-name" name="event_name" value={vol.event_name} placeholder='Name of Event' onChange={ handleChange }/>
          <br/>
          <p className='vol_text'>Don't know the name? View events<a className='vol_a' href="/events">here</a> </p>
        </div>
        <div className='name_age_contain'>
        <div className="form-group">
          <input type="text" id="your-name" name="name" value={vol.name} placeholder='Your Name' onChange={ handleChange } />
        </div>
        <div className="form-group">
          <input type="number" id="age" name="age" value={vol.age} placeholder='Age' onChange={ handleChange }/>
        </div>
        </div>
        <div className="form-group">
          <input type="email" id="vol_email" name="vol_email" value={vol.vol_email} placeholder='Email' onChange={ handleChange }/>
        </div>
        <div className='name_age_contain'>
        <div className="form-group">
          <input type="text" id="cnic" name="cnic" value={vol.cnic} placeholder='CNIC' onChange={ handleChange }/>
        </div>
        <div className="form-group">
          <input type="text" id="contact-number" name="contact_number" value={vol.contact_num} placeholder='Contact Number' onChange={ handleChange }/>
        </div>
        </div>
        <button type="submit" className="vol-submit-button" onClick={volun}>
          Volunteer
        </button>
      </div>
    </div>
  )
}

export default Volunteerform