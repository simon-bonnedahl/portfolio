import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Loader from "./components/Loader/Loader";
import Toolkit from "./components/Toolkit/Toolkit";

import $ from "jquery";

function App() {
  $(document).ready(function () {
    setTimeout(function () {
      $("#loader-section").fadeOut("slow", function () {
        $("#home").addClass("visible");
      });
    }, 2000);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Loader />
      <Navbar />
      <Home></Home>
      <About></About>
      <Toolkit></Toolkit>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
