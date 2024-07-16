import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Sparkles, useKeyboardControls } from '@react-three/drei'
import { useControls } from 'leva';
import { RigidBody } from "@react-three/rapier";
import $ from "jquery";

export default function CharacterModel(props) {
  const { nodes, materials } = useGLTF('./drone/scene.gltf')
  const meshRef = useRef()
  const clockRef = useRef({ elapsedTime: 0 })
  const  [subscribeKeys, getKeys] = useKeyboardControls()

  Object.values(materials).forEach((material) => {
    material.receiveShadow = true;
    material.castShadow = true;
  });

  // const optionsB = useMemo(() => ({
  //   x: { value: 0, min: -10, max: 10, step: 0.01 },
  //   y: { value: 0, min: -10, max: 10, step: 0.01 },
  //   z: { value: 0, min: -10, max: 10, step: 0.01 },
  // }), []);

  // const pB = useControls('scale sparkles', optionsB);

  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      (state) => state.jump, 
      
      /*
      (value) => {
          if (value) {
              jump()
          }
      }
          */
    )
    const unsubscribeAny = subscribeKeys(
      () => {
        setTimeout(() => {
          $(".welcome_modal").css("opacity", "0")
          $(".interface").css("pointer-events", "none")

        }, 2500);
        setTimeout(() => {
          $(".welcome_modal").css("display", "none")
        }, 3000);
        setTimeout(() => {
          $(".controls").css("opacity", "0")
        }, 3350);
        setTimeout(() => {
          $(".controls").css("display", "none")
        }, 3850);

      }
    )
  })

  useFrame((state, delta) => {
    if (meshRef.current) {
      clockRef.current.elapsedTime += delta
      const y = Math.sin(clockRef.current.elapsedTime) * 0.05
      meshRef.current.position.y = y
    }
  })

  return (
    <group {...props} 
      dispose={null} 
      position={[0, 0.5, 0]}         
      castShadow
    >
      <mesh
        ref={meshRef}
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.0007}
        position={[0, 0, 0]}
      />
      {/* <Sparkles 
        position={[0, 0, -.3]}
        count={6}
        speed={0.5}
        size={4}
        scale={0.2}
        noise={[0.8, -10, 5.77]}
        opacity={0.5}
      /> */}
    </group>
  )
}

useGLTF.preload('./drone/scene.gltf')
