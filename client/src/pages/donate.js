import { useState } from "react"
import "../styles/donate.css"
import React, { useRef } from 'react';
import Axios from 'axios'
import Stripe from 'stripe';


const Donate = () =>{

    const [amt, setAmt] = useState("");
    const [bank, setBank] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const donating = (e) => {
        e.preventDefault()

        if (amt < 200)
        {
            alert('The amount entered is less than the minimum amount donated. Please donate a value greater than 200 Rs.')
        }
        else{

            var stripe = new Stripe('sk_test_51Mp7mTFJDc8oaStDTeaSLVZxTszm4hGy6lGCkCn14e9vcgGDiaEdrYV4dux1S422XalmLpKytqJPpBPC7ekqTaW500zcIyztTu');

            // console.log(amt,email,name,bank)

        Axios.post("http://localhost:3000/donate", {
                email: email,
                amt: amt,
                name: name,
                bank: bank
                }).then((response) => {
                    // console.log(response.data)
                    if(response.data)
                    {
                        // console.log(response.data.url)
                        console.log("hello")
                        window.location.href = `${response.data.url}`;
                    }
                });
            }
        }
        
    return (
        <div className="donate">

            <h2 className="heading">Make a Donation</h2>
            <div >
                <input className="amount" type="text" placeholder="Enter Amount to donate" required onChange={(event) => {setAmt(event.target.value)}}></input>
            </div>
            <div >
                <input className="amount" type="text" placeholder="Enter Bank Name" required onChange={(event) => {setBank(event.target.value)}}></input>
            </div>
            <div >
                <input className="amount" type="text" placeholder="Enter your name" required onChange={(event) => {setName(event.target.value)}}></input>
            </div>
            <div >
                <input className="amount" type="email" placeholder="Enter your email" required onChange={(event) => {setEmail(event.target.value)}}></input>
            </div>
            <button className="donate-button" onClick={ donating}>Donate</button>
            <div>
                <h5>If you want to donate items such as clothes, toys, books etc, please drop them at the address below: </h5>
                <h6>PO Box 45 Lahore Cantt </h6>
            </div>
        </div>
    )
}

export default Donate


// import { useState } from "react"
// import "../styles/donate.css"
// import React, { useRef } from 'react';
// import Axios from 'axios'

// const Donate = () =>{

//     const [amt, setAmt] = useState("");
//     const [bank, setBank] = useState("");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     const donating = () => {

//         console.log(amt,email,name,bank)

//     Axios.post("http://localhost:3000/donate", {
//             email: email,
//             amt: amt,
//             name: name,
//             bank: bank
//             }).then((response) => {
//                 console.log(response)
//                 if(response.data === "Success")
//                 {
//                     alert("Donation Made");
//                 }
//             });
//         }
        
//     return (
//         <div className="donate">

//         <form action="https://donate.stripe.com/test_8wMaEQ1SL8Vz5UsfYY" >
//             <h2 className="heading">Make a Donation</h2>
//             <div >
//                 <input className="amount" type="text" placeholder="Enter Amount to donate" required onChange={(event) => {setAmt(event.target.value)}}></input>
//             </div>
//             <div >
//                 <input className="amount" type="text" placeholder="Enter Bank Name" required onChange={(event) => {setBank(event.target.value)}}></input>
//             </div>
//             <div >
//                 <input className="amount" type="text" placeholder="Enter your name" required onChange={(event) => {setName(event.target.value)}}></input>
//             </div>
//             <div >
//                 <input className="amount" type="text" placeholder="Enter your email" required onChange={(event) => {setEmail(event.target.value)}}></input>
//             </div>
//             <div >
//                 <button className="donate-button" onClick={ (event) => {donating()}}>Donate</button>
//             </div>
//             </form>
//             <div>
//                 <h5>If you want to donate items such as clothes, toys, books etc, please drop them at the address below: </h5>
//                 <h6>PO Box 45 Lahore Cantt </h6>
//             </div>
//         </div>
//     )
// }

// export default Donate

// import { useState } from "react"
// import "../styles/donate.css"
// import React, { useRef } from 'react';
// import Axios from 'axios'
// import Stripe from 'stripe';


// const Donate = () =>{

//     const [amt, setAmt] = useState("");
//     const [bank, setBank] = useState("");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     function openTab(evt, tabName) {
//         // If clicked button is already active, do nothing
//         if (evt.currentTarget.classList.contains("active")) {
//           return;
//         }
      
//         // Get all the buttons and contents
//         const buttons = document.querySelectorAll(".tablinks");
//         const contents = document.querySelectorAll(".tabcontent");
      
//         // Remove the "active" class from all the buttons and contents
//         buttons.forEach((button) => {
//           button.classList.remove("active");
//         });
//         contents.forEach((content) => {
//           content.classList.remove("active");
//         });
      
