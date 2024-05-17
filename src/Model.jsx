import * as THREE from 'three'
import { RigidBody } from "@react-three/rapier"; 
import { useGLTF, Environment, Sky } from "@react-three/drei";

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'



export default function MainModel({ position = [ 0, 0, 0]}){
    const sceneModel = useGLTF("./meeting_space.glb")
    sceneModel.scene.children.forEach((mesh) => {
        mesh.castShadow = true
        mesh.receiveShadow = true
    })

    return <group position={position}>
        {/* Main scene GLB */}

            <RigidBody type="fixed" colliders="hull" position={[0, 0, 0]} rotation={[0, 1.7, 0]} friction={0}>
                <primitive object={sceneModel.scene} scale={1}/>
            </RigidBody>

    </group>
}