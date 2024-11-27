import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from '../assets/3d/snowman.glb'

const Snowman = ({ currentAnimation, ...props }) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(scene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop())
    if (actions[currentAnimation]) {
      actions[currentAnimation].play()
    }
  }, [actions, currentAnimation])

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[1.01, 1.01, 1.01]}
      position={[1, -2.5, 0]}
      rotation={[0, -0.1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="c155be59aa0f4cd69cf16af94f8b1d55fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cube"
                  position={[0, 34.475, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cube001"
                  position={[0, 254.991, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cube002"
                  position={[0, 370.29, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group name="Cylinder" position={[0, 367.936, 89.222]} scale={100} />
                <group
                  name="NurbsPath002"
                  position={[0, 34.475, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cylinder002"
                  position={[-29.012, 456.574, 10.228]}
                  rotation={[-1.49, -0.315, -0.063]}
                  scale={100}
                />
                <group
                  name="metarig"
                  position={[0, 11.997, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={190.646}
                >
                  <group name="Object_11">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.snowman}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.snowman}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.snowman}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.nose}
                      skeleton={nodes.Object_20.skeleton}
                    />
                    <skinnedMesh
                      name="Object_22"
                      geometry={nodes.Object_22.geometry}
                      material={materials.heand}
                      skeleton={nodes.Object_22.skeleton}
                    />
                    <skinnedMesh
                      name="Object_24"
                      geometry={nodes.Object_24.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_24.skeleton}
                    />
                    <group
                      name="Object_13"
                      position={[0, 34.475, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_15"
                      position={[0, 254.991, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_17"
                      position={[0, 370.29, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group name="Object_19" position={[0, 367.936, 89.222]} scale={100} />
                    <group
                      name="Object_21"
                      position={[0, 34.475, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_23"
                      position={[-29.012, 456.574, 10.228]}
                      rotation={[-1.49, -0.315, -0.063]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Snowman
