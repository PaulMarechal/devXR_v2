import * as THREE from 'three'
import { Text3D } from '@react-three/drei'
import { useMemo } from 'react'
import { useControls } from 'leva';

export default function Text_3D({ position = [0, 0, 0] }){ 

    const optionsC = useMemo(() => ({
        x: { value: 0, min: -30, max: 30, step: 0.01 },
        y: { value: 0, min: -30, max: 30, step: 0.01 },
        z: { value: 0, min: -30, max: 30, step: 0.01 },
    }), []);

    const optionsE = useMemo(() => ({
        x: { value: 0, min: -30, max: 30, step: 0.01 },
        y: { value: 0, min: -30, max: 30, step: 0.01 },
        z: { value: 0, min: -30, max: 30, step: 0.01 },
    }), []);

    const pC = useControls('Text position', optionsC)
    const pE = useControls('Text rotation', optionsE)

    return <>
        <mesh 
            // position={[pC.x, pC.y, pC.z]}
            position={[-2.3, 4.1, -7.3]}
            rotation={[pE.x, pE.y, pE.z]}

        >
            <Text3D
                font="./fonts/Roboto_Regular.json"
            >
                DevXR.fr
                {/* <meshStandardMaterial /> */}
                {/* <meshNormalMaterial /> */}
            </Text3D>
        </mesh>
    </>
}
