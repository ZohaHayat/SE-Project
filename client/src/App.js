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
import Sponsor from './pages/sponsor'
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
import DEvents from './pages/directorEvents';
import DDirectors from './pages/DViewDirectors';
import AmbassadorApplications from './pages/AmbassadorApplications';
import ViewSponsors from './pages/viewSponsors';
import RemoveMembers from './pages/removeMembers';
import ViewBeneficiaries from './pages/viewbeneficiaries';
import AddBeneficiary from './pages/addbeneficiary';
import Success from './pages/success';
import Failure from './pages/failure';
import Success2 from './pages/success2';
import Failure2 from './pages/failure2';
import MemberApp from './pages/memberApp';
import ForgotPassword from './pages/forgotpassword';
import PassCode from './pages/passcode';
import DirectorStories from './pages/directorStories'
import AddStory from './pages/AddStory'
import DirectorNews from './pages/directorNews'
import AddNews from './pages/addnews'
import AddEvent from './pages/addEvent'
import DirectorEvent from './pages/directorEvents'
import MemberAppDecision from './pages/accept_dec_member'
import Newsletter from './pages/sendNewsletter';



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => {
    setLoggedIn(true)
    sessionStorage.setItem("loggedIn",true)
  }

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.setItem("loggedIn",false)
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("loggedIn")
    if (isLoggedIn == "true")
    {
      setLoggedIn(true)
    }

    // const clearLocalStorage = (event) => {
    //   if (event.currentTarget.performance.navigation.type !== PerformanceNavigation.TYPE_RELOAD) {
    //     localStorage.clear();
    //   }
    // }
  
    // window.addEventListener("beforeunload", clearLocalStorage);

    // return () => {
    //   window.removeEventListener("beforeunload", clearLocalStorage);
    // };

  },[])
  return (
    // the rendering is done inside the class name App and the components need to be self-closed
    //the NavBar is put outside of the Routes tag so that it appears on every page
    <div className="App"> 
    <Router>
      <NavBar loggedIn={loggedIn} handleLogout={handleLogout}/> 
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
        <Route exact path = '/forgotpassword' element={<ForgotPassword/>}/>
        <Route exact path= '/passcode' element={<PassCode/>}/>
        <Route exact path = '/signup' element = {<Signup/>}/>
        <Route exact path = '/loginhome' element = {<Loginhome/>}/>
        <Route exact path = '/donate' element = {<Donate/>}/>
        <Route exact path = '/volunteer' element = {<Volunteer/>}/>
        <Route exact path = '/volunteerform' element = {<VolunteerForm/>}/>
        <Route exact path = '/changepass' element = {<Change/>}/>
        <Route exact path = '/delacc' element = {<DeleteAcc/>}/>
        
        <Route exact path = '/directorViewDirectors' element ={<DDirectors />}/>
        <Route exact path = '/AmbassadorApplications' element ={<AmbassadorApplications />}/>
        <Route exact path = '/success' element = {<Success/>}/>
        <Route exact path = '/failure' element = {<Failure/>}/>
        <Route exact path = '/success2' element = {<Success2/>}/>
        <Route exact path = '/failure2' element = {<Failure2/>}/>
        <Route exact path = '/sponsor' element = {<Sponsor/>}/>
        <Route path = 'member' element = {<MemberAdd/>}/>


        {loggedIn &&
        <Route path = '/directorPage'>
          <Route index element ={<DirectorPage />}/>
          <Route path = 'viewVolunteers' element = {<ViewVolunteers/>}/>
          <Route path = 'viewVolunteers' element = {<ViewVolunteers/>}/>
          <Route path = 'viewTeamDirector' element ={<ViewTeamDirector />}/>
          <Route path = 'donors' element = {<Donors/>}/>
          <Route path = 'changepass' element = {<Change/>}/>
          <Route path = 'delacc' element = {<DeleteAcc/>}/>
          <Route path = 'viewAmbassadors' element ={<ViewAmbassadors/>}/>
          <Route path = 'viewSponsors' element = {<ViewSponsors/>}/>
          <Route path = 'viewbeneficiaries' element = {<ViewBeneficiaries/>}/>
          <Route path = 'addbeneficiary' element = {<AddBeneficiary/>}/>
          <Route path = 'members' element = {<RemoveMembers/>}/>
          <Route path = 'directorStories' element = {<DirectorStories/>}/>
          <Route path = 'sendNewsletter' element = {<Newsletter/>}/>

          <Route exact path = 'directorEvents' element ={<DEvents />}/>
          <Route path = 'addstory' element = {<AddStory/>}/>
          <Route path = 'directorNews' element = {<DirectorNews/>}/>
          <Route path = 'addnews' element = {<AddNews/>}/>
          <Route path = 'addEvent' element = {<AddEvent/>}/>

          <Route path = 'memberapp'>
            <Route index element = {<MemberApp/>}/>
            <Route path = 'acceptdecmember/:name/:email' element = {<MemberAppDecision/>}/>
          </Route>
        </Route>}
        
      </Routes>
      <Footer loggedIn={loggedIn} handleLogout={handleLogout}/>
    </Router>

    </div>
  );
}

export default App;