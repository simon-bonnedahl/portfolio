import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

function Plate(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [scale, setScale] = useState(1);



  const { ...meshProps } = useSpring({
    scale: [0.9, 0.9, 0.9],
    config: { duration: 100 }
  });

  const { ...materialProps } = useSpring({
    color:  "#d95043",
    opacity: hovered ? 0.7 : 1,
    config: { duration: 100 }
  });

  /* Rotate */
  useFrame((state, delta) => {
    mesh.current.rotation.y += hovered ?  0.005 : 0.001;
  });

  return (
    <animated.mesh
      {...props}
      {...meshProps}
      visible
      ref={mesh}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      rotation ={[-0.4, 0, 0]}
    >
      <cylinderGeometry args={[3, 3  , 0.1, 10]} attach="geometry" />
      <animated.meshStandardMaterial
        attach="material"
        transparent
        {...materialProps}
        roughness={0.3}
        metalness={0.4}
      />
    </animated.mesh>
  );
}

export default Plate;
