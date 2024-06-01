import * as THREE from 'three';
import { RigidBody } from "@react-three/rapier";
import { useGLTF, Environment, Sky, Html } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { useMemo } from 'react';
import { useControls } from 'leva';

export default function MainModel({ position = [0, 0, 0] }) {
    const sceneModel = useGLTF("./meeting_space.glb");
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

    sceneModel.scene.children.forEach((mesh) => {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
    });

    return (
        <group position={position}>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                rotation={[0, 3.14, 0]}
                position={[0, 1, 0]}
                restitution={0}
                friction={1}
                ccd
            >
                <primitive object={sceneModel.scene} scale={0.8} />
            </RigidBody>
                {/* <Html 
                    transform 
                    wrapperClass="htmlScreen"
                    position={[-10, -2, 0]} 
                    scale={0.1}
                    // rotation={[0,(Math.PI / 180), 0]}     
                    rotation={[pA.x, pA.y, pA.z]}
                    position={[pB.x, pB.y, pB.z]}

                >
                    <iframe src="https:devxr.fr/test" />
                </Html>  */}
        </group>
    );
}
