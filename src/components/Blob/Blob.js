import {Canvas} from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react';

import MainHomeIcosa from './MainHomeIcosa';
import MainHomeSphere from './MainHomeSphere';

const Blob = ({size}) => {
    const objects = [<MainHomeIcosa position={[0, 0, 0]}/>, <MainHomeSphere position={[0, 0, 0]} />]
    const [number, setNumber] = useState(0)
    const [currentObject, setCurrentObject] = useState(objects[number]);
    
    
    let wpx = size + "px"
    let hpx = size + "px"
    


    return (
    <div id="blob" style={{width: wpx, heigth: hpx}} onClick={() => setNumber((number + 1) % objects.length)}>
    <Canvas style={{ width: size, height: size }}>
        <Suspense fallback={null}>
         {objects[number]}
        </Suspense>
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 0, 3]} intensity={0.2} />
        <pointLight position={[10, -10, 10]} intensity={0.4} />
        <pointLight position={[-10, 10, 5]} intensity={1} />
      </Canvas> 
    </div>
      );
    
}
 
export default Blob;