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
import React, { useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Mobile_interface from "./Mobile_interface.jsx";

const root = ReactDOM.createRoot(document.querySelector('#root'));
const App = () => {
    
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

    return (
        <>
        <MobileView>
            <Mobile_interface />
            <Modal/>
        </MobileView>
        <BrowserView className="window_size">
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
                    dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
                />
            </KeyboardControls>
        </BrowserView>
        </>
    );
};
useGLTF.preload('./assets/models/meeting_space_7.glb')

root.render(<App />);
