import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

function MainHomeIcosa(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [scale, setScale] = useState(1);



  const { ...meshProps } = useSpring({
    scale: hovered ? [1.1, 1.1, 1.1] : [0.9, 0.9, 0.9],
    config: { duration: 100 }
  });

  const { ...materialProps } = useSpring({
    color: hovered ? "#fa8301" : "#d95043",
    opacity: hovered ? 0.95 : 1,
    config: { duration: 100 }
  });

  /* Rotate */
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.004;
    mesh.current.rotation.y += 0.006;
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
    >
      <icosahedronGeometry args={[2, 0, 2]} attach="geometry" />
      <animated.meshStandardMaterial
        attach="material"
        transparent
        {...materialProps}
        roughness={1}
        metalness={0.1}
      />
      <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />
    </animated.mesh>
  );
}

export default MainHomeIcosa;
