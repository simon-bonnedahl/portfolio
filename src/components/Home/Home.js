import Blob from "../Blob/Blob";
import $ from "jquery";
import Typewriter from "typewriter-effect";
import { ReactComponent as GithubLogo } from "../Icon/svg/github.svg";
import { ReactComponent as LinkedInLogo } from "../Icon/svg/linkedin.svg";
import { ReactComponent as CodePenLogo } from "../Icon/svg/codepen.svg";

import "./Home.css";
const Home = () => {
  $(document).on("click", ".learn-more", function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      500
    );
    return false;
  });

  return (
    <section id="home">
      <div id="left">
        <div id="homeText">
          <h1>
            Hey!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏼
            </span>
          </h1>
          <h1>
            I'm <span id="name">Simon</span>
          </h1>
          <h1>
            <span className="brand-text">
              <Typewriter
                options={{
                  strings: [
                    "Student",
                    "Full-Stack Developer",
                    "Mobile Developer",
                    "Tech Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 25,
                  delay: 50,
                }}
              />
            </span>
          </h1>

          <div id="socials">
            <a id="github" href="https://github.com/simon-bonnedahl">
              <GithubLogo className="social-logo" />
            </a>
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/simon-bonnedahl-b97abb218/"
            >
              <LinkedInLogo className="social-logo"></LinkedInLogo>
            </a>
            <a id="codepen" href="https://codepen.io/CheQita">
              <CodePenLogo className="social-logo"></CodePenLogo>
            </a>
          </div>

          <button className="button-5 learn-more">Learn More</button>
        </div>
      </div>
      <div id="right">
        <Blob size={600}></Blob>
      </div>
    </section>
  );
};

export default Home;
