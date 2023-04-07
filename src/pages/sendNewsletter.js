import { useState, useEffect } from "react"
import "../styles/sendNewsletter.css"
// import jsPDF from "jspdf";
import emailjs from '@emailjs/browser';
import Axios from "axios";
import { useNavigate } from "react-router-dom"




const Newsletter=()=>{
    const [content, setContent]=useState("")
    const [subList, setSubList] =useState([])
    const navigate = useNavigate();
    


    useEffect(() => {
        Axios.get("https://paktree-backend.herokuapp.com/newsletter")
        .then (res => {
            setSubList(res.data.list);
        })
        .catch(err => {
            console.log(err)
        })
    })

    const newsletterSubmit=(e)=>{
        for (let i = 0; i < subList.length; i++) {
            console.log(subList[i]['Email'])
            var templateParams = {
                email: subList[i]['Email'],
                message: content,
                subject: "PakTree Newsletter"
            };

            emailjs.send('gmail', 'template_4943j5l', templateParams, 'qwZ-gJBy-s1_fkz9V')
            .then((result) => {
                console.log(result.text);
                // e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
            
        }
        
        e.preventDefault();

        navigate("/directorPage")
        
       
        

        
    }

    const onContentChange=(e)=>{
        setContent(e.target.value);
        e.preventDefault();
        

    }


    return ( 
        <div>
            <form className="formNewsletter" onSubmit={newsletterSubmit}>
            <h2 className="newsletter-heading">Newsletter</h2>
            <div>
                <textarea id="message" onChange={onContentChange} class="query-message" name="user_message" type="text" placeholder="Enter the content for the newsletter" required></textarea>
            </div>
                <button className="submit-button">Send</button>
            </form>
        </div>

    )

}

export default Newsletter;