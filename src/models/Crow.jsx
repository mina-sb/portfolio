import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import crow from '../assets/3d/crow.glb'

const Bird = (screenSize) => {
  const crowRef = useRef()
  const { scene, animations } = useGLTF(crow)
  const { actions } = useAnimations(animations, crowRef)

  useEffect(() => {
    actions['GltfAnimation 0'].play()
  }, [])

  useFrame(({ clock, camera }) => {
    crowRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 1

    if (crowRef.current.position.x > camera.position.x + 1) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      crowRef.current.rotation.y = 0.2
    } else if (crowRef.current.position.x < camera.position.x - 1) {
      // Change direction to forward and reset the bird's rotation
      crowRef.current.rotation.y = -0.2
    }

    // Update the X and Z positions based on the direction
    if (crowRef.current.rotation.y === -0.2) {
      // Moving forward
      crowRef.current.position.x += 0.1
      crowRef.current.position.z -= 0.02
    } else {
      // Moving backward
      crowRef.current.position.x -= 0.1
      crowRef.current.position.z += 0.02
    }
  })

  return (
    <mesh
      ref={crowRef}
      position={[-2, 0, 2]}
      scale={screenSize === 'md' ? [0.01, 0.01, 0.01] : [0.007, 0.007, 0.007]}
      rotation={[0.7, -0.2, 0]}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
