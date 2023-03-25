import React from 'react'
import Axios from "axios"
import Logo from '../assets/team1.jpeg'
import Logo1 from '../assets/team2.jpeg'
import Logo2 from '../assets/team3.jpeg'
import Logo3 from '../assets/team4.jpeg'
import Logo4 from '../assets/team5.jpeg'
import Logo5 from '../assets/team6.jpeg'
import Logo6 from '../assets/team7.jpeg'
import "../styles/viewVolunteers.css"

const ViewVolunteers=()=> {

    return (
        <div className = "Volunteers">
            <h1 className = "Volunteerheading">Volunteers</h1>

            <div class="flex-container">
            <div class="flex-child magenta">
                <img src={Logo6}/>
            </div>
            <div class="flex-child-green">
                <h3>Volunteer 1</h3>
                <h4>Volunteered in plantation drive</h4>
            </div>
            </div>

            <div class="flex-container">
            <div class="flex-child magenta">
                <img src={Logo}/>
            </div>
            <div class="flex-child-green">
                <h3>Volunteer 2</h3>
                <h4>Director Social Media</h4>
            </div>
            </div>

            <div class="flex-container">
            <div class="flex-child magenta">
                <img src={Logo1}/>
            </div>
            <div class="flex-child-green">
                <h3>Volunteer 3</h3>
                <h4>Director Logistics</h4>
            </div>
            </div>

            <div class="flex-container">
            <div class="flex-child magenta">
                <img src={Logo2}/>
            </div>
            <div class="flex-child-green">
                <h3>Volunteer 4</h3>
                <h4>Director Donations</h4>
            </div>
            </div>

            <div class="flex-container">
            <div class="flex-child magenta">
                <img src={Logo3}/>
            </div>
            <div class="flex-child-green">
                <h3>Volunteer 5</h3>
                <h4>Director Publications</h4>
            </div>
            </div>

            <div class="flex-container">
            <div class="flex-child magenta">
                <img src={Logo4}/>
            </div>
            <div class="flex-child-green">
                <h3>Volunteer 6</h3>
                <h4>Director Research</h4>
            </div>
            </div>

            <div class="flex-container">
            <div class="flex-child magenta">
                <img src={Logo5}/>
            </div>
            <div class="flex-child-green">
                <h3>Volunteer 7</h3>
                <h4>Director Green Awareness</h4>
            </div>
            </div>
        </div>
      )
}

export default ViewVolunteers