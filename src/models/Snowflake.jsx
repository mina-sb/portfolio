import React from 'react'
import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import snow from '../assets/3d/falling_snow_loop.glb'

const Snowflake = (props) => {
  const ghostRef = useRef()
  const { scene, animations } = useGLTF(snow)
  const { actions } = useAnimations(animations, ghostRef)
  useEffect(() => {
    if (actions['Animation']) {
      actions['Animation'].play()
    }
  }, [])

  return (
    <mesh ref={ghostRef} position={[0, -1, 0]} {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Snowflake
