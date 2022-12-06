import Stream from "../Stream/Stream";
import Blob from "../Blob/Blob";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from 'react-icons/fa';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {ReactComponent as GithubLogo }from "../Icon/svg/github.svg";
import {ReactComponent as LinkedInLogo }from "../Icon/svg/linkedin.svg";
import {ReactComponent as CodePenLogo }from "../Icon/svg/codepen.svg";

import './Home.css'
const Home = () => {
    return (
    <div id="home">
        <div id ="left">
            <div id="homeText">
                <h1>Hey! <span className="wave" role="img" aria-labelledby="wave">
                    👋🏼
                    </span>
                </h1>
                <h1>I'm <span id="name">Simon</span></h1>
                <h1>
                <span className="brand-text">
                    <Typewriter
                        options={{
                        strings: ['Student', 'Software Developer', 'Full-Stack Web Developer'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed:25,
                        delay:50
                        }}/>
                </span>
                </h1>
                
         
                
                <div id="socials">
                    
                        <a id="github" href="https://github.com/simon-bonnedahl">
                            <GithubLogo className="social-logo"/>
                        </a>
                        <a id="linkedin" href="https://www.linkedin.com/in/simon-bonnedahl-b97abb218/">
                            <LinkedInLogo className="social-logo"></LinkedInLogo>
                        </a>
                        <a id="codepen" href="https://codepen.io/CheQita">
                            <CodePenLogo className="social-logo"></CodePenLogo>
                        </a>
                    
          
                </div>
                
                <button dest="about" className="button-5">
                    Learn More
                    
                </button>
            </div>
        </div>
        <div id ="right">
            <Blob size={600}></Blob>
        </div>
        
        
    </div>  );
}
 
export default Home;