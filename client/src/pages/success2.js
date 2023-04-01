import { useState, useEffect } from "react"
import "../styles/success.css"
import React, { useRef } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Success2 = () =>{

    // const [amt, setAmt] = useState("");
    // const [bank, setBank] = useState("");
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const navigate = useNavigate()

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        let amt = urlParams.get('amt');
        let name = urlParams.get('name');
        let email = urlParams.get('email');
        let bank = urlParams.get('bank');
        // console.log(sessionId, name, email);

    Axios.post("http://localhost:3000/okay", {
            email: email,
            amt: amt*12,
            name: name,
            bank: bank
            }).then((response) => {
                console.log(response.data)
                if(response.data)
                {
                    // console.log(response.data.url)
                    // console.log(stripe)
                    // window.location.href = `${response.data.url}`;
                    // navigate("/")
                    alert("Donation Made");
                }
            });
        },)
        
    return (
        <div className="donate-donate">

           <div className="succcontainer">
             <h3>You have successfully made your payment. Please click on the below button to navigate to the home page:</h3>
             <button className="okay-button" onClick={(event) => {navigate("/")}}>Home</button>
           </div>
        </div>
    )
}

export default Success2