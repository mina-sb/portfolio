import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/moon.glb'

const Moon = (props) => {
  const moonRef = useRef()
  const { scene, animations } = useGLTF(birdScene)

  return (
    <mesh ref={moonRef} {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Moon
