import './App.css';
import React from 'react';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from './pages/Home'
import Events from './pages/Events'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

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
        {/* the / simply means that homepage is with a / */}
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;