import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/crow_fly.glb";

const Bird = (screenSize) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["GltfAnimation 0"].play();
  }, []);

  useFrame(({clock, camera}) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 1;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 1) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = 0.2;
    } else if (birdRef.current.position.x < camera.position.x - 1) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = -0.2;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === -0.2) {
      // Moving forward
      birdRef.current.position.x += 0.1;
      birdRef.current.position.z -= 0.02;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.1;
      birdRef.current.position.z += 0.02;
    }
  });

  return (
    <mesh
      ref={birdRef}
      position={[-2, 0, 2]}
      scale={screenSize === "md" ? [0.01, 0.01, 0.01] : [0.007, 0.007, 0.007]}
      rotation={[0.7, -0.2, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
