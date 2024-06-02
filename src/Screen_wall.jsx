import * as THREE from 'three';
import { useGLTF, Html } from "@react-three/drei";
import React, { useMemo } from 'react';
import { useControls } from 'leva';

export default function Screen({ position = [0, 0, 0] }) {
    const screen_model = useGLTF("./tv_display.glb");
    const test ="./test.jpg";

    const Texture = ({ texture, position, rotation }) => {
    // position={[pA.x, pA.y, pA.z]}
    return (
            <mesh position={position} rotation={rotation}>
                <planeGeometry
                    attach="geometry" 
                    args={[1.81, 3.19]} 
                    height={200}
                    width={200}
                />
                <meshBasicMaterial attach="material" map={texture} />
            </mesh>
        );
    };

    const Image = ({ url, position, rotation }) => {
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
    return <Texture texture={texture} position={position} rotation={rotation} />;
    };

    const optionsA = useMemo(() => ({
        x: { value: 0, min: -10, max: Math.PI * 3, step: 0.01 },
        y: { value: 0, min: -10, max: Math.PI * 3, step: 0.01 },
        z: { value: 0, min: -10, max: Math.PI * 3, step: 0.01 },
    }), []);

    const optionsB = useMemo(() => ({
        x: { value: 0, min: -10, max: 10, step: 0.01 },
        y: { value: 0, min: -10, max: 10, step: 0.01 },
        z: { value: 0, min: -10, max: 10, step: 0.01 },
    }), []);

    const pA = useControls('Screen POs', optionsA);
    const pB = useControls('Screen Rot', optionsB);


    screen_model.scene.children.forEach((mesh) => {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
    });

    return (
        <>
            <group>
                <primitive 
                    object={screen_model.scene.clone()} 
                    scale={1.8} 
                    position={[6.07, 3.5, 2.5]}              
                    onClick={(e) => alert("you clicked", e.object.name)} 
                />
                <Image url={test} position={[5.99, 3.47, -1.63]} rotation={[0, -1.57, 0]}/>
            </group>
            <group>
                <primitive 
                    object={screen_model.scene.clone()} 
                    scale={1.8} 
                    position={[6.07, 3.5, -1.5]} 
                    onClick={(e) => alert("you clicked", e.object.name)} 
                />
            </group>
            <group>
                <primitive 
                    object={screen_model.scene.clone()} 
                    scale={1.8} 
                    position={[-6.05, 3.5, -1.5]} 
                    rotation={[0, 3.15, 0]}  
                    onClick={(e) => alert("you clicked", e.object.name)} 
                />
            </group>
            <group>
                <primitive 
                    object={screen_model.scene.clone()} 
                    scale={1.8} 
                    rotation={[0, 3.15, 0]}
                    position={[-5.9, 3.5, 2.5]}         
                    onClick={(e) => alert("you clicked", e.object.name)} 
                >   
                </primitive>
            </group>
        </>
    );
}
