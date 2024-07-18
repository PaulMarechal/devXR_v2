import React, { useRef, useMemo, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import * as THREE from 'three';
import { RigidBody } from "@react-three/rapier";
import { useGLTF, useFBX, Environment, Sky, Html, Text3D, Sparkles, Clouds, Cloud, Gltf, MeshPortalMaterial } from "@react-three/drei";
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useSpring, animated } from '@react-spring/three';
import Confetti from './components/Confetti';
import { useControls } from 'leva';
import HolographicMaterial from "./HolographicMaterial.jsx";
import Text_3D from './Text_3D.jsx';
import Portal from "./Portal.jsx";

const Shape = ({ id, position, onClick }) => {
    const mesh = useRef();

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });

    const handleClick = () => {
        if (mesh.current) {
            const position = mesh.current.position;
            onClick(id, position);
        }
    };

    return (
        <animated.mesh ref={mesh} position={position} onClick={handleClick}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
        </animated.mesh>
    );
};

export default function MainModel({ position = [0, 0, 0] }) {
    const sceneModel = useGLTF("./assets/models/meeting_space_4.glb");
    const alarm_button = useGLTF("./assets/models/alarm_button.glb");
    const { nodes, materials } = useGLTF('./assets/models/earth_planet.glb');
    const [gameStarted, setGameStarted] = useState(false);
    const [shapes, setShapes] = useState([]);
    const [score, setScore] = useState(0);
    const [visible, setVisible] = useState(false);
    const [explosionPosition, setExplosionPosition] = useState(null);
    const [isExploding, setIsExploding] = useState(false);
    const [highScores, setHighScores] = useState([]);
    const [playerName, setPlayerName] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        const savedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
        console.log(savedHighScores)
        setHighScores(savedHighScores);
    }, []);
    
    // // Update high scores in localStorage whenever they change
    // useEffect(() => {
    //     localStorage.setItem('highScores', JSON.stringify(highScores));
    //     console.log(highScores)
    // }, [highScores]);

    useEffect(() => {
        if (isExploding) {
            // console.log('Explosion at:', explosionPosition); 
        }
    }, [isExploding, explosionPosition]);

    const handleClickStartGame = () => {
        // Start the game, reset score and game ended state
        setGameStarted(true);
        setScore(0);
        setGameEnded(false);
        setPlayerName(""); // Clear player name input
    };

    const { opacity, scale } = useSpring({
        opacity: visible ? 0.5 : 0,
        scale: visible ? [4, 1.5, 3.2] : [0.1, 0.1, 1],
        config: { duration: 1000 }
    });

    const handleClick = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 20000);
    };

    useEffect(() => {
        if (gameStarted) {
            const newShapes = Array(50).fill().map(() => ({
                id: Math.random(),
                position: [
                    5 + (Math.random() * 7 ),
                    2 + (Math.random() * 4 - 1),
                    21 + (Math.random() * 6 - 2),
                ],
            }));
            setShapes(newShapes);

            const timer = setTimeout(() => {
                setShapes([]);
                setGameEnded(true);
                setGameStarted(false);
              }, 20000);

            return () => clearTimeout(timer);
        }
    }, [gameStarted]);

    // const optionsA = useMemo(() => ({
    //     x: { value:7.9, min: -30, max: 30, step: 0.01 },
    //     y: { value:2.42, min: -30, max: 30, step: 0.01 },
    //     z: { value:11.4 , min: -30, max: 30, step: 0.01 },
    // }), []);

    // const optionsB = useMemo(() => ({
    //     x: { value: -1.58, min: -30, max: 30, step: 0.01 },
    //     y: { value: 0, min: -30, max: 30, step: 0.01 },
    //     z: { value: -0.05, min: -30, max: 30, step: 0.01 },
    // }), []);

    // const pA = useControls('Planche Pos', optionsA);
    // const pB = useControls('Planche Rot', optionsB);

    // const holographicControls = useControls({
    //     fresnelAmount: { value: 0.0, min: 0.0, max: 1.0},
    //     fresnelOpacity: { value: 0.78,min: 0.0, max: 1.0},
    //     scanlineSize: { value: 4.6, min: 1.0, max: 15},
    //     hologramBrightness: { value: 1.3, min: 0.0, max: 2},
    //     signalSpeed: { value: 1.09, min: 0.0, max: 2},
    //     hologramOpacity: { value: 0.55, min: 0.0, max: 1.0},
    //     hologramColor: { value: "#51a4de"},
    //     enableBlinking: false,
    //     blinkFresnelOnly: true,
    //     enableAdditive: true,
    //     side: { options: ["FrontSide", "BackSide", "DoubleSide"] },
    // });

    sceneModel.scene.children.forEach((mesh) => {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
    });

    const earth = useRef();
    const planche = useRef();
    const planche_pos = useRef();

    useFrame((state, delta) => {
        earth.current.rotation.y += 0.001;

        const y = planche_pos.current.position.y + 3;
        const y_ = planche_pos.current.position.y - 3;

        if (planche_pos.current.material.opacity >= 0.1) {
            planche.current.setNextKinematicTranslation({ x: 0, y: y_, z: 0 })      
        } else {   
            planche.current.setNextKinematicTranslation({ x: 0, y: y, z: 0 })      
        }
    });

    const handleClick_ = (id, position) => {
        // console.log(position); 
        if (!position) return; 
        const updatedShapes = shapes.filter(shape => shape.id !== id);
        setShapes(updatedShapes);
        setExplosionPosition(position);
        setIsExploding(true);
        setTimeout(() => {
            setIsExploding(false);
            setExplosionPosition(null);
        }, 1000);
        setScore(score + 1);
    };

    // Update high scores in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }, [highScores]);


