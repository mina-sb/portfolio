import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import castle from '../assets/3d/castle.glb'
import { useFrame, useThree } from '@react-three/fiber'

const Castle = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const { nodes, materials } = useGLTF(castle)
  const islandRef = useRef()
  const { gl, viewport } = useThree()

  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95

  const handlePointerDown = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(true)

    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    lastX.current = clientX
  }

  const handlePointerUp = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(false)
  }

  const handlePointerMove = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX
      const delta = (clientX - lastX.current) / viewport.width
      islandRef.current.rotation.y += delta * 0.01 * Math.PI

      lastX.current = clientX
      rotationSpeed.current = delta * 0.01 * Math.PI
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true)

      islandRef.current.rotation.y += 0.005 * Math.PI
      rotationSpeed.current = 0.007
    } else if (event.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true)

      islandRef.current.rotation.y -= 0.005 * Math.PI
      rotationSpeed.current = -0.007
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setIsRotating(false)
    }
  }

  useEffect(() => {
    const canvas = gl.domElement
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointerup', handlePointerUp)
      canvas.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0
      }

      islandRef.current.rotation.y += rotationSpeed.current
    } else {
      const rotation = islandRef.current.rotation.y
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

      switch (true) {
        case normalizedRotation >= 0 && normalizedRotation < 2.09:
          setCurrentStage(1)
          break
        case normalizedRotation >= 2.09 && normalizedRotation < 4.18:
          setCurrentStage(2)
          break
        case normalizedRotation >= 4.18 && normalizedRotation <= 6.28:
          setCurrentStage(3)
          break
        default:
          setCurrentStage(null)
      }
    }
  })

  return (
    <group {...props} dispose={null} ref={islandRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.38}>
        <group position={[-5.828, -4.463, -9.816]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials['Material.031']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['Material.030']}
          />
        </group>
      </group>
    </group>
  )
}

export default Castle
