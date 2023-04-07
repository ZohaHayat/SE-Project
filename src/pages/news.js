// import React from 'react'
// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import Axios from "axios"

import "../styles/news.css"


function News(){
    const [news,setNews] = useState([])
    
    useEffect(() => {
    Axios.get("http://paktree-backend.herokuapp.com/dirnews")
    .then(res => {
        setNews(res.data.list); //stores the data from the backend
    })
    .catch(err => {console.log(err)})
    })
    
    return (
        <div className = "Stories_">
            <h1 className = "Storyheading_">News</h1>
            <div className='horizontal_line'></div>
            {news.map((val, key) => { 
                return (
                    <div className="flex-container">
                    <div className="flex-child-magenta">
                        <h2>{val.Headline}</h2>
                        <p>{val.Date_Published}</p>
                        <p>{val.News_Text}</p>
                    </div>
                    </div>)
            })}
            
        </div>
    )
}

export default News


{/* <div className="news">
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

        </div> */}