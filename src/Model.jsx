import React, { useRef, useMemo, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import * as THREE from 'three';
import { RigidBody } from "@react-three/rapier";
import { useGLTF, useFBX, Environment, Sky, Html, Sparkles, Clouds, Cloud, Gltf, MeshPortalMaterial, Text } from "@react-three/drei";
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useSpring, animated } from '@react-spring/three';
import Confetti from './components/Confetti';
// import { useControls } from 'leva';
import HolographicMaterial from "./HolographicMaterial.jsx";
import Text_3D from './Text_3D.jsx';
import Portal from "./Portal.jsx";
import $ from "jquery";
import SmallDuck from './SmallDuck.jsx';
import Levitation from './Levitation_obj.jsx';

const geometries = [
    'boxGeometry',
    'cylinderGeometry',
    'coneGeometry',
    'dodecahedronGeometry',
    'torusGeometry', 
    'ringGeometry', 
    'icosahedronGeometry',
    'capsuleGeometry'
];
  
const materials = [
    'meshNormalMaterial',
    'meshStandardMaterial',
    'meshBasicMaterial',
    'meshPhongMaterial'
];

const colors = [
    '#90F1EF', 
    '#FFD6E0', 
    '#FFEF9F', 
    '#C1FBA4', 
    '#7BF1A8', 
    '#ffbe0b', 
    '#fb5607', 
    '#8338ec', 
    '#3a86ff'

]
let nextShapeId = 0;
const Shape = ({ id, position, onClick }) => {
    const mesh = useRef();
    const randomX = Math.random();
    const randomY = Math.random();

    const Geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const Material = materials[Math.floor(Math.random() * materials.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01 * randomX;
            mesh.current.rotation.y += 0.01 * randomY;
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
            <Geometry args={[0.75]} />
            <Material color={randomColor} />
        </animated.mesh>
    );
};

export default function MainModel({ position = [0, 0, 0] }) {
    const sceneModel = useGLTF("./assets/models/meeting_space_7.glb");
    const alarm_button = useGLTF("./assets/models/sci-fi_control_panel.glb");
    const { nodes, materials } = useGLTF('./assets/models/earth_planet.glb');
    const control_panel = useGLTF("./assets/models/control_panel.glb");
    const coffee_cup = useGLTF("./assets/models/coffee_cup.gltf");
    const guitare = useGLTF("./assets/models/guitare.gltf");
    const audio_headset = useGLTF("./assets/models/audio_headset.gltf");
    const bike = useGLTF("./assets/models/bike.gltf");
    const position_duck = document.querySelector(".position_duck")
        
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
    const [showHighScores, setShowHighScores] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const [duckClickCount, setDuckClickCount] = useState(0);
    const [showDuckScore, setShowDuckScore] = useState(false);
    const [displayScoreDuck, setDisplayScoreDuck] = useState(true);
    const [displayBravoDuck, setDisplayBravoDuck] = useState(false);
    
    useEffect(() => {
        const savedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
        setHighScores(savedHighScores);
    }, []);

    // const optionsA = useMemo(() => ({
    //     x: { value:0, min: -30, max: 30, step: 0.01 },
    //     y: { value:0, min: -30, max: 30, step: 0.01 },
    //     z: { value:0, min: -30, max: 30, step: 0.01 },
    // }), []);

    // const optionsB = useMemo(() => ({
    //     x: { value: 0, min: -30, max: 30, step: 0.01 },
    //     y: { value: 3, min: -30, max: 30, step: 0.01 },
    //     z: { value: 0, min: -30, max: 30, step: 0.01 },
    // }), []);

    // const pA = useControls('Obj Pos', optionsA);
    // const pB = useControls('Obj Rot', optionsB);


    const initialDucks = [
        { id: 0, position: [17.7, 6.45, 7.5], rotation: [0, 3, 0] },
        { id: 1, position: [-11.5, -5.75, 7.5], rotation: [0, 1, 0] },
        { id: 2, position: [0.1, 5.25, -0.2], rotation: [0, 3, 0] },
        { id: 3, position: [15, 0.42, -3.8], rotation: [0, 2, 0] },
        { id: 4, position: [-6.6, -0.8, -3.9], rotation: [0, 1.5, 0] },
    ];

    const [ducks, setDucks] = useState(initialDucks);

    const handleDuckClick = (id) => {
        setDuckClickCount(prevCount => {
            
            setShowDuckScore(true)
            console.log("prevCount : " + prevCount)
            const newCount = prevCount + 1;
            console.log("newCount : " + newCount);

            if (newCount >= 5) {
                setDisplayScoreDuck(false);
                setDisplayBravoDuck(true);
            }

            return newCount;
        });

        setDucks(prevDucks => prevDucks.filter(duck => duck.id !== id));
    };

    
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
        setGameStarted(true);
        setScore(0);
        setGameEnded(false);
        setPlayerName(""); 
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
        const handleLoad = () => {
            setIsLoaded(true);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        const random = Math.random() * 14;
        if (gameStarted) {
            const newShapes = Array(50).fill().map(() => ({
                id: nextShapeId++,  
                position: [
                    5 + (Math.random() * 6 * random),
                    2 + (Math.random() * ((5 - 1) * random)),
                    21 + (Math.random() * ((10 - 2) * random)),
                ],
            }));
            setShapes(newShapes);
    
            const timer = setTimeout(() => {
                setShapes([]);
                setGameEnded(true);
                setTimeout(() => {
                    const inputDiv = document.querySelector(".input_div_name")
                    const input_name = document.querySelector(".input_name")
                    if (inputDiv) {
                        inputDiv.style.opacity = 1;
                        inputDiv.style.top = "5vh";
                        input_name.focus();
                    } else {
                        console.error("x");
                    }
                }, 200);
                setGameStarted(false);
                setShowHighScores(true);
                setTimeout(() => setShowHighScores(false), 50000); // Masque après 50 secondes
            }, 20000);
    
            return () => clearTimeout(timer);
        }
    }, [gameStarted]);

    

    // const holographicControls = useControls({
    //     fresnelAmount: { value: 0.0, min: 0.0, max: 1.0},
    //     fresnelOpacity: { value: 0.78,min: 0.0, max: 1.0},
    //     scanlineSize: { value: 4.6, min: 1.0, max: 15},
    //     hologramBrightness: { value: 1.3, min: 0.0, max: 2},
    //     signalSpeed: { value: 1.09, min: 0.0, max: 2},
    //     hologramOpacity:dz { value: 0.55, min: 0.0, max: 1.0},
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
        if (earth.current && planche_pos.current) {
            earth.current.rotation.y += 0.001;
    
            const y = planche_pos.current.position.y + 3;
            const y_ = planche_pos.current.position.y - 3;
    
            if (planche.current) {
                if (planche_pos.current.material.opacity >= 0.1) {
                    planche.current.setNextKinematicTranslation({ x: 0, y: y_, z: 0 });
                } else {
                    planche.current.setNextKinematicTranslation({ x: 0, y: y, z: 0 });
                }
            }
        }

        if(position_duck){
            if(position_duck.style.left > "71.5"){
                alert("yo")
                setTimeout(() => {
                    position_duck.style.left = "89.5vh"
                }, 20000);
            }
        
            position_duck.addEventListener("mouseenter", () => {
                position_duck.style.left = "71.5vh"
            });
        
            position_duck.addEventListener("mouseleave", () => {
                position_duck.style.left = "89.5vh"
            });
        }
    });

    const handleClick_ = (id, position) => {
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

    useEffect(() => {
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }, [highScores]);

    const handleSubmitName = () => {
        if (!playerName) return;

        const duration = new Date().toLocaleString();
        const newScore = { name: playerName, score, time: duration };
        const updatedHighScores = [...highScores, newScore].sort((a, b) => b.score - a.score).slice(0, 3);
        setHighScores(updatedHighScores);
        // console.log(updatedHighScores)
        localStorage.setItem('highScores', JSON.stringify(updatedHighScores));
        setGameEnded(false); // Reset game end state

        setTimeout(() => {
            setScore(0);
        }, 50000); // 50 seconds
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
                <Gltf src="./assets/models/Guerinet.glb" scale={1} position={[0.1, -1.8, -2.3]} rotation={[0, 4.63, 0]} />
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
                            blinkFresnelOnly={true}dz
                            enableAdditive={true}
                            side={"FrontSide"}
                            // {...holographicControls} 
                        />
                    </mesh>
                </group>
            </group>

            <Text_3D 
                position={[-2.3, 5.1, -8.5]} 
                rotation={[0, 0, 0]}
                scale={1}
                textRotation={[0, 0, 0]}
                text={"DevXR.fr"} 
                materialType={"Wireframe"} 
                showRoundedBox={false} 
            />

            <Text_3D 
                position={[9.46, -0.7, -21]} 
                rotation={[0, -0.3, 0]}
                scale={1.3}
                textRotation={[0, 0, 0]}
                text={"WELCOME TO"} 
                // materialType={"Wireframe"} 
                materialType={"meshNormalMaterial"}
                showRoundedBox={false} 
                />

            <Text_3D 
                position={[9.6, -2.7, -21]} 
                rotation={[0, -0.3, 0]}
                scale={1.7}
                textRotation={[0, 0, 0]}
                materialType={"meshNormalMaterial"}
                text={"BACK-END"} 
                // materialType={"Wireframe"} 
                showRoundedBox={false} 
            />

            {/* Coffee cup */}
            <primitive 
                receiveShadow 
                object={coffee_cup.scene} 
                scale={.15} 
                position={[1, 1.7, -1.8]}
                rotation={[0, 2.9, 0]}
            />

            {/* Audio headset */}
            <primitive 
                receiveShadow 
                object={audio_headset.scene} 
                scale={0.18} 
                position={[2, 1.72, -6.34]}
                rotation={[-1.2, 0, 0]}
            />

            {/* Bike */}
            <primitive 
                receiveShadow 
                object={bike.scene} 
                scale={0.5} 
                position={[0, 2.05, 4.4]}
                rotation={[0.2, 0, 0]}
            />

            <Text 
                maxWidth={5} 
                textAlign={"justify"} 
                fontSize={0.25} 
                color="black" 
                anchorX="center" 
                anchorY="middle"
                position={[8.9, -2.5, 5]}
                rotation={[0, 3, 0]}
                onClick={() => window.location.reload()}
            >
                Bienvenue dans le back-end de DevXR.fr. Pour revenir dans la version front il faut utiliser les escaliers ou cliquer ici. N'hésitez à pas scanner les QR Codes avec votre telephone et à trouver les bonus dans la scene. 
            </Text>

            <Text 
                // position={[pA.x, pA.y, pA.z]} 
                // rotation={[pB.x, pB.y, pB.z]} 
                maxWidth={5} 
                textAlign={"justify"} 
                fontSize={0.25} 
                color="#fff" 
                anchorX="center" 
                anchorY="middle"
                position={[24.4, -5.3, 4.6]}
                rotation={[0, 4.45, 0]}
            >
                Scannez les QR Codes avec votre téléphoner et découvrez ce qu'ils cachent. 
            </Text>



{/* <Clouds material={THREE.MeshBasicMaterial}>
  <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
  <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
</Clouds> */}

            {ducks.map(duck => (
                <SmallDuck
                    key={duck.id}
                    position={duck.position}
                    rotation={duck.rotation}
                    onClick={() => handleDuckClick(duck.id)}
                />
            ))}

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
            
            <Levitation position={[0, -3.7, 0]} showCubeGeo={false} numTexts={15}/>
            <Levitation position={[18.4, -3.7, 2.5]} showCubeGeo={false} numTexts={15}/>


            <Levitation position={[18.4, 3.4, 2.5]} showCubeGeo={true} showText={false} numTexts={0}/>

            {/* Box to click */}
            <mesh position={[0.23, 1.32, 10]} scale={0.5} onClick={handleClick}>
                <primitive 
                    receiveShadow 
                    object={alarm_button.scene} 
                    scale={1.5} 
                    position={[28.87, 1.67, 0]}
                    rotation={[0, 2.9, 0]}
                />
            </mesh>
            {shapes.map((shape) => (
                <Shape
                    key={shape.id}  // Utiliser shape.id comme clé
                    id={shape.id}
                    position={shape.position}
                    onClick={handleClick_}  // Passer l'id en tant que paramètre
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

            <primitive 
                position={[0, 1, 20.27]}
                onClick={handleClickStartGame}
                castShadow 
                object={control_panel.scene} 
                scale={0.8} 
            />

            {ducks.map(duck => (
                <SmallDuck
                    key={duck.id}
                    position={duck.position}
                    rotation={duck.rotation}
                    onClick={() => handleDuckClick(duck.id)}
                />
            ))}

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
                        <div className="input_div_name">
                            <input
                                type="text"
                                value={playerName}
                                className="input_name"
                                onChange={(e) => setPlayerName(e.target.value)}
                                placeholder="Enter your name"
                            />
                            <button onClick={handleSubmitName} className="button_validate">
                                Valider
                            </button>
                        </div>
                    </>
                )}

                {showHighScores && (
                    <>
                        <div id="best_score_display">
                            <h3>- &nbsp;  Best scores &nbsp;  -</h3>
                            {/* <ol>
                                {highScores.map((score, index) => (
                                    <li key={index}>{score.name}: {score.score} points ({score.time}s)</li>
                                ))}
                            </ol>
                             */}
                            <div className="podium">
                                {highScores[1] && (
                                    <div className="position second">
                                        <span className="player-info">
                                            <h4>{highScores[1].name}</h4>
                                            <p>
                                                <b>{highScores[1].score}</b> 
                                                <br/>
                                                <b>points</b>
                                            </p>
                                        </span>
                                        <div className="position_player" title={`Date de réalisation: ${highScores[1].time}`}>
                                            <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-laurel-wreath-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.436 8a8.6 8.6 0 0 0 -.436 2.727c0 4.017 2.686 7.273 6 7.273s6 -3.256 6 -7.273a8.6 8.6 0 0 0 -.436 -2.727" /><path d="M14.5 21s-.682 -3 -2.5 -3s-2.5 3 -2.5 3" /><path d="M18.52 5.23c.292 1.666 -1.02 2.77 -1.02 2.77s-1.603 -.563 -1.895 -2.23c-.292 -1.666 1.02 -2.77 1.02 -2.77s1.603 .563 1.895 2.23" /><path d="M21.094 12.14c-1.281 1.266 -3.016 .76 -3.016 .76s-.454 -1.772 .828 -3.04c1.28 -1.266 3.016 -.76 3.016 -.76s.454 1.772 -.828 3.04" /><path d="M17.734 18.826c-1.5 -.575 -1.734 -2.19 -1.734 -2.19s1.267 -1.038 2.767 -.462c1.5 .575 1.733 2.19 1.733 2.19s-1.267 1.038 -2.767 .462" /><path d="M6.267 18.826c1.5 -.575 1.733 -2.19 1.733 -2.19s-1.267 -1.038 -2.767 -.462c-1.5 .575 -1.733 2.19 -1.733 2.19s1.267 1.038 2.767 .462" /><path d="M2.906 12.14c1.281 1.266 3.016 .76 3.016 .76s.454 -1.772 -.828 -3.04c-1.281 -1.265 -3.016 -.76 -3.016 -.76s-.454 1.772 .828 3.04" /><path d="M5.48 5.23c-.292 1.666 1.02 2.77 1.02 2.77s1.603 -.563 1.895 -2.23c.292 -1.666 -1.02 -2.77 -1.02 -2.77s-1.603 .563 -1.895 2.23" /><path d="M10.6 8h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" /></svg>                                        </div>
                                    </div>
                                )}
                                {highScores[0] && (
                                    <div className="position first">
                                        <span className="player-info">
                                            <h4>{highScores[0].name}</h4>
                                            <p>
                                                <b>{highScores[0].score}</b> 
                                                <br/>
                                                <b>points</b>
                                            </p>
                                        </span>
                                        <div className="position_player" title={`Date de réalisation: ${highScores[0].time}`}>
                                            <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-laurel-wreath-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.436 8a8.6 8.6 0 0 0 -.436 2.727c0 4.017 2.686 7.273 6 7.273s6 -3.256 6 -7.273a8.6 8.6 0 0 0 -.436 -2.727" /><path d="M14.5 21s-.682 -3 -2.5 -3s-2.5 3 -2.5 3" /><path d="M18.52 5.23c.292 1.666 -1.02 2.77 -1.02 2.77s-1.603 -.563 -1.895 -2.23c-.292 -1.666 1.02 -2.77 1.02 -2.77s1.603 .563 1.895 2.23" /><path d="M21.094 12.14c-1.281 1.266 -3.016 .76 -3.016 .76s-.454 -1.772 .828 -3.04c1.28 -1.266 3.016 -.76 3.016 -.76s.454 1.772 -.828 3.04" /><path d="M17.734 18.826c-1.5 -.575 -1.734 -2.19 -1.734 -2.19s1.267 -1.038 2.767 -.462c1.5 .575 1.733 2.19 1.733 2.19s-1.267 1.038 -2.767 .462" /><path d="M6.267 18.826c1.5 -.575 1.733 -2.19 1.733 -2.19s-1.267 -1.038 -2.767 -.462c-1.5 .575 -1.733 2.19 -1.733 2.19s1.267 1.038 2.767 .462" /><path d="M2.906 12.14c1.281 1.266 3.016 .76 3.016 .76s.454 -1.772 -.828 -3.04c-1.281 -1.265 -3.016 -.76 -3.016 -.76s-.454 1.772 .828 3.04" /><path d="M5.48 5.23c-.292 1.666 1.02 2.77 1.02 2.77s1.603 -.563 1.895 -2.23c.292 -1.666 -1.02 -2.77 -1.02 -2.77s-1.603 .563 -1.895 2.23" /><path d="M11 9l1 -1v6" /></svg>
                                        </div>
                                    </div>
                                )}
                                {highScores[2] && (
                                    <div className="position third">
                                        <span className="player-info">
                                            <h4>{highScores[2].name}</h4>
                                            <p><b>{highScores[2].score}</b> <br/><b>points</b></p>
                                        </span>
                                        <div className="position_player" title={`Date de réalisation: ${highScores[2].time}`}>
                                            <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-laurel-wreath-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.436 8a8.6 8.6 0 0 0 -.436 2.727c0 4.017 2.686 7.273 6 7.273s6 -3.256 6 -7.273a8.6 8.6 0 0 0 -.436 -2.727" /><path d="M14.5 21s-.682 -3 -2.5 -3s-2.5 3 -2.5 3" /><path d="M18.52 5.23c.292 1.666 -1.02 2.77 -1.02 2.77s-1.603 -.563 -1.895 -2.23c-.292 -1.666 1.02 -2.77 1.02 -2.77s1.603 .563 1.895 2.23" /><path d="M21.094 12.14c-1.281 1.266 -3.016 .76 -3.016 .76s-.454 -1.772 .828 -3.04c1.28 -1.266 3.016 -.76 3.016 -.76s.454 1.772 -.828 3.04" /><path d="M17.734 18.826c-1.5 -.575 -1.734 -2.19 -1.734 -2.19s1.267 -1.038 2.767 -.462c1.5 .575 1.733 2.19 1.733 2.19s-1.267 1.038 -2.767 .462" /><path d="M6.267 18.826c1.5 -.575 1.733 -2.19 1.733 -2.19s-1.267 -1.038 -2.767 -.462c-1.5 .575 -1.733 2.19 -1.733 2.19s1.267 1.038 2.767 .462" /><path d="M2.906 12.14c1.281 1.266 3.016 .76 3.016 .76s.454 -1.772 -.828 -3.04c-1.281 -1.265 -3.016 -.76 -3.016 -.76s-.454 1.772 .828 3.04" /><path d="M5.48 5.23c-.292 1.666 1.02 2.77 1.02 2.77s1.603 -.563 1.895 -2.23c.292 -1.666 -1.02 -2.77 -1.02 -2.77s-1.603 .563 -1.895 2.23" /><path d="M10.5 8h1.5a1.5 1.5 0 0 1 0 3h-1h1a1.5 1.5 0 0 1 0 3h-1.5" /></svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}  

                {showDuckScore && (

                    <div className="position_duck">
                        <img src="https://devxr.fr/assets/images/canard/canard.png" alt="" />
                        {displayScoreDuck && (
                            <h4>
                                Canards : {duckClickCount} / 5
                            </h4>
                        )}
                        {displayBravoDuck && (
                            <h4>
                                BRAVO ! 🎉 
                            </h4>
                        )}
                    </div>
                )}
            </Html>
        </group>
    );
}

