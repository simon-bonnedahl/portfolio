import {Canvas} from '@react-three/fiber'
import { Suspense, useState} from 'react';
import { OrbitControls } from "@react-three/drei";
import MainHomeIcosa from './MainHomeIcosa';
import MainHomeSphere from './MainHomeSphere';
import Plate from './Plate';

const Blob = ({size}) => {
    const objects = [<MainHomeIcosa position={[0, 0.8, 0]}/>, <MainHomeSphere position={[0, 0.8, 0]} />]
    const [number, setNumber] = useState(0)

    
    let wpx = size + "px"
    let hpx = size + "px"
    


    return (
    <div id="blob" style={{width: wpx, heigth: hpx}} onClick={() => setNumber((number + 1) % objects.length)}>
    <Canvas style={{ width: size, height: size }}>
        <Suspense fallback={null}>
         {objects[number]}
        <Plate position={[0, -3, -1]}/>
    
        </Suspense>
        <directionalLight position={[0, 0, 3]} intensity={0.2} />
        <pointLight position={[10, -10, 10]} intensity={0.4} />
        <pointLight position={[-10, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas> 
      
    </div>
      );
    
}
 
export default Blob;