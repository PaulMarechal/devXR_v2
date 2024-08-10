import { OrbitControls, Environment, KeyboardControls, useHelper, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from "./Model.jsx"
import { Physics } from "@react-three/rapier"
import Player from './Player.jsx'
import Ecctrl, { EcctrlAnimation, EcctrlJoystick } from 'ecctrl'
import CharacterModel from './CharacterModel'
import Map from './Map'
import Screen from './Screen_wall.jsx'
// import { useControls } from 'leva';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three'
import useGame from './stores/useGame.js'
import Computer from './Computer.jsx';

export default function Experience(){ 
    const characterPosition = [0, 0, 1];
    // const characterRef = useRef();
    const [showCharacterModel, setShowCharacterModel] = useState(false);
    const directionalLight = useRef()
    const blockCount = useGame((state) =>  state.blockCount )

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCharacterModel(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* <Perf position="bottom-left" /> */}
            <OrbitControls makeDefault />
            <directionalLight ref={ directionalLight } castShadow position={ [ 0, 6.5, 0 ] } intensity={ 2.5 } />
            <ambientLight intensity={ 2 } />
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
            <Screen/>
            <Physics >
                <Model count={blockCount}/>
                {showCharacterModel && 
                    <Ecctrl position={[0,3,0]} characterInitDir={0.5} maxVelLimit={3} wakeUpDelay={200} showSlopeRayOrigin={false} autoBalanceSpringOnY={0.1}> {/* debug */}
                        <CharacterModel castShadow position={characterPosition}/>
                    </Ecctrl>
                }
            </Physics>
        </>
    )
}