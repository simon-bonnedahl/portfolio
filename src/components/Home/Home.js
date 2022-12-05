import Stream from "../Stream/Stream";
import Blob from "../Blob/Blob";
import Typewriter from 'typewriter-effect';
import './Home.css'
const Home = () => {
    return (
    <div id="home">
        <Blob></Blob>
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
            <button className="button-5">
                View Work
                <a href="#about"></a>
            </button>
        </div>
        
    </div>  );
}
 
export default Home;