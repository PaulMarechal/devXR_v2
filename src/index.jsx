import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { KeyboardControls, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import FPScontrols from "./FPScontrols.jsx";
import { OrbitControls } from '@react-three/drei';
import Interface from "./Interface.jsx";
import $ from "jquery";
import Modal from "./Modal.jsx";
import React, { useEffect } from 'react';

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
        </KeyboardControls>
    );
};

root.render(<App />);
