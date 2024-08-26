import * as THREE from 'three';
import { useGLTF, Html } from "@react-three/drei";
import React, { useMemo, useRef, useEffect } from 'react';
import $ from "jquery";
import Text_3D from './Text_3D.jsx';
import { useThree } from '@react-three/fiber';

export default function Screen({ position = [0, 0, 0] }) {
    const screen_model = useGLTF("./assets/models/tv_display.glb");
    const phone = useGLTF("./assets/models/phone.gltf");

    const image_catas = "./assets/images/cadres/geurinet_escalier.webp"
    const image_navigo = "./assets/images/cadres/navigoDemo_2.webp"
    const image_aero = "./assets/images/cadres/aero.webp"
    const as_clean = "./assets/images/cadres/as_clean_2.webp"

    const fdc_qr = "./assets/images/QR_code/fond_du_cresw.webp"
    const fdc_2_qr = "./assets/images/QR_code/fond_du_crew_1.webp"
    const lune_ar = "./assets/images/QR_code/Lune1.webp"
    const anubis_qr = "./assets/images/QR_code/anubis.webp"


    function display_modal(elem_to_display){
        // Hide all modals first
        $(".modal_infos").css("display", "none").css("opacity", "0");
        $(".text_modale_div").css("display", "none").css("opacity", "0");
    
        // Display the modal wrapper
        $(".modal_infos").css("display", "block");
        setTimeout(() => {
            $(".modal_infos").css("opacity", "1");
        }, 200);
    
        // Display the specific modal content
        setTimeout(() => {
            $(elem_to_display).css("display", "block").css("opacity", "1");
        }, 350);
    }

    const { gl } = useThree();
    const canvasRef = useRef();

    useEffect(() => {
        canvasRef.current = gl.domElement;
    }, [gl]);

    const handlePointerOver = () => {
        if (canvasRef.current) canvasRef.current.style.cursor = 'pointer';
    };

    const handlePointerOut = () => {
        if (canvasRef.current) canvasRef.current.style.cursor = 'auto';
    };


    const Texture = ({ texture, position, rotation }) => {
    return (
            <mesh position={position} rotation={rotation}>
                <planeGeometry
                    attach="geometry" 
                    args={[1.85, 3.25]} 
                    height={200}
                    width={200}
                />
                <meshBasicMaterial attach="material" map={texture} />
            </mesh>
        );
    };

    const Texture_qr = ({ texture, position, rotation }) => {
        // position={[pA.x, pA.y, pA.z]}
        return (
                <mesh position={position} rotation={rotation}>
                    <planeGeometry
                        attach="geometry" 
                        args={[2.5, 2.2]} 
                        height={1000}
                        width={1000}
                    />
                    <meshBasicMaterial attach="material" map={texture} />
                </mesh>
            );
        };

    const Image = ({ url, position, rotation }) => {
        const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
        return <Texture texture={texture} position={position} rotation={rotation} />;
    };

    const Image_QR = ({ url, position, rotation }) => {
        const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
        return <Texture_qr texture={texture} position={position} rotation={rotation} />;
    };

    screen_model.scene.children.forEach((mesh) => {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
    });

    return (
        <>
            {/* Catacombes website */}
            <group>
                <primitive 
                    object={screen_model.scene.clone()} 
                    scale={1.8} 
                    position={[6.07, 3.5, 2.5]}              
                    onClick={() => display_modal("#catacombes_div")} 
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    />
                <Image 
                    url={image_navigo} 
                    position={[5.99, 3.47, -1.63]} 
                    rotation={[0, -1.57, 0]}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                />
            </group>
            <Text_3D 
                text={"Réalité mixte"} 
                scale={0.2}
                position={[6.02, 1.9, 1.6]}
                rotation={[0, -1.6, 0]}
                size={[2, .5, 0.2]}
                materialType={"meshStandardMaterial"} 
                showRoundedBox={true} 
                position_rounded_box={[0.8, 0.12, .2]}
                textPosition={[0, 0.07, 0.32]}
                textRotation={[-0.4, 0, 0]}
            />

            {/* Navigo map */}
            <group>
                <primitive 
                    object={screen_model.scene.clone()} 
                    scale={1.8} 
                    position={[6.07, 3.5, -1.5]} 
                    onClick={() => display_modal("#metro_map_div")} 
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                />
                <Image 
                    url={image_catas} 
                    position={[5.99, 3.47, 2.39]} 
                    rotation={[0, -1.57, 0]}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                />
            </group>
            <Text_3D 
                text={"Réalité augmentée"} 
                scale={0.2}
                position={[6.03, 1.9, -2.4]}
                rotation={[0, -1.6, 0]}
                size={[2.4, .5, 0.2]}
                textPosition={[-.37, 0.07, 0.32]}
                textRotation={[-0.4, 0, 0]}
                materialType={"meshStandardMaterial"} 
                showRoundedBox={true} 
            />

            {/* Site classique */}
            <group>
                <primitive 
                    object={screen_model.scene.clone()} 
                    scale={1.8} 
                    position={[-6.05, 3.5, -1.5]} 
                    rotation={[0, 3.15, 0]}  
                    onClick={(e) => display_modal("#site_classique_presentation_page")} 
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                />
                <Image 
                    url={as_clean} 
                    position={[-5.97, 3.47, -1.39]} 
                    rotation={[0, 1.579, 0]}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                />
            </group>
            <Text_3D 
                text={"Classique - 2D"} 
                scale={0.2}
                position={[-5.9, 1.9, -.6]}
                rotation={[0, 1.6, 0]}
                size={[2, .5, 0.2]}
                textPosition={[-.08, 0.07, 0.32]}
                textRotation={[-0.4, 0, 0]}
                materialType={"meshStandardMaterial"} 
                showRoundedBox={true} 
            />

            {/* Phone */}
            <primitive 
                receiveShadow 
                object={phone.scene} 
                scale={0.1} 
                position={[2.2, 1.77, -5.7]}
                rotation={[-1.6, 0, -0.25]}
                onClick={() => display_modal("#contact_us_div")} 
            />

            {/* 3D model */}
            <group>
                <primitive 
                    object={screen_model.scene.clone()} 
                    scale={1.8} 
                    rotation={[0, 3.15, 0]}
                    position={[-6.05, 3.5, 2.5]}    
                    onClick={(e) => display_modal("#helico_aerobay_div")} 
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                />   
                <Image 
                    url={image_aero} 
                    position={[-5.97, 3.47, 2.6]} 
                    rotation={[0, 1.579, 0]}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                />
            </group>
            <Text_3D 
                text={"Présentation 3D"} 
                scale={0.2}
                position={[-5.9, 1.89, 3.45]}
                rotation={[0, 1.6, 0]}
                size={[2.3, .5, 0.2]}
                textPosition={[-.18, 0.07, 0.32]}
                textRotation={[-0.4, 0, 0]}
                materialType={"meshStandardMaterial"} 
                showRoundedBox={true} 
            />

            {/* QR Code */}
            {/* Plan ancien */}
            <Image_QR 
                url={fdc_qr} 
                position={[-5.99, -3.6, -1.20]} 
                rotation={[0, 1.57, 0]}
            />

            {/* Island */}
            <Image_QR 
                url={fdc_2_qr} 
                position={[-5.99, -3.6, 2.2]} 
                rotation={[0, 1.56, 0]}
            />

            {/* Picasso style*/}
            <Image_QR 
                url={lune_ar} 
                position={[24.8, -3.6, 2.9]} 
                rotation={[0, -1.8, 0]}
            />

            {/* Paris street */}
            <Image_QR 
                url={anubis_qr} 
                position={[23.90, -3.60, 6.40]} 
                rotation={[0, -1.83, 0]}
            />
        </>
    );
}
