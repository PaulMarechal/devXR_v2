import { useMemo, useRef } from 'react';
import * as THREE from 'three'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export default function Cylinder(){ 
    return <>
        <EffectComposer>
            <Bloom mipmapBlur/>
        </EffectComposer>

        <mesh position={[0, 2, 0]}>
            <cylinderGeometry args={[1, 2, 0.05]} />
            <meshPhysicalMaterial
            color="white"
            emissive="white" 
            emissiveIntensity={2} 
            />
            <EffectComposer>
                <Bloom mipmapBlur />
            </EffectComposer>
        </mesh>
        
    </>
}
