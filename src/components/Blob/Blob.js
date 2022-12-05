import {Canvas} from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react';

import MainHomeIcosa from './MainHomeIcosa';
import MainHomeSphere from './MainHomeSphere';

const Blob = ({size}) => {
    const [random, setRandom] = useState(2);
    
    let wpx = size + "px"
    let hpx = size + "px"

    return (
    <div id="blob" style={{width: wpx, heigth: hpx}}>
    <Canvas style={{ width: size, height: size }}>
        <Suspense fallback={null}>
          {random === 1 ? <MainHomeIcosa position={[0, 0, 0]} /> : ""}
          {random === 2 ? <MainHomeSphere position={[0, 0, 0]} /> : ""}
        </Suspense>
        {/*An ambient light that creates a soft light against the object */}
        <ambientLight intensity={0.4} />
        {/*An directional light which aims form the given position */}
        <directionalLight position={[0, 0, 3]} intensity={0.2} />
        {/*An point light, basically the same as directional. This one points from under */}
        <pointLight position={[10, -10, 10]} intensity={0.4} />
        <pointLight position={[-10, 10, 5]} intensity={0.4} />
      </Canvas> 
    </div>
      );
}
 
export default Blob;