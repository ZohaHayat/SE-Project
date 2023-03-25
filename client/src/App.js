import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

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


import  ViewVolunteers from './pages/viewVolunteers'
import DirectorPage from './pages/directorPage';
import ViewTeamDirector from './pages/viewTeamDirector';

function App() {
  return (
    // the rendering is done inside the class name App and the components need to be self-closed
    //the NavBar is put outside of the Routes tag so that it appears on every page
    <div className="App"> 
    <Router>
      <NavBar/> 
      {/* <NavBarlogin/> */}
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route exact path = '/events' element = {<Events/>}/>
        <Route exact path = '/about' element = {<About/>}/>
        <Route exact path = '/stories' element = {<Stories/>}/>
        <Route exact path = '/team' element = {<Team/>}/>
        <Route exact path = '/news' element = {<News/>}/>
        <Route exact path = '/contact' element = {<Contact/>}/>
<<<<<<< HEAD
        <Route exact path = '/careers' element = {<Careers/>}/>
=======
        <Route exact path = '/viewVolunteers' element = {<ViewVolunteers/>}/>
        <Route exact path = '/directorPage' element ={<DirectorPage />}/>
        <Route exact path = '/viewTeamDirector' element ={<ViewTeamDirector />}/>
        <Route exact path = '/login' element = {<Login/>}/>
        <Route exact path = '/signup' element = {<Signup/>}/>
        <Route exact path = '/loginhome' element = {<Loginhome/>}/>
        <Route exact path = '/donate' element = {<Donate/>}/>
        <Route exact path = '/volunteer' element = {<Volunteer/>}/>
        <Route exact path = '/volunteerform' element = {<VolunteerForm/>}/>
>>>>>>> 8bf9820fbd3551d91c609bc9542b65a85f58292c
        {/* the / simply means that homepage is with a / */}
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;