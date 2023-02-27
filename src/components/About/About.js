import "./About.css";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import $ from "jquery";
const About = () => {
  const avatar = useRef();

  function onLoad(spline) {
    avatar.current = spline.findObjectByName("people");
  }
  function rotateRight() {
    avatar.current.rotation.y += 0.01;
  }

  function rotateLeft() {
    avatar.current.rotation.y -= 0.01;
  }

  window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
      rotateLeft();
    } else {
      rotateRight();
    }
    this.oldScroll = this.scrollY;
  };

  return (
    <section id="about">
      <div className="custom-shape-divider-top-1670383877">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h1 className="hidden">About</h1>
      <div className="hidden" id="aboutText">
        <p>
          Hello and welcome to my portfolio! I'm Simon, a 23 year old Student
          from Sweden.
        </p>
        <p>
          I'm currently studying Master of Science in Information Technology at
          Linköping University.
        </p>
        <p>
          I have a big passion for software development, and I love using my
          skills to create Web and Mobile applications.
        </p>
        <p>
          I have been coding for about 10 years and I have experience in a wide
          range of areas. I'm currently working on a variety of projects, mostly
          Full-Stack Web.
        </p>
        <p>
          Thank you for taking the time to visit my portfolio, and please feel
          free to contact me.
        </p>
      </div>
      <div className="hidden" id="avatar">
        <Spline
          scene="https://prod.spline.design/lA7FHLBZ5EcJZep8/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </section>
  );
};

export default About;
