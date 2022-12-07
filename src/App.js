import './App.css';
import Stream from './components/Stream/Stream';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import {useState } from "react"

function App() {
  
    
  return (
    <div>
      <Navbar />
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
    
  );
}

export default App;
