import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

function MainHomeSphere(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);


  const { ...meshProps } = useSpring({
    scale: hovered ? [1.1, 1.1, 1.1] : [0.9, 0.9, 0.9],
    config: { duration: 300 }
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
      <sphereGeometry args={[1.8, 200, 200]} attach="geometry" />
      <MeshDistortMaterial
        attach="material"
        distort={0.5} // Strength, 0 disables the effect (default=1)
        speed={0.8} // Speed (default=1)
        roughness={0.5}
        metalness={0.3}
        color={hovered ? "#fa8301" : "#d95043"}
        opacity={hovered ? 0.95 : 1}
      />

    </animated.mesh>
  );
}

export default MainHomeSphere;
