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


  const degToRad = (degrees) =>{
      var pi = Math.PI;
      return degrees * (pi/180);
  }

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      if (scale < 3) {
        setScale(scale + 0.15);
      } else {
        setScale(0.1);
      }
    }
    if (e.deltaY < 0) {
      if (scale < 3) {
        setScale(scale - 0.15);
      } else {
        setScale(0.1);
      }
    }
    console.log("AAA", e);
  };

  useEffect(() => {
    window.addEventListener("wheel", (e) => handleScroll(e));
    return () => window.removeEventListener("wheel", (e) => handleScroll(e));
  });

  const { ...meshProps } = useSpring({
    scale: scale,
    rotation: hovered
      ? [degToRad(180), 0, degToRad(45)]
      : [0, 0, 0],
    config: { duration: 400 }
  });

  const { ...materialProps } = useSpring({
    color: hovered ? "#f25f4c" : "#d95043",
    opacity: hovered ? 0.95 : 1,
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
