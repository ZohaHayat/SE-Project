import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/about'
import Stories from './pages/stories'
import Team from './pages/team'
import News from './pages/news'

function App() {
  return (
    // the rendering is done inside the class name App and the components need to be self-closed
    //the NavBar is put outside of the Routes tag so that it appears on every page
    <div className="App"> 
    <Router>
      <NavBar/> 
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route exact path = '/events' element = {<Events/>}/>
        <Route exact path = '/about' element = {<About/>}/>
        <Route exact path = '/stories' element = {<Stories/>}/>
        <Route exact path = '/team' element = {<Team/>}/>
        <Route exact path = '/news' element = {<News/>}/>
        {/* the / simply means that homepage is with a / */}
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;