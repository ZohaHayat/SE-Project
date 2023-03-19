// import React from 'react'
// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import "../styles/news.css"
// import axios from "axios";
// import { useEffect } from "react"
// import { useState } from "react"

// const url = "https://www.reuters.com/news/archive/tsunami"

// function News() {
//     const [userData, setUserData] = useState({})

//     useEffect(() => {
//         getNewsWithFetch();
//     },[]);

//     const getNewsWithFetch = async () => {
//         const response = await fetch(url);
//         const jsonData = await response.json();
//         setUserData(jsonData);
//         }

//     // const getGiHubUserWithAxios = async () => {
//     //     const response = await axios.get(url);
//     //     setUserData(response.data);
//     //     };
//   return (
//     <div className='news'>
//         <h2>News</h2>
//         <div className='displayNews'>
//         <h5 className="info-item">{userData.name}</h5>
//         <h5 className="info-item">{userData.location}</h5>
//         <h5 className="info-item">{userData.blog}</h5>
//         <h5 className="info-item">{userData.company}</h5>
//         </div>
//     </div>
//   )
// }

function News(){
    return (
        <div className="news">
            <h1 className="header">News</h1>
            <h2 className="sub-header">As Turkey's earthquake death toll grows, so does anger at the government
            <h3 className="what">04-03-2023
                <h3>The death toll in the massive Feb, 6 earthquakes stands at more than 45,000 according to Turkey's disaster management agency.</h3>
            </h3>
            </h2>

            <h2 className="sub-header">Fact Check: Are Pakistan, India at a risk of a major earthquake?
            <h3 className="what">08-02-2023
                <h3>The USGS says recent studies have found a correlation between earth tides caused by the moon's position and some types of earthquakes.</h3>
            </h3>
            </h2>

            <h2 className="sub-header">Millions face threat of flooding from glacial lakes
            <h3 className="what">07-02-2023
                <h3>Up to 15 million people face risk of catastrophic flooding from glacial lakes which could burst their natural dams at any moment, a new study finds.</h3>
            </h3>
            </h2>

            <h2 className="sub-header">Saudi Arabia launches aid project for people affected by Pakistan's floods
            <h3 className="what">04-02-2023
                <h3>The King Salman Humaitarian Aid and relief Center has started a project to provide shelter materials in winter and aid bags for those affected.</h3>
            </h3>
            </h2>

        </div>
    )
}

export default News