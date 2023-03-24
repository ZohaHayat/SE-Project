import React from 'react'
import '../styles/volunteerform.css'

function volunteerform() {
  return (
    <div className="vol_container">
      <h1 className="v_title">Volunteer for an Event</h1>
      <div className="vol_form">
        <div className="form-group">
          <input type="text" id="event-name" name="event-name" placeholder='Name of Event'/>
          <br/>
          <p className='vol_text'>Don't know the name? View events<a className='vol_a' href="/events">here</a> </p>
        </div>
        <div className='name_age_contain'>
        <div className="form-group">
          <input type="text" id="your-name" name="your-name" placeholder='Your Name' required />
        </div>
        <div className="form-group">
          <input type="number" id="age" name="age" placeholder='Age'/>
        </div>
        </div>
        <div className="form-group">
          <input type="email" id="vol_email" name="vol_email" placeholder='Email'/>
        </div>
        <div className='name_age_contain'>
        <div className="form-group">
          <input type="text" id="cnic" name="cnic" placeholder='CNIC'/>
        </div>
        <div className="form-group">
          <input type="tel" id="contact-number" name="contact-number" placeholder='Contact Number'/>
        </div>
        </div>
        <button type="submit" className="vol-submit-button">
          Volunteer
        </button>
      </div>
    </div>
  )
}

export default volunteerform