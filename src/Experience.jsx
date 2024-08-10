import { OrbitControls, Environment } from '@react-three/drei'
import { Physics } from "@react-three/rapier"
import Ecctrl from 'ecctrl'
import CharacterModel from './CharacterModel'
import Model from "./Model.jsx"
import Screen from './Screen_wall.jsx'
import { useEffect, useState } from 'react'
import useGame from './stores/useGame.js'
import * as THREE from 'three'

export default function Experience() { 
    const characterPosition = [0, 0, 1];
    const [showCharacterModel, setShowCharacterModel] = useState(false);
    const [controlMode, setControlMode] = useState("PointToMove");
    const blockCount = useGame((state) => state.blockCount);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCharacterModel(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseDown = () => {
            setControlMode("PointToMove");
        };

        const handleKeyDown = (event) => {
            const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD"];
            if (keys.includes(event.code)) {
                setControlMode("FixedCamera");
            }
        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[0, 6.5, 0]} intensity={2.5} />
            <ambientLight intensity={2} />
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
            />
            <Screen />
            <Physics>
                <Model count={blockCount} />
                {showCharacterModel && 
                    <Ecctrl mode={controlMode} position={[0, 3, 0]} maxVelLimit={3} wakeUpDelay={200} showSlopeRayOrigin={false} autoBalanceSpringOnY={0.1}> {/* debug */}
                        <CharacterModel castShadow position={characterPosition} />
                    </Ecctrl>
                }
            </Physics>
        </>
    );
}
