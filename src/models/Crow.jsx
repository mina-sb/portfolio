import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import crow from '../assets/3d/crow.glb'

const Bird = ({ screenSize }) => {
  const crowRef = useRef()
  const { scene, animations } = useGLTF(crow)
  const { actions } = useAnimations(animations, crowRef)
  const directionRef = useRef(1)
  const targetRotationY = useRef(-0.7)

  useEffect(() => {
    actions['GltfAnimation 0']?.play()
  }, [actions])

  useFrame(({ clock, camera }) => {
    const bird = crowRef.current
    if (!bird) return

    const t = clock.getElapsedTime()

    bird.position.y = Math.sin(t * 2) * 0.2 + 1
    bird.position.z += Math.sin(t * 1.5) * 0.003

    const distanceX = bird.position.x - camera.position.x

    if (directionRef.current === 1 && distanceX > 2) {
      directionRef.current = -1
      targetRotationY.current = 0.7
    } else if (directionRef.current === -1 && distanceX < -2) {
      directionRef.current = 1
      targetRotationY.current = -0.7
    }

    bird.rotation.y = THREE.MathUtils.lerp(bird.rotation.y, targetRotationY.current, 0.05)

    const speed = 0.025
    bird.position.x += directionRef.current * speed
  })

  return (
    <mesh
      ref={crowRef}
      position={[-2, 1, 0]}
      scale={screenSize === 'md' ? [0.01, 0.01, 0.01] : [0.007, 0.007, 0.007]}
      rotation={[0.7, -0.7, 0]}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
