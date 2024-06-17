import * as THREE from 'three';
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Preload } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useRef, useState, useMemo } from 'react'
import { useLoader, useFrame } from '@react-three/fiber';
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
import { useControls } from 'leva';

// extend(geometry)

export default function Portal({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
    const portal = useRef()
    const [, setLocation] = useLocation()
    const [, params] = useRoute('/item/:id')
    const [hovered, hover] = useState(false)
    useCursor(hovered)
    useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))

    const optionsA = useMemo(() => ({
        x: { value:23.8, min: -30, max: 30, step: 0.01 },
        y: { value: 2.04, min: -30, max: 30, step: 0.01 },
        z: { value: 5.58, min: -30, max: 30, step: 0.01 },
    }), []);

    const optionsB = useMemo(() => ({
        x: { value: 0, min: -30, max: 30, step: 0.01 },
        y: { value: -1.9, min: -30, max: 30, step: 0.01 },
        z: { value: 0, min: -30, max: 30, step: 0.01 },
    }), []);

    const pA = useControls('Portal Pos', optionsA);
    const pB = useControls('Portal Rot', optionsB);

    return (
      <group {...props} position={[pA.x, pA.y, pA.z]} rotation={[pB.x, pB.y, pB.z]}>
        <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
          {name}
        </Text>
        <Text fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
          /{id}
        </Text>
        <Text fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
          {author}
        </Text>
        <mesh name={id} >
          <planeGeometry width={1} height={2} />
          <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
            <color attach="background" args={[bg]} />
            {children}
          </MeshPortalMaterial>
        </mesh>
      </group>
    )
  }