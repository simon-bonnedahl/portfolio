import './App.css';
import Stream from './components/Stream/Stream';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

import {useState } from "react"

function App() {
  
    
  return (
    <div>
      <Navbar />
      <Home></Home>
      <About></About>
    </div>
    
  );
}

export default App;
