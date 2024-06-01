import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";
import { useMemo } from 'react';
import { useControls } from 'leva';

export default function Screen({ position = [0, 0, 0] }) {
    const screen_model = useGLTF("./tv_display.glb");

    const optionsA = useMemo(() => ({
        x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
        y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
        z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    }), []);

    const optionsB = useMemo(() => ({
        x: { value: 0, min: -10, max: 10, step: 0.01 },
        y: { value: 0, min: -10, max: 10, step: 0.01 },
        z: { value: 0, min: -10, max: 10, step: 0.01 },
    }), []);

    const pA = useControls('Screen Rotation', optionsA);
    const pB = useControls('Screen Position', optionsB);

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
                    // position={[6.07, 3.5, -1.5]} 
                    rotation={[0, 3.15, 0]}
                    position={[-5.9, 3.5, 2.5]}       
                    onClick={(e) => alert("you clicked", e.object.name)} 
                />
            </group>
        </>
    );
}
