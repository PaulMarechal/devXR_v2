import React, { useRef, useMemo, PresentationControls, Float } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useControls } from 'leva';

export default function Computer(props) {

    // const group = useRef()
    // const { nodes, materials } = useGLTF('./assets/models/mac_computer.gltf')

    // const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const computer = useGLTF('./assets/models/computer_sci_fi_2.glb')


    const optionsZ = useMemo(() => ({
        x: { value: 0.28, min: -10, max: 10, step: 0.01 },
        y: { value: 2.15, min: -10, max: 10, step: 0.01 },
        z: { value: 1.6, min: -10, max: 10, step: 0.01 },
    }), []);

    const optionsE = useMemo(() => ({
        x: { value: 0, min: -10, max: 10, step: 0.01 },
        y: { value: 0.35, min: -10, max: 10, step: 0.01 },
        z: { value: 0, min: -10, max: 10, step: 0.01 },
    }), []);

    const pZ = useControls('Computer Pos', optionsZ);
    const pE = useControls('Computer Rot', optionsE);

  return (
    <>
        <rectAreaLight
            width={ 2.5 }
            height={ 1.65 }
            intensity={ 65 }
            color={ '#ff6900' }
            rotation={ [ - 0.1, Math.PI, 0 ] }
            position={ [ 0, 0.55, - 1.15 ] }
        />      
        <primitive
            object={ computer.scene }
            position={[6.53, 1.64, -7.0]} 
            rotation={[0, -0.9, 0]} 
            scale={1.4}
        >
            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 0.6 }
                // position={ [ 0, 1.56, - 1.4 ] }
                // rotation-x={ - 0.256 }
                position={ [ 0.28, 2.15, 1.55 ] }
                rotation={ [ 0, 0.35, 0 ] }
                occlude
                
            >
                {/* To addapt the occusion add physics to robot model */}
                <iframe frameBorder={0} src="https://devxr.fr/test" />
            </Html>
        </primitive>        
    </>
  )
}

useGLTF.preload('./assets/models/mac_computer.gltf')