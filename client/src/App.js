import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import { useState, useEffect } from "react"

import { ChakraProvider } from '@chakra-ui/react'

import NavBar from "./components/NavBar"
import NavBarlogin from "./components/NavBarlogin"
import Footer from "./components/Footer"
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/about'
import Stories from './pages/stories'
import Team from './pages/team'
import News from './pages/news'
import Contact from './pages/contact'
import Careers from './pages/Careers'
import Login from './pages/login'
import Signup from './pages/signup'
import Loginhome from './pages/loginhome'
import Donate from './pages/donate'
import Volunteer from './pages/volunteer'
import VolunteerForm from './pages/volunteerform'


import Donors from './pages/donors'
import MemberAdd from './pages/member-add'
import  ViewVolunteers from './pages/viewVolunteers'
import DirectorPage from './pages/directorPage';
import ViewTeamDirector from './pages/viewTeamDirector';
import ViewAmbassadors from './pages/viewAmbassadors';
import Change from './pages/changepassword';
import DeleteAcc from './pages/deleteacc';
import ViewSponsors from './pages/viewSponsors';
import RemoveMembers from './pages/removeMembers';
import ViewBeneficiaries from './pages/viewbeneficiaries';
import AddBeneficiary from './pages/addbeneficiary';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => {
    setLoggedIn(true)
    localStorage.setItem("loggedIn",true)
  }

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn",false)
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn")
    if (isLoggedIn == "true")
    {
      setLoggedIn(true)
    }
  },[])

  return (
    // the rendering is done inside the class name App and the components need to be self-closed
    //the NavBar is put outside of the Routes tag so that it appears on every page
    <div className="App"> 
    <Router>
      <NavBar loggedIn={loggedIn} handleLogout={handleLogout}/> 
      {/* <NavBarlogin/> */}
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route exact path = '/events' element = {<Events/>}/>
        <Route exact path = '/about' element = {<About/>}/>
        <Route exact path = '/stories' element = {<Stories/>}/>
        <Route exact path = '/team' element = {<Team/>}/>
        <Route exact path = '/news' element = {<News/>}/>
        <Route exact path = '/contact' element = {<Contact/>}/>
        <Route exact path = '/careers' element = {<Careers/>}/>
        <Route exact path = '/login' element = {<Login handleLogin={handleLogin}/>}/>
        <Route exact path = '/signup' element = {<Signup/>}/>
        <Route exact path = '/loginhome' element = {<Loginhome/>}/>
        <Route exact path = '/donate' element = {<Donate/>}/>
        <Route exact path = '/volunteer' element = {<Volunteer/>}/>
        <Route exact path = '/volunteerform' element = {<VolunteerForm/>}/>

        {loggedIn &&
        <Route exact path = '/directorPage' element ={<DirectorPage />}>
          <Route exact path = '/viewVolunteers' element = {<ViewVolunteers/>}/>
          <Route exact path = '/viewTeamDirector' element ={<ViewTeamDirector />}/>
          <Route exact path = '/member' element = {<MemberAdd/>}/>
          <Route exact path = '/donors' element = {<Donors/>}/>
          <Route exact path = '/changepass' element = {<Change/>}/>
          <Route exact path = '/delacc' element = {<DeleteAcc/>}/>
          <Route exact path = '/viewAmbassadors' element ={<ViewAmbassadors/>}/>
          <Route exact path = '/viewSponsors' element = {<ViewSponsors/>}/>
          <Route exact path = '/viewbeneficiaries' element = {<ViewBeneficiaries/>}/>
          <Route exact path = '/addbeneficiary' element = {<AddBeneficiary/>}/>
          <Route exact path = '/members' element = {<RemoveMembers/>}/>
        </Route>}
      </Routes>
      <Footer loggedIn={loggedIn} handleLogout={handleLogout}/>
    </Router>

    </div>
  );
}

export default App;