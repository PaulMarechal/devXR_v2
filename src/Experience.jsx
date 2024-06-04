import { OrbitControls, Environment, KeyboardControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from "./Model.jsx"
import { Physics } from "@react-three/rapier"
import Player from './Player.jsx'
import Ecctrl, { EcctrlAnimation, EcctrlJoystick } from 'ecctrl'
import CharacterModel from './CharacterModel'
import Map from './Map'
import Screen from './Screen_wall.jsx'
// import { useControls } from 'leva';
import { useMemo, useRef } from 'react';
import * as THREE from 'three'

export default function Experience(){ 

    const characterPosition = [0, 0, 0];

    const directionalLight = useRef()
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    // const optionsB = useMemo(() => ({
    //     x: { value: 0, min: -10, max: 10, step: 0.01 },
    //     y: { value: 0, min: -10, max: 10, step: 0.01 },
    //     z: { value: 0, min: -10, max: 10, step: 0.01 },
    // }), []);

    // const pB = useControls('Light position', optionsB);


    return <>
        <Perf position="bottom-left" />

        <OrbitControls makeDefault />
        <directionalLight ref={ directionalLight } castShadow position={ [ 0, 6.5, 0 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 5 } />

        <Environment
            receiveShadow
            background
            files={[
                './environment_maps/first/px.png',
                './environment_maps/first/nx.png',
                './environment_maps/first/py.png',
                './environment_maps/first/ny.png',
                './environment_maps/first/pz.png',
                './environment_maps/first/nz.png',
            ]}
        >
        </Environment>
        
        {/* debug={ true } */}
        <Physics >
            <Model />
            <Screen/>

            <Ecctrl debug>
                <CharacterModel castShadow position={characterPosition} />
            </Ecctrl>
        </Physics>
    </>
}
