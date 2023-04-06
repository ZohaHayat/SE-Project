import React from 'react'
import Axios from "axios"
import "../styles/AmbassadorApplications.css"
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';


const ApplicationDetails = ({ application, onAccept, onClose, onDecline }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <button className="close" onClick={onClose}>close</button>
          <h2>Name of Applicant: {application.Name}</h2>
          <h4>Email: {application.Email}</h4>
          <h4>Contact: {application.Contact_no}</h4>
          <h4>Date of Birth: {application.DOB}</h4>
          <h4>Institution: {application.Institution}</h4> 
          <h4>Reason for applying: {application.Reason}</h4> 
          
          <div className='amb-popup-red-buttons'>
            <button className="amb-popup-accept" onClick={() => {onAccept(application); onClose();}}>Accept</button>
            <button className="amb-popup-decline" onClick={() => {onDecline(application); onClose();}}>Decline</button>
          </div>
        </div>
      </div>
    );
};

const AmbassadorApplications = () => {
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
  
    useEffect(() => {
      Axios.get('http://localhost:3000/ambassadorApplications')
        .then((res) => {
          setApplications(res.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const acceptsendEmail = (application) => {
      const templateParams = {
        subject: "Application accepted",
        name: application.Name,
        email: application.Email,
        message: 'Congratulations! Your ambassador application has been accepted. You are now a member of the PakTree team.'
      };
    
      emailjs.send('gmail', 'template_4943j5l', templateParams, 'qwZ-gJBy-s1_fkz9V')
        .then((response) => {
          // alert("email sent")
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          // alert("email failed")
          console.log('FAILED...', err);
        });
    };

    const declinesendEmail = (application) => {
      const templateParams = {
        subject: "Application Declined",
        name: application.Name,
        email: application.Email,
        message: 'We are sorry to inform you that we will not be going forward with your ambassador application.'
      };
    
      emailjs.send('gmail', 'template_4943j5l', templateParams, 'qwZ-gJBy-s1_fkz9V')
        .then((response) => {
          // alert("email sent")
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          // alert("email failed")
          console.log('FAILED...', err);
        });
    };
  
    const handleViewMore = (application) => {
      setSelectedApplication(application);
    };

    const handleDecline = (application) => {
        Axios.put(`http://localhost:3000/ambassadorApplications/${application.Application_ID}`, {
            Status: 'declined'
        }).then(() => {
            declinesendEmail(application);
            setApplications(applications.map((a) => {
            if (a.Application_ID === application.Application_ID) {
                return { ...a, Status: 'declined' };
            }
            return a;
            }));
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleAccept = (application) => {
        Axios.post(`http://localhost:3000/addAmbassador`, {
          Name: application.Name,
          Email: application.Email,
          contactNo: application.Contact_no,
          dob: application.DOB,
        }).then( () => {
            acceptsendEmail(application);
            Axios.put(`http://localhost:3000/ambassadorApplications/${application.Application_ID}`, {
                Status: 'accepted'
            }).then(() => {
                setApplications(applications.map((a) => {
                if (a.Application_ID === application.Application_ID) {
                    return { ...a, Status: 'accepted' };
                }
                return a;
                }));
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
          console.log(err);
        });
    };


  
    return (
      <div className="page-amb-applications">
        <h1>Pending Ambassador Applications</h1>
  
        {applications.map((application, index) => {
            if (application.Status === "undecided") {
                return (
                    <div className="single-amb-app" key={index}>
                        <h2>Name: {application.Name}</h2>
                        <h4>Email: {application.Email}</h4>
                        <h4>Institution: {application.Institution}</h4>
                        <button className="amb-app-viewDetails" onClick={() => handleViewMore(application)}>View Details</button>
                        <div className="amb-app-button-div">
                            <button className="amb-app-Accept" onClick={() => handleAccept(application)}>Accept</button>
                            <button className="amb-app-Decline" onClick={() => handleDecline(application)}>Decline</button>
                        </div>
                    </div>
                );
            }
        })}
  
        {selectedApplication && (
          <ApplicationDetails
            application={selectedApplication}
            onClose={() => setSelectedApplication(null)}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        )}
      </div>
    );
  };

export default AmbassadorApplications