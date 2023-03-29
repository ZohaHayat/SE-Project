import React from 'react'
import '../styles/addbeneficiary.css'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Axios from 'axios'

function AddBeneficiary() {

  const [name, setName] = useState("")
  const [reason, setReason] = useState("")
  const [contact, setContact] = useState("")
  const [cnic, setCNIC] = useState("")

  const navigate = useNavigate();

  
  const adding = () => {
    // const {event_name, name, age,vol_email, cnic, contact_num} = vol
    console.log(name)
      Axios.post("http://localhost:3000/addbeneficiary", 
      {
        name: name,
        contact: contact,
        reason: reason,
        cnic: cnic
      }
      ).then((res) => {
        navigate("/viewbeneficiaries");
      }).catch(err => {console.log(err)})
 }

  

  return (
    <div className="b_container">
      <h1 className="b_title">Add a new beneficiary</h1>
      <div className="b_form">
        <div className='name_age_contain'>
        <div className="form-group">
          <input type="text" id="your-name" name="name" placeholder='Enter Beneficiary Name' required onChange={ (e) => {setName(e.target.value)}  } />
        </div>
        <div className="form-group">
          <input type="text" id="contact" name="contact" placeholder='Enter beneficiary contact number' required onChange={ (e) => {setContact(e.target.value)}  }/>
        </div>
        </div>
        <div className="form-group">
          <input type="text" id="b_email" name="b_email" placeholder='Enter Beneficiary CNIC' required onChange={ (e) => {setCNIC(e.target.value)}  }/>
        </div>
        <div className="form-group">
          <input type="text" id="b_email" name="b_email" placeholder='Enter the reason' required onChange={ (e) => {setReason(e.target.value)}  }/>
        </div>
        <button className="b-submit-button" onClick={(e) => [adding()]}>
          Add
        </button>
      </div>
    </div>
  )
}

export default AddBeneficiary