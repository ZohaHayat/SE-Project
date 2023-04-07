import React from 'react'
import '../styles/volunteerform.css'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Axios from 'axios'

function Volunteerform() {

  const [event_name, seteventName] = useState("")
  const [name, setName] = useState("")
  const [age, setage] = useState("")
  const [vol_email, setvolemail] = useState("")
  const [cnic, setcnic] = useState("")
  const [contact_num, setContactNum] = useState("")

  const navigate = useNavigate();

  
  const volun = () => {
    // const {event_name, name, age,vol_email, cnic, contact_num} = vol
    if (event_name && name && age && vol_email && cnic && contact_num){
      console.log("before axios")
      Axios.post("http://localhost:3000/volunteersubmit", 
      {
        event_name: event_name,
        name: name,
        age: age,
        vol_email: vol_email,
        cnic: cnic,
        contact_num: contact_num
      }
      // {headers:{'Content-Type':'application/json'}})
      ).then((res) => {
        alert(res.data)
        navigate("/");
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
          <input type="text" id="event-name" name="event_name" placeholder='Name of Event' required onChange={ (e) => {seteventName(e.target.value)}  }/>
          <br/>
          <p className='vol_text'>Don't know the name? View events<a className='vol_a' href="/events">here</a> </p>
        </div>
        <div className='name_age_contain'>
        <div className="form-group">
          <input type="text" id="your-name" name="name" placeholder='Your Name' required onChange={ (e) => {setName(e.target.value)}  } />
        </div>
        <div className="form-group">
          <input type="number" id="age" name="age" placeholder='Age' required onChange={ (e) => {setage(e.target.value)}  }/>
        </div>
        </div>
        <div className="form-group">
          <input type="email" id="vol_email" name="vol_email" placeholder='Email' required onChange={ (e) => {setvolemail(e.target.value)}  }/>
        </div>
        <div className='name_age_contain'>
        <div className="form-group">
          <input type="text" id="cnic" name="cnic" placeholder='CNIC' required onChange={ (e) => {setcnic(e.target.value)}  }/>
        </div>
        <div className="form-group">
          <input pattern="\d{4}-\d{7}|\+92\d{10}" type="text" id="contact-number" name="contact_number" placeholder='Contact Number' required onChange={ (e) => {setContactNum(e.target.value)}  }/>
        </div>
        </div>
        <button type="submit" className="vol-submit-button" onClick={(e) => [volun()]}>
          Volunteer
        </button>
      </div>
    </div>
  )
}

export default Volunteerform