//   useEffect(() => {
//     if (!gameStarted && score > 0) {
//       const duration = new Date().toLocaleString();
//       const newScore = { name: playerName, score, time: duration };
//       const updatedHighScores = [...highScores, newScore].sort((a, b) => b.score - a.score).slice(0, 10);
//       setHighScores(updatedHighScores);
//     }
//   }, [gameStarted, score, playerName, highScores]);

  const handleSubmitName = () => {
    if (!playerName) return;

    const duration = new Date().toLocaleString();
    const newScore = { name: playerName, score, time: duration };
    const updatedHighScores = [...highScores, newScore].sort((a, b) => b.score - a.score).slice(0, 10);
    setHighScores(updatedHighScores);
    console.log(updatedHighScores)
    localStorage.setItem('highScores', JSON.stringify(updatedHighScores));
    setGameEnded(false); // Reset game end state

    setTimeout(() => {
        setScore(0);
    }, 20000); // Clear the score after 20 seconds
};



    return (
        <group>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                rotation={[0, 3.14, 0]}
                position={[0, 1, 0]}
                restitution={0.2}
                friction={1}
                ccd
            >
                <primitive receiveShadow object={sceneModel.scene} scale={0.8} />

                {/* Ground in bonus room */}
                <mesh position={[-18.08, 0.05, -2.6]} rotation={[1.55, 0, 0.35]}  scale={[12, 10, 10]}>
                    <planeGeometry />
                    <meshBasicMaterial color="white" transparent={true} opacity={0.5}/>
                </mesh>
            </RigidBody>

            {/* Planche */}
            <RigidBody
                ref={planche}
                type="kinematicPosition"
                colliders="trimesh"
                position={[0, 1, 0]}
                restitution={0.2}
                friction={1}
                ccd
            >

                <animated.mesh
                    ref={planche_pos}
                    // position={[pA.x, pA.y, pA.z]} 
                    // rotation={[pB.x, pB.y, pB.z]}
                    position={[7.9, 2.42, 11.4]}
                    rotation={[-1.58, 0, -0.05]}
                    scale={[4, 1.5, 3.2]}
                >
                    <planeGeometry />
                    <animated.meshBasicMaterial
                        side={THREE.DoubleSide}
                        transparent={true}
                        opacity={opacity}
                    />
                </animated.mesh>
            </RigidBody>

            {/* Sparkles */}
            <Sparkles position={[19.34, 4.65, 3.28]} wireframe={true} count={150} scale={10} size={6} speed={0.4} />

            {/* Portal */}
            <Portal id="2023" name="Catacombes.xyz" bg="#ffffff">
                <ambientLight intensity={Math.PI / 2} />
                <Gltf src="./assets/models/Guerinet.glb" scale={1} position={[0.1, -1.8, -3]} rotation={[0, 4.63, 0]} />
            </Portal>

            <group ref={earth} dispose={null} scale={0.013} position={[0, 3.2, 0]}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <group rotation={[0.274, 0.081, 0.281]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials.Oceans}
                            rotation={[-0.286, 0, -0.292]}
                        >
                            <HolographicMaterial
                                fresnelOpacity={0.78}
                                scanlineSize={4.6}
                                hologramBrightness={1.3}
                                signalSpeed={1.09}
                                hologramOpacity={0.55}
                                hologramColor={"#51a4de"}
                                enableBlinking={false}
                                blinkFresnelOnly={true}
                                enableAdditive={true}
                                side={"FrontSide"}
                            />
                            {/* {...holographicControls} */}
                        </mesh>
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials.Land_Masses}
                    >
                        <HolographicMaterial 
                            fresnelOpacity={0.78}
                            scanlineSize={4.6}
                            hologramBrightness={1.3}
                            signalSpeed={1.09}
                            hologramOpacity={0.55}
                            hologramColor={"#51a4de"}
                            enableBlinking={false}
                            blinkFresnelOnly={true}
                            enableAdditive={true}
                            side={"FrontSide"}
                            // {...holographicControls} 
                        />
                    </mesh>
                </group>
            </group>

            <Text_3D />

            <mesh scale={[6, 1, 3]}>
                <planeGeometry />
                <meshBasicMaterial color="#fff" side={THREE.DoubleSide}/>
            </mesh>

            <mesh position={[0, 1.76, 0]}>
                <cylinderGeometry args={[1, 2, 0.05]} />
                <meshPhysicalMaterial
                    color="white"              
                    emissive="purple"      
                    glow="#FF90f0"     
                    envMapIntensity={1} 
                    roughness={0}
                />
            </mesh>
            
            {/* Box to click */}
            <mesh position={[0.23, 1.32, 10]} scale={0.5} onClick={handleClick}>
                <primitive 
                    receiveShadow 
                    object={alarm_button.scene} 
                    scale={0.11} 
                    position={[28.85, 1.67, 0]}
                    rotation={[0, 2.9, 0]}
                />
            </mesh>

            {shapes.map((shape) => (
                <Shape
                    key={shape.id}
                    id={shape.id}
                    position={shape.position}
                    onClick={handleClick_}
                />
            ))}

            {isExploding && explosionPosition && (
                <Confetti
                    rate={2}
                    amount={20}
                    fallingHeight={9}
                    enableShadows
                    isExploding
                    colors={['yellow', 'white', 'red']}
                    position={[explosionPosition.x, explosionPosition.y, explosionPosition.z]}
                />
            )}

            {!gameStarted && !gameEnded && (
                <mesh position={[0, 2, 11]} onClick={handleClickStartGame}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={'blue'} />
                </mesh>
            )}

            <Html>
                {gameStarted ? (
                    <div style={{ position: 'absolute', top: '-38vh', left: '-3vh', color: 'white', textAlign: 'center' }}>
                        <h4>
                            <span style={{ fontSize: '24px' }}>Score</span> 
                            <br/>
                            <span style={{ fontSize: '30px' }}>{score}</span>
                        </h4>
                    </div>
                ) : null}

                {gameEnded && (
                    <>
                        <div>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
          />
          <button
            onClick={handleSubmitName}
            style={{ position: 'absolute', top: '15vh', left: '3vh', color: 'black', backgroundColor: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Valider
          </button>
        </div>
                    </>
                )}

                {gameEnded && (
                    < >
                        <div style={{ position: 'absolute', top: '-38vh', left: '54vh', color: 'white', textAlign: 'center', width: '38vh' }}>
                            <h3>Your best score : </h3>
                            <ol>
                                {highScores.map((score, index) => (
                                    <li key={index}>{score.name}: {score.score} points ({score.time}s)</li>
                                ))}
                            </ol>
                        </div>
                    </>
                )}
            </Html>
        </group>
    );
}
