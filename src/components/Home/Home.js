import Stream from "../Stream/Stream";
import Typewriter from 'typewriter-effect';
import './Home.css'
const Home = () => {
    return (
    <div id="home">
        <Stream></Stream>
        <div id="homeText">
            <h1>Hello,</h1>
            <h1>I'm Simon, a</h1>
            <h1>
            <span className="brand-text">
            <Typewriter
                options={{
                strings: ['Student', 'Software Developer', 'Problem Solver', 'Full-Stack Web Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed:25,
                delay:50
                }}/>
            </span>
            </h1>
        </div>
    </div>  );
}
 
export default Home;