import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import galaxyScene from "../assets/3d/galaxy.glb";

const NightSky = ({ isRotating }) => {
  const sky = useGLTF(galaxyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });
  return (
    <mesh
      ref={skyRef}
      scale={[0.1, 0.1, 0.1]}
      position={[0.05, 0, 0.05]}
      rotation={[0, 4, 0]}
    >
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default NightSky;
