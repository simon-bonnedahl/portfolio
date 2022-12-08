
import Spline from '@splinetool/react-spline';

import './Projects.css'

const Projects = () => {
    return ( 
        <div id="projects">
            <h1>Projects</h1>
            <div id="projects-container">
                <div className='project'>
                    <h1>Title</h1>
                    <div className='ssp'>
                        <Spline scene="https://prod.spline.design/UxgG7s7IbukgFYv4/scene.splinecode" />
                    </div>
                </div>
                 <div className='project'>
                    <h1>Title</h1>
                    <div className='ssp'>
                        <Spline scene="https://prod.spline.design/UxgG7s7IbukgFYv4/scene.splinecode" />
                    </div>
                </div>
                 <div className='project'>
                    <h1>Title</h1>
                    <div className='ssp'>
                        <Spline scene="https://prod.spline.design/UxgG7s7IbukgFYv4/scene.splinecode" />
                    </div>
                </div> 
            </div>
        </div>
    );
}
 
export default Projects;