//         // Add the "active" class to the clicked button and corresponding content
//         evt.currentTarget.classList.add("active");
//         document.getElementById(tabName).classList.add("active");
//       }
      

//     const donating = async () => {

//         if (amt < 200)
//         {
//             alert('The amount entered is less than the minimum amount donated. Please donate a value greater 200 Rs.')
//         }

//         var stripe = new Stripe('sk_test_51Mp7mTFJDc8oaStDTeaSLVZxTszm4hGy6lGCkCn14e9vcgGDiaEdrYV4dux1S422XalmLpKytqJPpBPC7ekqTaW500zcIyztTu');

//         console.log(amt,email,name,bank)

//     Axios.post("http://localhost:3000/donate", {
//             email: email,
//             amt: amt,
//             name: name,
//             bank: bank
//             }).then((response) => {
//                 console.log(response.data)
//                 if(response.data)
//                 {
//                     console.log(response.data.url)
//                     console.log(stripe)
//                     window.location.href = `${response.data.url}`;
//                     alert("Donation Made");
//                 }
//             });
//         }

//         const donating2 = async () => {

//             if (amt < 200)
//             {
//                 alert('The amount entered is less than the minimum amount donated. Please donate a value greater 200 Rs.')
//             }
    
//             var stripe = new Stripe('sk_test_51Mp7mTFJDc8oaStDTeaSLVZxTszm4hGy6lGCkCn14e9vcgGDiaEdrYV4dux1S422XalmLpKytqJPpBPC7ekqTaW500zcIyztTu');
    
//             console.log(amt,email,name,bank)
    
//         Axios.post("http://localhost:3000/donate2", {
//                 email: email,
//                 amt: amt,
//                 name: name,
//                 bank: bank
//                 }).then((response) => {
//                     console.log(response.data)
//                     if(response.data)
//                     {
//                         console.log(response.data.url)
//                         console.log(stripe)
//                         window.location.href = `${response.data.url}`;
//                         alert("Donation Made");
//                     }
//                 });
//             }
        
//     return (
//         <div className="tab-container">
//         <div className="tab">
//         <button className="tablinks active" onClick={(event) => {openTab(event, 'Tab1')}}>Tab 1</button>
//         <button className="tablinks" onClick={(event) => {openTab(event, 'Tab2')}}>Tab 2</button>
//         </div>

//         <div id="Tab1" className="tabcontent active">
//         <div className="donate">

//              <h2 className="heading">Make a Donation</h2>
//              <div >
//                  <input className="amount" type="text" placeholder="Enter Amount to donate" required onChange={(event) => {setAmt(event.target.value)}}></input>
//              </div>
//              <div >
//                  <input className="amount" type="text" placeholder="Enter Bank Name" required onChange={(event) => {setBank(event.target.value)}}></input>
//              </div>
//              <div >
//                  <input className="amount" type="text" placeholder="Enter your name" required onChange={(event) => {setName(event.target.value)}}></input>
//              </div>
//              <div >
//                  <input className="amount" type="email" placeholder="Enter your email" required onChange={(event) => {setEmail(event.target.value)}}></input>
//              </div>
//              <button className="donate-button" onClick={ (event) => {donating()}}>Donate</button>
//              <div>
//                  <h5>If you want to donate items such as clothes, toys, books etc, please drop them at the address below: </h5>
//                  <h6>PO Box 45 Lahore Cantt </h6>
//              </div>
//          </div>
//         </div>

//         <div id="Tab2" className="tabcontent">
//         <div className="donate">

//              <h2 className="heading">Subscribe to a Monthly Donation Plan</h2>
//              <h5>Note that the monthly donation subscription plan is for a year and cannot be cancelled until the period is over.</h5>
//              <div >
//                  <input className="amount" type="text" placeholder="Enter Amount to donate" required onChange={(event) => {setAmt(event.target.value)}}></input>
//              </div>
//              <div >
//                  <input className="amount" type="text" placeholder="Enter Bank Name" required onChange={(event) => {setBank(event.target.value)}}></input>
//              </div>
//              <div >
//                  <input className="amount" type="text" placeholder="Enter your name" required onChange={(event) => {setName(event.target.value)}}></input>
//              </div>
//              <div >
//                  <input className="amount" type="email" placeholder="Enter your email" required onChange={(event) => {setEmail(event.target.value)}}></input>
//              </div>
//              <button className="donate-button" onClick={ (event) => {donating2()}}>Donate</button>
//              <div>
//                  <h5>If you want to donate items such as clothes, toys, books etc, please drop them at the address below: </h5>
//                  <h6>PO Box 45 Lahore Cantt </h6>
//              </div>
//         </div>
//         </div>
//         </div>
//     )
// }

// export default Donate