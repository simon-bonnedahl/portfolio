import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Loader from './components/Loader/Loader';

import $ from "jquery"

function App() {

  $( document ).ready(function() {
    console.log("hej")
    setTimeout(function() {
      $('#loader-section').fadeOut('slow', function() {});
    }, 2000);
    const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('visible');
         }})
    })
    
    const hiddenElements = document.querySelectorAll(".hidden");
    console.log("🚀 ~ file: App.js:24 ~ App ~ hiddenElements", hiddenElements)
    
    hiddenElements.forEach(element => {
      observer.observe(element)
    })
  });


  return (
    <div>
      <Loader />
      <Navbar />
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
    
  );
}

export default App;
