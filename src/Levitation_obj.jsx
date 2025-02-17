import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cone, Text3D, TorusKnot, Tetrahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export default function Levitation({ position = [0, 0, 0], showCubeGeo = false, numTexts = 2 }) {
    const [showLevitation, setShowLevitation] = useState(false);
    const [opacity, setOpacity] = useState(0); // Opacité initiale à 0
    const fontUrl = "./assets/font/3D/SF Pro Display_Medium.json";
    const textRefs = useRef([]);
    const boxRef = useRef();
    const coneRef = useRef();
    const torusKnotRef = useRef();
    const tetrahedronRef = useRef();
    const icosahedronRef = useRef();
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

    const getRandomText = () => Math.random() < 0.5 ? '0' : '1';

    const offsets = useMemo(() => (
        Array.from({ length: numTexts + 6 }).map(() => ({
            xOffset: Math.random() * Math.PI * 2,
            yOffset: Math.random() * Math.PI * 2,
            zOffset: Math.random() * Math.PI * 2,
            rotationSpeed: Math.random() * 0.5 + 0.1,
        }))
    ), [numTexts]);

    const updateObjectPositionAndRotation = (objectRef, elapsedTime, delta, offset) => {
        if (objectRef) {
            const y = Math.sin(elapsedTime + offset.yOffset) * 1.2; 
            const x = Math.sin(elapsedTime + offset.xOffset) * 0.5; 
            const z = Math.sin(elapsedTime + offset.zOffset) * 1.2; 
            
            objectRef.position.y = y;
            objectRef.position.x = x;
            objectRef.position.z = z;

            objectRef.rotation.y += delta * offset.rotationSpeed; 
            objectRef.rotation.z += delta * offset.rotationSpeed; 
        }
    };

    useFrame((state, delta) => {
        const elapsedTime = clockRef.current.getElapsedTime();
        
        textRefs.current.forEach((ref, index) => {
            updateObjectPositionAndRotation(ref, elapsedTime, delta, offsets[index]);
        });
        
        updateObjectPositionAndRotation(boxRef.current, elapsedTime, delta, offsets[numTexts + 1]);
        updateObjectPositionAndRotation(coneRef.current, elapsedTime, delta, offsets[numTexts + 2]);
        updateObjectPositionAndRotation(torusKnotRef.current, elapsedTime, delta, offsets[numTexts + 3]);
        updateObjectPositionAndRotation(tetrahedronRef.current, elapsedTime, delta, offsets[numTexts + 4]);
        updateObjectPositionAndRotation(icosahedronRef.current, elapsedTime, delta, offsets[numTexts + 5]);
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
                            ref={el => textRefs.current[index] = el}
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
                                <meshStandardMaterial 
                                    color={"#610F7F"}
                                    transparent={true} 
                                    opacity={opacity} 
                                />
                            </Cone>
                            <TorusKnot ref={torusKnotRef} scale="0.2">
                                <meshStandardMaterial 
                                color={"#0582CA"}
                                    transparent={true} 
                                    opacity={opacity} 
                                />
                            </TorusKnot>
                            <Tetrahedron ref={tetrahedronRef} scale="0.4">
                                <meshStandardMaterial 
                                    color={"#CC2936"}
                                    transparent={true} 
                                    opacity={opacity} 
                                />
                            </Tetrahedron>
                            <Icosahedron ref={icosahedronRef} scale="0.4">
                                <meshStandardMaterial 
                                    color={"#EDF67D"}
                                    transparent={true} 
                                    opacity={opacity} 
                                />
                            </Icosahedron>
                        </>
                    )}
                </>
            )}
        </group>
    );
}