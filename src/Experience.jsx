import { OrbitControls, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from "./Model.jsx"
import { Physics } from "@react-three/rapier"

export default function Experience(){ 

    return <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />

            <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
            <ambientLight intensity={ 1.5 } />



            <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>

        <Environment
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
            <Physics debug={ false }>
                <Model />
            </Physics>
    </>
}