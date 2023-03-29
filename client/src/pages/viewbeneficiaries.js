import React from 'react'
import Axios from "axios"
import Logo from '../assets/nodp.png'
import circle from '../assets/circlebutton.jpg'
import "../styles/viewbeneficiaries.css"
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const ViewBeneficiaries=()=> {

    const [benefit,setBenefit] = useState([])
    // const [cnic,setCnic] = useState('')

    const navigate = useNavigate();
    
    useEffect(() => {
    Axios.get("http://localhost:3000/viewbeneficiaries")
    .then(res => {
        setBenefit(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    })

    const removing = (cnic) => {
        console.log(cnic)
        Axios.post("http://localhost:3000/removebeneficiary", 
        {
            cnic: cnic
        }
        ).then((res) => {
            navigate("/viewbeneficiaries");
        }).catch(err => {console.log(err)})

    }

    return (
        <div  className='Benefit'>
            <div className='navbar2'>
                <h1 className = "Benefitheading">Beneficiaries</h1>
                <div className='leftSide'>
                    <h3>Add New</h3>
                    <Link to ="/addbeneficiary"><img src={circle}/></Link>
                </div>
                </div>
            {benefit.map((val) => { 
                return (
                    <div>
                    <button className='bene-submit-button' onClick={(event) => {removing(val.CNIC)}}>Remove</button>
                    <div className="benefitcontainer">
                        <div class="benefitpic">
                            <img src={Logo}/>
                        </div>
                        <div class="benefitdetail">
                            <h3>{val.Name}</h3>
                            <h6>{val.Contact}</h6>
                            <h4>{val.Reason}</h4>
                        </div>

                    </div>
                    </div>)
            })}
        </div>
      )
}

export default ViewBeneficiaries