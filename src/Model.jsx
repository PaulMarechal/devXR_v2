import * as THREE from 'three';
import { RigidBody } from "@react-three/rapier";
import { useGLTF, Environment, Sky, Html, Text3D } from "@react-three/drei";
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import React, { useRef, useMemo } from 'react';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import { useControls } from 'leva';
import HolographicMaterial from "./HolographicMaterial.jsx";

import Text_3D from './Text_3D.jsx'

export default function MainModel({ position = [0, 0, 0] }) {
    const sceneModel = useGLTF("./assets/models/meeting_space.glb");
    const screen_model = useGLTF("./assets/models/tv_display.glb");
    const { nodes, materials } = useGLTF('./assets/models/earth_planet.glb');
    
    const optionsA = useMemo(() => ({
        x: { value: 0, min: -20, max: Math.PI * 2, step: 0.01 },
        y: { value: 0, min: -20, max: Math.PI * 2, step: 0.01 },
        z: { value: 0, min: -20, max: Math.PI * 2, step: 0.01 },
    }), []);

    const optionsB = useMemo(() => ({
        x: { value: 0, min: -20, max: 20, step: 0.01 },
        y: { value: 0, min: -20, max: 20, step: 0.01 },
        z: { value: 0, min: -20, max: 20, step: 0.01 },
    }), []);

    // const optionsC = useMemo(() => ({
    //     x: { value: 0, min: -30, max: 30, step: 0.01 },
    //     y: { value: 0, min: -30, max: 30, step: 0.01 },
    //     z: { value: 0, min: -30, max: 30, step: 0.01 },
    // }), []);

    const pA = useControls('Plane Pos', optionsA);
    const pB = useControls('Plane Rot', optionsB);
    // const pC = useControls('Cylinder Pos', optionsC);

    const holographicControls = useControls({
        fresnelAmount: { value: 0.0, min: 0.0, max: 1.0},
        fresnelOpacity: { value: 0.78,min: 0.0, max: 1.0},
        scanlineSize: { value: 4.6, min: 1.0, max: 15},
        hologramBrightness: { value: 1.3, min: 0.0, max: 2},
        signalSpeed: { value: 1.09, min: 0.0, max: 2},
        hologramOpacity: { value: 0.55, min: 0.0, max: 1.0},
        hologramColor: { value: "#51a4de"},
        enableBlinking: false,
        blinkFresnelOnly: true,
        enableAdditive: true,
        side: { options: ["FrontSide", "BackSide", "DoubleSide"] },
    });

    sceneModel.scene.children.forEach((mesh) => {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
    });

    const earth = useRef();

    useFrame((state, delta) => {
        earth.current.rotation.y += 0.001;
    });

    return (
        <group position={position} >
            <RigidBody
                type="fixed"
                colliders="trimesh"
                rotation={[0, 3.14, 0]}
                position={[0, 1, 0]}
                restitution={0}
                friction={1}
                ccd
            >
                <primitive receiveShadow object={sceneModel.scene} scale={0.8} />
            </RigidBody>

            <group ref={earth} dispose={null} scale={0.013} position={[0, 3.2, 0]}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <group rotation={[0.274, 0.081, 0.281]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials.Oceans}
                            rotation={[-0.286, 0, -0.292]}
                        >
                            <HolographicMaterial {...holographicControls} />
                        </mesh>
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials.Land_Masses}
                    >
                        <HolographicMaterial {...holographicControls} />
                    </mesh>
                </group>
            </group>

            <Text_3D/>
            <mesh position={[pA.x, pA.y, pA.z]} rotation={[pB.x, pB.y, pB.z]}  scale={[6, 0.05, 1.4]}>
                <planeGeometry />
                <meshBasicMaterial color="#fff" side={THREE.DoubleSide}/>
            </mesh>

            <mesh position={[0, 1.76, 0]}>
                <cylinderGeometry args={[1, 2, 0.05]} />
                <meshPhysicalMaterial
                    color="white"              
                    emissive="purple"      
                    glow="#FF90f0"     
                    envMapIntensity={1} 
                    roughness={0}
                />
            </mesh>

            <EffectComposer>
                <Bloom mipmapBlur />
            </EffectComposer>
        </group>
    );
}
