import * as THREE from 'three';
import { RigidBody } from "@react-three/rapier";
import { useGLTF, useFBX, Environment, Sky, Html, Text3D, Sparkles, Clouds, Cloud, Gltf, MeshPortalMaterial } from "@react-three/drei";
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import React, { useRef, useMemo, useState } from 'react';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { useSpring, animated } from '@react-spring/three';

import { useControls } from 'leva';
import HolographicMaterial from "./HolographicMaterial.jsx";

import Text_3D from './Text_3D.jsx'
import Portal from "./Portal.jsx";

export default function MainModel({ position = [0, 0, 0] }) {
    const sceneModel = useGLTF("./assets/models/meeting_space_4.glb");
    const guerinet = useGLTF("./assets/models/Guerinet.glb");
    const screen_model = useGLTF("./assets/models/tv_display.glb");
    const { nodes, materials } = useGLTF('./assets/models/earth_planet.glb');
    
    const [visible, setVisible] = useState(false);

    const planche = useRef();

    const { opacity, scale } = useSpring({
        opacity: visible ? 0.5 : 0,
        scale: visible ? [4, 1.5, 3.2] : [0.1, 0.1, 1],
        config: { duration: 1000 }
    });
    
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 20000);
    };
    
    
    const optionsA = useMemo(() => ({
        x: { value:7.15, min: -30, max: 30, step: 0.01 },
        y: { value:2.42, min: -30, max: 30, step: 0.01 },
        z: { value:11.4 , min: -30, max: 30, step: 0.01 },
    }), []);

    const optionsB = useMemo(() => ({
        x: { value: -1.58, min: -30, max: 30, step: 0.01 },
        y: { value: 0, min: -30, max: 30, step: 0.01 },
        z: { value: -0.05, min: -30, max: 30, step: 0.01 },
    }), []);

    const optionsC = useMemo(() => ({
        x: { value: 0, min: -30, max: 30, step: 0.01 },
        y: { value: 0, min: -30, max: 30, step: 0.01 },
        z: { value: 0, min: -30, max: 30, step: 0.01 },
    }), []);

    const pA = useControls('Planche Pos', optionsA);
    const pB = useControls('Planche Rot', optionsB);
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

        const time = state.clock.getElapsedTime()

        const y = Math.sin(time) -1

        planche.current.setNextKinematicTranslation({ x: 0, y, z:0})
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

                {/* Ground in bonus room */}
                <mesh position={[-18.08, 0.05, -2.6]} rotation={[1.55, 0, 0.35]}  scale={[12, 10, 10]}>
                    <planeGeometry />
                    <meshBasicMaterial color="white" transparent={true} opacity={0.5}/>
                </mesh>
            </RigidBody>

            {/* Planche */}
            <RigidBody
                ref={ planche }
                type="kinematicPosition"
                position={[0, 1, 0]}

            >

                <animated.mesh
                    // position={[-8.2, 0.75, -10.2]}
                    // rotation={[-1.58, 0, -0.05]}
                    position={[pA.x, pA.y, pA.z]} 
                    rotation={[pB.x, pB.y, pB.z]}
                    scale={[4, 1.5, 3.2]}
                    // scale={scale}
                >
                    <planeGeometry />
                    <animated.meshBasicMaterial
                        side={THREE.DoubleSide}
                        // transparent={true}
                        // opacity={opacity}
                        opacity={1}
                        wireframe={true}
                    />
                </animated.mesh>
            </RigidBody>

            {/* Sparkles */}
            <Sparkles position={[19.34, 4.65, 3.28]} wireframe={true} count={150} scale={10} size={6} speed={0.4} />

            {/* <Clouds material={THREE.MeshBasicMaterial}>
                <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="white" />
                <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
            </Clouds> */}

            {/* Portal */}
            <Portal id="2023" name="Catacombes.xyz" bg="#ffffff">
                <ambientLight intensity={Math.PI / 2} />
                <Gltf src="./assets/models/Guerinet.glb" scale={1} position={[0.1, -1.8, -3]} rotation={[0, 4.63, 0]} />
                {/* <primitive receiveShadow object={guerinet.scene} scale={0.8} /> */}
            </Portal>

            {/* <Gltf src="./assets/models/Guerinet.glb" position={[0, 0, 0]} scale={0.01}/> */}


            {/* <mesh position={[pA.x, pA.y, pA.z]} rotation={[pB.x, pB.y, pB.z]}>
                <planeGeometry />
                <MeshPortalMaterial>
                    <mesh>
                        <Gltf src="./assets/models/Guerinet.glb" position={[0, -2, -3]} scale={0.01}/>
                    </mesh>
                </MeshPortalMaterial>
            </mesh> */}

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
            {/* Under text */}
            {/* <mesh position={[pA.x, pA.y, pA.z]} rotation={[pB.x, pB.y, pB.z]}  scale={[6, 0.05, 1.4]}>
                <planeGeometry />
                <meshBasicMaterial color="#fff" side={THREE.DoubleSide}/>
            </mesh> */}

            <mesh scale={[6, 1, 3]}>
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
            {/* position={[pA.x, pA.y, pA.z]} rotation={[pB.x, pB.y, pB.z]} */}
            
            {/* Box to click */}
            <mesh position={[0.23, 1.32, 10]} scale={0.5} onClick={handleClick}>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>

            {/* <EffectComposer>
                <Bloom mipmapBlur />
            </EffectComposer> */}
        </group>
    );
}
