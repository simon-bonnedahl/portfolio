
import Spline from '@splinetool/react-spline';

import './Projects.css'

const Projects = () => {
    return ( 
        <section id="projects">
            <h1 className='hidden'>Projects</h1>
            <div id="projects-container">
                <div className='project hidden'>
                    <h2>CryptoWords iOS </h2>
                    <div className='spline-scene-phone'>
                        <Spline scene="https://prod.spline.design/VZOL12IjAC4dRCKT/scene.splinecode" />
                    </div>
                    <button className='button-5'>View</button>
                </div>
                 <div className='project hidden'>
                    <h2>Title 2</h2>
                    <div className='spline-scene-phone'>
                        <Spline scene="https://prod.spline.design/dcW1IC7Hj6K-d0Cj/scene.splinecode" />
                    </div>
                    <button className='button-5'>View</button>
                </div>
            </div>
        </section>
    );
}
 
export default Projects;