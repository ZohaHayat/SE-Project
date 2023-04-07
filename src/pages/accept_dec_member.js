import { useLocation, useParams } from "react-router-dom"
import Logo from '../assets/nodp.png'
import '../styles/accept_dec_member.css'
import Axios from "axios"
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom"

const MemberAppDecision = (props)=>{
    let {name, email} = useParams()
    const location=useLocation()
    const navigate = useNavigate();

    
        
    
    const acceptHandler=()=>{
        let message="We are delighted to inform you that you have been selected as a member for PakTree. We reviewed your application and felt that you would be a great contribution to the team! Welcome to the Team!"
        var templateParams = {
            name: name,
            email: email,
            message:message,
            subject: "PakTree Member Application Decision"
        };
        Axios.post("http://paktree-backend.herokuapp.com/accept_members", {
           
            Name:name,
            DOB: location.state.dob,
            Email:email,
            CNIC:location.state.cnic,
            ContactNo: location.state.contact,
            Position: "Member " + location.state.position,
            JoiningMsg:"",
            status:"active"
            }).then((response) => {
                
                navigate("/directorPage/memberapp")
                
                emailjs.send('service_su8frdt','template_resgpox',templateParams, "-ZL5kuj6IL5iYqLqM")
                .then((result) => {
                    console.log(result.text);
                    // e.target.reset()
                }, (error) => {
                    console.log(error.text);
                });
               
            });

    }

    const rejectHandler=()=>{
        let message="We regret to inform you that we will not be going forward with your application."
        var templateParams = {
            name: name,
            email: email,
            message:message,
            subject: "PakTree Member Application Decision"
        };
        Axios.post("http://paktree-backend.herokuapp.com/reject_members", {
            cnic: location.state.cnic,
            status:"rejected"
        }).then((response) => {
            
                navigate("/directorPage/memberapp")
               

                emailjs.send('service_su8frdt','template_resgpox',templateParams, "-ZL5kuj6IL5iYqLqM")
                .then((result) => {
                    console.log(result.text);
                    // e.target.reset()
                }, (error) => {
                    console.log(error.text);
                });
               
            });

    }
    return (
        <div>
            <h1 className = "memberHeading">Member Applications</h1>
            <div className='horizontal_line'></div>
            <div  className="functionContainer">
                    <div class="memberInfoPic">
                        <img src={Logo}/>
                    </div>
                    <div className="memberInfocontainer">
                        <h3 className="memberName">{name}</h3>
                        
                        <div className="buttondec">
                            <button className="butAccept" onClick={acceptHandler}>Accept</button>
                            <button className="butDecline" onClick={rejectHandler}>Reject</button>

                        </div>
                    </div>
                    

                    <div className="memberInfo">
                    <h3>Applied Position For: Member of {location.state.position}</h3>
                    <h5>Birthday: {location.state.dob}</h5>
                    <h5>{email}</h5>
                    <h5>Contact No. : {location.state.contact}</h5>
                    <h5>CNIC: {location.state.cnic}</h5>
                    <h5>{location.state.reason}</h5>

                    </div>
            </div>
        </div>   
    )



}

export default MemberAppDecision