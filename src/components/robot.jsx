import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'

export function Robot(props) {
  const { nodes, materials } = useGLTF('/model/cute_robot_mascot.glb')
  const robotRef = useRef()

  useEffect(() => {
    // Floating animation (up and down)
    gsap.to(robotRef.current.position, {
      y: "+=0.5",         // moves slightly upward
      duration: 2,         // duration of one cycle
      repeat: -1,          // infinite loop
      yoyo: true,          // comes back down
      ease: "sine.inOut",  // smooth natural motion
    })

    // Optional subtle forward-backward movement
    gsap.to(robotRef.current.position, {
      z: "+=0.3",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  return (
    <group ref={robotRef} {...props} dispose={null}>
      <group scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface29_VRayMtl6_0.geometry}
          material={materials.VRayMtl6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface12_VRayMtl6_0.geometry}
          material={materials.VRayMtl6}
          position={[-13.301, 5.322, -66.909]}
          rotation={[0.281, 0.133, -0.039]}
          scale={[0.983, 0.983, 0.998]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface27_VRayMtl6_0.geometry}
          material={materials.VRayMtl6}
          position={[31.753, 59.033, -155.164]}
          rotation={[0.548, 0.466, 0.153]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface24_VRayMtl6_0.geometry}
          material={materials.VRayMtl6}
          position={[73.367, 319.131, 315.23]}
          rotation={[-1.655, 0.362, 0.249]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface23_VRayMtl6_0.geometry}
          material={materials.VRayMtl6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface30_VRayMtl6_0.geometry}
          material={materials.VRayMtl6}
          position={[-25.182, 3.471, -12.793]}
          rotation={[0.076, 0.253, -0.082]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/cute_robot_mascot.glb')
export default Robot
