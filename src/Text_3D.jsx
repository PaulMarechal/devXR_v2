import * as THREE from 'three'
import { Text3D, Wireframe, RoundedBox } from '@react-three/drei'
import { useMemo } from 'react'
import { useControls } from 'leva';

export default function Text_3D({ 
    position = [0, 0, 0], 
    scale=[1], 
    rotation = [0, 0, 0], 
    text = "Default Text", 
    materialType = "Wireframe", 
    showRoundedBox = false, 
    size = [1, 1, 1], 
    textPosition=[0, 0.07, 0.32], 
    textRotation=[-0.4, 0, 0] }){ 

    // const optionsC = useMemo(() => ({
    //     x: { value: 0, min: -30, max: 30, step: 0.01 },
    //     y: { value: 0, min: -30, max: 30, step: 0.01 },
    //     z: { value: 0, min: -30, max: 30, step: 0.01 },
    // }), []);

    // const optionsE = useMemo(() => ({
    //     x: { value: 0, min: -30, max: 30, step: 0.01 },
    //     y: { value: 0, min: -30, max: 30, step: 0.01 },
    //     z: { value: 0, min: -30, max: 30, step: 0.01 },
    // }), []);

    // const pC = useControls('Text position', optionsC)
    // const pE = useControls('Text rotation', optionsE)
    

    return <>
        <mesh 
            position={position}
            rotation={rotation}
        >
            <Text3D
                font="./fonts/Roboto_Regular.json"
                scale={scale} 
                position={textPosition}
                rotation={textRotation}
            >
                {text}
                {materialType === "Wireframe" && (
                    <Wireframe 
                        thickness={0.2}
                        fill={"#FFF"}
                        fillMix={0.5}
                        simplify={true}
                        stroke={"#000"}
                        squeeze={true}
                        colorBackfaces={false}
                    />
                )}
                {materialType === "meshNormalMaterial" && (
                    <meshNormalMaterial />
                )}
                {materialType === "meshStandardMaterial" && (
                    <meshStandardMaterial />
                )}
            </Text3D>

            {showRoundedBox && (
                <RoundedBox
                    position={[0.8, 0.12, .2]}
                    rotation={[-0.4, 0, 0]}
                    args={size} // Width, height, depth. Default is [1, 1, 1]
                    radius={0.09} // Radius of the rounded corners. Default is 0.05
                    smoothness={16} // The number of curve segments. Default is 4
                    bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                    creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                >
                    <meshPhongMaterial color="#f3f3f3" />
                </RoundedBox>
            )}
        </mesh>
    </>
}
