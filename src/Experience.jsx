import { OrbitControls, Environment, KeyboardControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from "./Model.jsx"
import { Physics } from "@react-three/rapier"
import Player from './Player.jsx'
import Ecctrl, { EcctrlAnimation, EcctrlJoystick } from 'ecctrl'
import CharacterModel from './CharacterModel'
import Map from './Map'

export default function Experience(){ 

    const characterPosition = [0, 0, 0];

    return <>
        <Perf position="bottom-left" />

        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

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
            <Ecctrl debug>
                <CharacterModel position={characterPosition} />
            </Ecctrl>
        </Physics>
    </>
}
