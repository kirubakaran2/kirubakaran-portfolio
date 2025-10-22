import React from 'react';
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import {gsap} from 'gsap';

const CameraPosition = () => {
  const { camera } = useThree();  
  useEffect(() => {
    gsap.to(camera.position, {
      x: 0,
      y: 10,
      z: 25,
      duration: 3,
      ease: 'power2.out',
    });
  }, [camera]);
  return null;
  
}

export default CameraPosition
