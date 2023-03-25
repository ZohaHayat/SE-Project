import React from 'react'
import Axios from "axios"
import Logo from '../assets/team1.jpeg'
import Logo1 from '../assets/team2.jpeg'
import Logo2 from '../assets/team3.jpeg'
import Logo3 from '../assets/team4.jpeg'
import Logo4 from '../assets/team5.jpeg'
import Logo5 from '../assets/team6.jpeg'
import Logo6 from '../assets/team7.jpeg'
import "../styles/team.css"

function Team() {

    return (
        <div className = "Team">
            <h1 className = "Teamheading">Our Team</h1>

            <div class="flex-container">
            {/* <div class="flex-child magenta"> */}
                <img src={Logo6}/>
            {/* </div> */}
            <div class="flex-child green">
                <h3>Maryam Shaukat</h3>
                <h4>President</h4>
            </div>
            </div>

            <div class="flex-container">
            {/* <div class="flex-child magenta"> */}
                <img src={Logo}/>
            {/* </div> */}
            <div class="flex-child green">
                <h3>Zoha Hayat</h3>
                <h4>Director Social Media</h4>
            </div>
            </div>

            <div class="flex-container">
            {/* <div class="flex-child magenta"> */}
                <img src={Logo1}/>
            {/* </div> */}
            <div class="flex-child green">
                <h3>Mehak Humayun</h3>
                <h4>Director Logistics</h4>
            </div>
            </div>

            <div class="flex-container">
            {/* <div class="flex-child magenta"> */}
                <img src={Logo2}/>
            {/* </div> */}
            <div class="flex-child green">
                <h3>Ayesha Yaseen</h3>
                <h4>Director Donations</h4>
            </div>
            </div>

            <div class="flex-container">
            {/* <div class="flex-child magenta"> */}
                <img src={Logo3}/>
            {/* </div> */}
            <div class="flex-child green">
                <h3>Ayesha Javaid</h3>
                <h4>Director Publications</h4>
            </div>
            </div>

            <div class="flex-container">
            {/* <div class="flex-child magenta"> */}
                <img src={Logo4}/>
            {/* </div> */}
            <div class="flex-child green">
                <h3>Fatima Ali</h3>
                <h4>Director Research</h4>
            </div>
            </div>

            <div class="flex-container">
            {/* <div class="flex-child magenta"> */}
                <img src={Logo5}/>
            {/* </div> */}
            <div class="flex-child green">
                <h3>Sarah Akbar</h3>
                <h4>Director Green Awareness</h4>
            </div>
            </div>
        </div>
      )
}

export default Team