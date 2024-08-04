import { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cone, Text3D } from '@react-three/drei';
import * as THREE from 'three';

export default function Levitation({ position = [0, 0, 0], showCubeGeo = false, showText = false, numTexts = 2 }) {
    const fontUrl = "./assets/font/3D/SF Pro Display_Medium.json";
    const textRefs = useRef([]);
    const boxRef = useRef();
    const coneRef = useRef();
    const clockRef = useRef(new THREE.Clock());

    const getRandomText = () => Math.random() < 0.5 ? '0' : '1';

    const offsets = useMemo(() => (
        Array.from({ length: numTexts + 2 }).map(() => ({

            xOffset: Math.random() * Math.PI * 2,
            yOffset: Math.random() * Math.PI * 2,
            zOffset: Math.random() * Math.PI * 2,

            rotationSpeed: Math.random() * 0.5 + 0.1,
        }))
    ), [numTexts]);

    const updateObjectPositionAndRotation = (objectRef, elapsedTime, delta, offset) => {
        if (objectRef) {
            const y = Math.sin(elapsedTime + offset.yOffset) * 1; 
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
        
        updateObjectPositionAndRotation(boxRef.current, elapsedTime, delta, offsets[numTexts]);
        updateObjectPositionAndRotation(coneRef.current, elapsedTime, delta, offsets[numTexts + 1]);
    });

    useEffect(() => {
        textRefs.current = textRefs.current.slice(0, numTexts);
    }, [numTexts]);

    return (
        <group position={position}>
            
                {Array.from({ length: numTexts }).map((_, index) => (
                    <Text3D 
                        ref={el => textRefs.current[index] = el}
                        key={index}
                        font={fontUrl}
                        scale={0.4}
                    >
                        {getRandomText()}
                        <meshNormalMaterial wireframe={true}/>
                    </Text3D>
                ))}
                

            {showCubeGeo && (
                <>
                    <Box ref={boxRef} scale="0.5">
                        <meshStandardMaterial color="hotpink" />
                    </Box>
                    <Cone ref={coneRef} scale="0.4" />
                </>
            )}
        </group>
    );
}
