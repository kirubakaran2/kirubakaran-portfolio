import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars() {
  const points = useRef();

  // Generate random star positions
  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  // Animate stars slowly moving
  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.0005;
      points.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starPositions.length / 3}
          array={starPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={1.2}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function SpaceBackground() {
  return (
    <Canvas
      className="absolute top-0 left-0 w-full h-full z-0"
      camera={{ position: [0, 0, 1] }}
    >
      <color attach="background" args={["#000000"]} />
      <Stars />
    </Canvas>
  );
}
