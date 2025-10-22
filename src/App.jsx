import React, { useRef } from 'react'
import './index.css';
import Projects from './Sections/Projects';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import About from './Sections/About';
import Expertise from './Sections/Expertise';
import Navbar from './components/Navbar';
import CameraPosition from './components/Cameraposition';
import Contact from './Sections/Contact';
import Robot from './components/robot';
import Hero from './Sections/Hero';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'; 
import {useGSAP}from '@gsap/react';
import CustomCursor from './components/CustomCursor';
const App = () => {
  const RobotRef = useRef(null);

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(RobotRef.current, {
    y: "55vw",
    x: "-30vw",
    rotateZ: 15,
    rotateY: -15, 
    duration: 3.5,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "60% 40%",
      scrub: 1,

    },
  });
  
}, []);

  return (
   <>
      <Navbar/>
      <CustomCursor/>
   <figure ref={RobotRef} className="absolute top-[11vh] z-20" style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}>
     <Canvas shadows camera={{ position: [10,20, 30], fov: 50,pointerEvents: 'none' }}>
       <CameraPosition/>
        <Robot />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        <OrbitControls enableZoom={false}/>
     </Canvas>
   </figure>
   <Hero/>
   <About/>
   <Projects/>
   <Expertise/>
   <Contact/>

    </>
  )
}

export default App
