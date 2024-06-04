import * as THREE from 'three';
import { RigidBody } from "@react-three/rapier";
import { useGLTF, Environment, Sky, Html } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { useMemo } from 'react';
import { useControls } from 'leva';
import HolographicMaterial from "./HolographicMaterial.jsx"

export default function MainModel({ position = [0, 0, 0] }) {
    const sceneModel = useGLTF("./meeting_space.glb");
    const screen_model = useGLTF("./tv_display.glb");
    const earth_model = useGLTF("./earth_planet.glb");

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

    const pA = useControls('Hologram pos', optionsA);
    const pB = useControls('hologram Rot', optionsB);

    const holographicControls = useControls({
        fresnelAmount: { value: 0.45, min: 0.0, max: 1.0, label: "Fresnel Amount" },
        fresnelOpacity: {
          value: 1.0,
          min: 0.0,
          max: 1.0,
          label: "Fresnel Opacity",
        },
        scanlineSize: { value: 8.0, min: 1.0, max: 15, label: "Scanline size" },
        hologramBrightness: { value: 1.2, min: 0.0, max: 2, label: "Brightness" },
        signalSpeed: { value: 0.45, min: 0.0, max: 2, label: "Signal Speed" },
        hologramColor: { value: "#51a4de", label: "Hologram Color" },
        enableBlinking: true,
        enabled: true,
        Model: { options: ["VADER", "BB8", "WALKER"] },
    });

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
                <primitive receiveShadow object={sceneModel.scene} scale={0.8} />
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
                {/* position={[0, 3.2, 0]} */}
                <mesh rotation={[pB.x, pB.y, pB.z]}>
                    <sphereGeometry position={[pA.x, pA.y, pA.z]}/>
                    <primitive position={[0, 3.25, 0]} object={earth_model.scene} scale={0.013} />
                    <HolographicMaterial />
                </mesh>
        </group>
    );
}
