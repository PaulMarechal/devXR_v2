import * as THREE from 'three';
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Preload, RoundedBox } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useRef, useState, useMemo } from 'react'
import { useLoader, useFrame } from '@react-three/fiber';
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
// import { useControls } from 'leva';

// extend(geometry)

export default function Portal({ id, name, author, bg, children, ...props }) {
    const portal = useRef()
    const [, setLocation] = useLocation()
    const [, params] = useRoute('/item/:id')
    const [hovered, hover] = useState(false)
    useCursor(hovered)
    useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))

    // const optionsA = useMemo(() => ({
    //     x: { value:23.94, min: -30, max: 30, step: 0.01 },
    //     y: { value: 2.88, min: -30, max: 30, step: 0.01 },
    //     z: { value: 6.41, min: -30, max: 30, step: 0.01 },
    // }), []);

    // const optionsB = useMemo(() => ({
    //     x: { value: 0, min: -30, max: 30, step: 0.01 },
    //     y: { value: -1.84, min: -30, max: 30, step: 0.01 },
    //     z: { value: 0, min: -30, max: 30, step: 0.01 },
    // }), []);

    // const pA = useControls('Portal Pos', optionsA);
    // const pB = useControls('Portal Rot', optionsB);

    return (
      <group {...props} position={[24.14, 2.88, 4.9]} rotation={[0, -1.84, 0]}>
        <Text fontSize={0.3} anchorY="top" anchor X="left" lineHeight={0.8} position={[-0.5, 1.37, 0.01]} material-toneMapped={false}>
          {name}
        </Text>
        <Text fontSize={0.25} anchorX="right" position={[1.6, -1.2, 0.01]} material-toneMapped={false}>
          {id}
        </Text>
        <Text fontSize={0.04} anchorX="right" position={[0, -0.677, 0.01]} material-toneMapped={false}>
          {author}
        </Text>
        <mesh name={id} >
          <RoundedBox
            args={[4.2, 3, 0.01]} 
            radius={0.2} 
            smoothness={8}
            bevelSegments={8} 
          >
            <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
              <color attach="background" args={[bg]} />
              {children}
            </MeshPortalMaterial>
          </RoundedBox>
        </mesh>
      </group>
    )
  }