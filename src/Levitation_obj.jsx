import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cone, Text3D, Sphere, Torus, Tetrahedron, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

export default function Levitation({ position = [0, 0, 0], showCubeGeo = false, numTexts = 2 }) {
    const [showLevitation, setShowLevitation] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const fontUrl = "./assets/font/3D/SF Pro Display_Medium.json";
    const textRefs = useRef([]);
    const boxRef = useRef();
    const coneRef = useRef();
    const sphereRef = useRef();
    const torusRef = useRef();
    const tetrahedronRef = useRef();
    const dodecahedronRef = useRef();
    const clockRef = useRef(new THREE.Clock());

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLevitation(true);

            let start = null;
            const duration = 3000;

            const fadeIn = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                setOpacity(Math.min(progress / duration, 1));

                if (progress < duration) {
                    requestAnimationFrame(fadeIn);
                }
            };

            requestAnimationFrame(fadeIn);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const getRandomText = () => (Math.random() < 0.5 ? '0' : '1');

    const offsets = useMemo(
        () =>
            Array.from({ length: numTexts + 6 }).map(() => ({
                xOffset: Math.random() * Math.PI * 2,
                yOffset: Math.random() * Math.PI * 2,
                zOffset: Math.random() * Math.PI * 2,
                rotationSpeed: Math.random() * 0.5 + 0.1,
            })),
        [numTexts]
    );

    const updateObjectPositionAndRotation = (objectRef, elapsedTime, delta, offset) => {
        if (objectRef.current) {
            const y = Math.sin(elapsedTime + offset.yOffset) * 1.2;
            const x = Math.sin(elapsedTime + offset.xOffset) * 0.5;
            const z = Math.sin(elapsedTime + offset.zOffset) * 1.2;

            objectRef.current.position.y = y;
            objectRef.current.position.x = x;
            objectRef.current.position.z = z;

            objectRef.current.rotation.y += delta * offset.rotationSpeed;
            objectRef.current.rotation.z += delta * offset.rotationSpeed;
        }
    };

    useFrame((state, delta) => {
        const elapsedTime = clockRef.current.getElapsedTime();

        textRefs.current.forEach((ref, index) => {
            updateObjectPositionAndRotation(ref, elapsedTime, delta, offsets[index]);
        });

        updateObjectPositionAndRotation(boxRef, elapsedTime, delta, offsets[numTexts]);
        updateObjectPositionAndRotation(coneRef, elapsedTime, delta, offsets[numTexts + 1]);
        updateObjectPositionAndRotation(sphereRef, elapsedTime, delta, offsets[numTexts + 2]);
        updateObjectPositionAndRotation(torusRef, elapsedTime, delta, offsets[numTexts + 3]);
        updateObjectPositionAndRotation(tetrahedronRef, elapsedTime, delta, offsets[numTexts + 4]);
        updateObjectPositionAndRotation(dodecahedronRef, elapsedTime, delta, offsets[numTexts + 5]);
    });

    useEffect(() => {
        textRefs.current = textRefs.current.slice(0, numTexts);
    }, [numTexts]);

    return (
        <group position={position}>
            {showLevitation && (
                <>
                    {Array.from({ length: numTexts }).map((_, index) => (
                        <Text3D
                            ref={(el) => (textRefs.current[index] = el)}
                            key={index}
                            font={fontUrl}
                            scale={0.4}
                        >
                            {getRandomText()}
                            <meshNormalMaterial
                                wireframe={true}
                                transparent={true}
                                opacity={opacity}
                            />
                        </Text3D>
                    ))}
                    {showCubeGeo && (
                        <>
                            <Box ref={boxRef} scale="0.5">
                                <meshStandardMaterial
                                    color="hotpink"
                                    transparent={true}
                                    opacity={opacity}
                                />
                            </Box>
                            <Cone ref={coneRef} scale="0.4">
                                <meshNormalMaterial
                                    transparent={true}
                                    opacity={opacity}
                                />
                            </Cone>
                            <Sphere ref={sphereRef} scale="0.4">
                                <meshDepthMaterial
                                    color={"#00E5E8"}
                                    transparent={true}
                                    opacity={opacity}
                                />
                            </Sphere>
                            <Torus ref={torusRef} scale="0.3">
                                <meshBasicMaterial
                                    vertexColors={THREE.VertexColors}
                                    transparent={true}
                                    opacity={opacity}
                                />
                            </Torus>
                            <Tetrahedron ref={tetrahedronRef} scale="0.4">
                                <meshMatcapMaterial
                                    color={"#5438DC"}
                                    transparent={true}
                                    opacity={opacity}
                                />
                            </Tetrahedron>
                            <Dodecahedron ref={dodecahedronRef} scale="0.4">
                                <meshToonMaterial
                                    color={"#F0F600"}
                                    transparent={true}
                                    opacity={opacity}
                                />
                            </Dodecahedron>
                        </>
                    )}
                </>
            )}
        </group>
    );
}
