import * as THREE from 'three';
import { useGLTF, Html } from "@react-three/drei";
import { useMemo, useState, useEffect } from 'react';
import { useControls } from 'leva';
import AddPictures from './AddPictures';

export default function Screen({ position = [0, 0, 0] }) {
  const screen_model = useGLTF("./tv_display.glb");

  const [textures, setTextures] = useState([]);
  const images = [
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    // Ajoute ici d'autres URLs d'images si nécessaire
  ];

  const optionsA = useMemo(() => ({
    x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  }), []);

  const optionsB = useMemo(() => ({
    x: { value: 0, min: -10, max: 10, step: 0.01 },
    y: { value: 0, min: -10, max: 10, step: 0.01 },
    z: { value: 0, min: -10, max: 10, step: 0.01 },
  }), []);

  const pA = useControls('image Position', optionsA);
//   const pB = useControls('image Position', optionsB);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const loadTextures = async () => {
      const loadedTextures = await Promise.all(images.map(loader.loadAsync));
      setTextures(loadedTextures);
    };

    loadTextures();
  }, [images]); // Only load textures when images change

  // ... rest of the code (screen rendering with primitive and AddPictures)

  return (
    <>
      {/* ... */}
      <group>
        <primitive
          object={screen_model.scene.clone()}
          scale={1.8}
          rotation={[0, 3.15, 0]}
          position={[-5.9, 3.5, 2.5]}
          onClick={(e) => alert("you clicked", e.object.name)}
        >
          {/* Conditionally render AddPictures only if textures are loaded */}
          <AddPictures position={[pA.x, pA.y, pA.z]} imageUrls={images} />
        </primitive>
      </group>
    </>
  );
}