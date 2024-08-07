import React from 'react';
import { useGLTF, Clone } from '@react-three/drei';

function SmallDuck({ position, rotation, onClick }) {

    const small_duck = useGLTF("./assets/models/small_duck.gltf");

    return (
        <>
            <Clone
                object={small_duck.scene}
                scale={0.2}
                position={position}
                rotation={rotation}
                onClick={onClick}
            />
        </>
    );
}

export default SmallDuck;
