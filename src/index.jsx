import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { KeyboardControls, ScrollControls, Scroll, useScroll, Html, useGLTF } from '@react-three/drei';
import FPScontrols from "./FPScontrols.jsx";
import { OrbitControls, Loader } from '@react-three/drei';
import Interface from "./Interface.jsx";
import $ from "jquery";
import Modal from "./Modal.jsx";
import React, { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Mobile_interface from "./Mobile_interface.jsx";
import Interface_mobile from "./Interface_mobile.jsx";
import Choose_site from "./Choose_site.jsx";

const root = ReactDOM.createRoot(document.querySelector('#root'));
const App = () => {

    const [showChooseSite, setShowChooseSite] = useState(true);
    const [showLoaderAndScene, setShowLoaderAndScene] = useState(false);
    
    useEffect(() => {
        /* Close modal */
        $(".close_icon").on("click", function() {
            $(".modal_infos").css("opacity", "0");
            $(".text_modale_div").each(function() { $(this).css("opacity", "0"); });
            setTimeout(() => {
                $(".modal_infos").css("display", "none");
                $(".text_modale_div").each(function() { $(this).css("display", "none"); });
            }, 200);
        });

        return () => {
            $(".close_icon").off("click");
        };
    }, []);

    const handleChooseSiteClose = () => {
        setShowChooseSite(false);
        setShowLoaderAndScene(true); 
    };

    return (
        <>
            <MobileView>
                <Interface_mobile />
                <Mobile_interface />
                <Modal/>
            </MobileView>
            <BrowserView className="window_size">
                {showChooseSite && (
                    <Choose_site onClose={handleChooseSiteClose} />
                )}
                {showLoaderAndScene && (
                    <KeyboardControls map={ [
                        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
                        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
                        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
                        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
                        { name: 'jump', keys: ['Space'] },
                        { name: 'run', keys: ['Shift'] }
                    ] }>
                        <Canvas
                            camera={{
                                fov: 45,
                                near: 0.1,
                                far: 200,
                            }}
                        >
                            <Experience />
                        </Canvas>
                        <Interface />
                        <Modal />
                        <Loader
                            dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
                        />
                    </KeyboardControls>
                )}
            </BrowserView>
        </>
    );
};
useGLTF.preload('./assets/models/meeting_space_7.glb')

root.render(<App />);
