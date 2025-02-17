import { useRapier, RigidBody } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { useState, useEffect, useRef } from "react"
import * as THREE from 'three'

export default function Player(){

    const body = useRef()
    const  [subscribeKeys, getKeys] = useKeyboardControls()
    const { rapier, world } = useRapier()
    const rapierWorld = world

    console.log(world);
    
    const jump = () => { 
        const origin = body.current.translation()
        origin.y -= 0.31
        const direction = { x: 0, y: 0, z: 0 }
        const ray = new rapier.Ray( origin, direction )
        const hit = rapierWorld.castRay(ray)
        
        // if(hit.toi < 0.15){
        //     body.current.applyImpulse({ x:0, y:0.5, z:0 })
        // }
    }

    useEffect(() => {
        const unsubscribeJump = subscribeKeys(
            (state) => state.jump, 
            
            (value) => {
                if (value) {
                    jump()
                }
            }
        )

        subcribeKeys(() => {
            console.log('any key');
        })

        return () => {
            unsubscribeJump()
        }
    }, [])

    useFrame((state, delta) => {

        const { forward, backward, leftward, rightward } = getKeys()
        
        const impulse = { x: 0.0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }

        const impulseStrength = .05 * delta
        const torqueStrength = .05 * delta

        if(forward)
        {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }
    
        if(rightward)
        {
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }
    
        if(backward)
        {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }
        
        if(leftward)
        {
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }
    

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)

        /**
         * Camera
         */
        // const bodyPosition = body.current.translation()
        // const cameraPosition = new THREE.Vector3()

        // cameraPosition.copy(bodyPosition)
        // cameraPosition.z += 0.5
        // cameraPosition.y += 0.3

        // const cameraTarget = new THREE.Vector3()
        // cameraTarget.copy(bodyPosition)
        // cameraTarget.y += 0.1

        // state.camera.position.copy(cameraPosition)
        // state.camera.lookAt(cameraTarget)
    })

    return <>
        <RigidBody 
            ref={ body } 
            canSleep={ false } 
            colliders="ball" 
            position={ [ 1, 0, 1 ] }
            friction={2}
            linearDamping={0.5}
            angularDamping={0.5}
            restitution={0.2}

        >
            <mesh castShadow>
                <icosahedronGeometry args={ [ 0.2, 1 ] } />
                <meshStandardMaterial flatShading color="mediumpurple" />
            </mesh>
        </RigidBody>
    </>
}