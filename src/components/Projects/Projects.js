import React, { Suspense } from "react";
import { useRef } from "react";
import "./Projects.css";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Projects = () => {
  const phone = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectById("41df4a9b-65d8-48f3-9159-c0e10fc9c595");
    phone.current = obj;
  }
  function onMouseDown(e) {
    console.log("onMouseDown");
    if (e.target.id === "41df4a9b-65d8-48f3-9159-c0e10fc9c595") {
      console.log("I have been clicked!");
    }
  }
  return (
    <section id="projects">
      <h1 className="hidden">Projects</h1>
      <div id="projects-container">
        <div className="project hidden">
          <h2>CryptoWords </h2>
          <div className="spline-scene-phone">
            <Spline scene="https://prod.spline.design/VZOL12IjAC4dRCKT/scene.splinecode" />
          </div>
          <a
            className="button-5"
            href="https://github.com/simon-bonnedahl/cryptowords-ios"
          >
            View
          </a>
        </div>
        <div className="project hidden">
          <h2>Food Delivery App </h2>
          <div className="spline-scene-phone">
            <Spline scene="https://prod.spline.design/lW-DWl-ureIZJEQK/scene.splinecode" />
          </div>

          <a
            className="button-5"
            href="https://github.com/simon-bonnedahl/food-delivery-app"
          >
            View
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
