import { useKeyboardControls } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import $ from "jquery";

export default function Mobile_interface() {

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


  return (
    <>
    <div className="container">
        <div className="grid">

            <div className="grid-item span-2-1" onClick={() => display_modal("#product_div")}>

                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#gradient)" 
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-world-www"
                    >
                        <defs>
                            <linearGradient id="gradient" gradientTransform="background-image: linear-gradient(to right top, #ff9808, #c1b210, #85bf4e, #47c486, #00c2b4, #00bfd3, #00b8ed, #00aefd, #519fff, #9489ff, #d067f3, #ff2bc9);">
                                <stop offset="0%" stopColor="#ff9808" />
                                <stop offset="8%" stopColor="#c1b210" />
                                <stop offset="16%" stopColor="#85bf4e" />
                                <stop offset="24%" stopColor="#47c486" />
                                <stop offset="32%" stopColor="#00c2b4" />
                                <stop offset="40%" stopColor="#00bfd3" />
                                <stop offset="48%" stopColor="#00b8ed" />
                                <stop offset="56%" stopColor="#00aefd" />
                                <stop offset="64%" stopColor="#519fff" />
                                <stop offset="72%" stopColor="#9489ff" />
                                <stop offset="80%" stopColor="#d067f3" />
                                <stop offset="100%" stopColor="#ff2bc9" />
                            </linearGradient>
                        </defs>

                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                        <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                        <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                        <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                        <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                        <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                        <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                        <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                        <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                    <h4>Site classique</h4>
                </div>

            </div>

            <div className="grid-item span-2-1">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#gradient)" 
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-badge-3d"
                    >
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(45)">
                                <stop offset="0%" stopColor="#ff9808" />
                                <stop offset="35%" stopColor="#ff675c" />
                                <stop offset="70%" stopColor="#d5578b" />
                                <stop offset="95%" stopColor="#8e5b9a" />
                            </linearGradient>
                        </defs>

                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M7 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
                        <path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
                    </svg>
                    <h4>Site 3D</h4>
                </div>
            </div>

            <div className="grid-item span-1-3 two_icons_large">
                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#gradient)" 
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-cube-3d-sphere"
                >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(45)">
                        <stop offset="0%" stopColor="#b57edc" />
                        <stop offset="25%" stopColor="#ff6eb0" />
                        <stop offset="60%" stopColor="#ff8166" />
                        <stop offset="90%" stopColor="#ffb700" />
                        <stop offset="100%" stopColor="#a8eb12" />


                        </linearGradient>
                    </defs>

                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 17.6l-2 -1.1v-2.5" />
                    <path d="M4 10v-2.5l2 -1.1" />
                    <path d="M10 4.1l2 -1.1l2 1.1" />
                    <path d="M18 6.4l2 1.1v2.5" />
                    <path d="M20 14v2.5l-2 1.12" />
                    <path d="M14 19.9l-2 1.1l-2 -1.1" />
                    <path d="M12 12l2 -1.1" />
                    <path d="M18 8.6l2 -1.1" />
                    <path d="M12 12l0 2.5" />
                    <path d="M12 18.5l0 2.5" />
                    <path d="M12 12l-2 -1.12" />
                    <path d="M6 8.6l-2 -1.1" />
                </svg>

                <div>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-view-360-number"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" /><path d="M3 5h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" /><path d="M17 7v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" /><path d="M3 16c0 1.657 4.03 3 9 3s9 -1.343 9 -3" /></svg>
                </div>


            </div>

            <div className="grid-item span-2-1 logo_mobile_main"></div>

            <div className="grid-item span-1-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#gradient)" 
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-augmented-reality"
                >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(45)">
                        <stop offset="0%" stopColor="#ffbe0b" />
                        <stop offset="25%" stopColor="#fb5607" />
                        <stop offset="50%" stopColor="#ff006e" />
                        <stop offset="75%" stopColor="#8338ec" />
                        <stop offset="100%" stopColor="#3a86ff" />
                        </linearGradient>
                    </defs>

                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
                    <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z" />
                    <path d="M13 14.5v4.5l4 2.5" />
                    <path d="M17 17l4 -2.5" />
                    <path d="M11 4h2" />
                </svg>
            </div>

            <div className="grid-item span-3-1">
                <div>
                    <span>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-badge-ar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" /><path d="M7 13h3" /><path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" /></svg>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-badge-3d"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M7 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" /><path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /></svg>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-badge-vr"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" /><path d="M7 9l2 6l2 -6" /></svg>
                    </span>
                    <h4>Réalité mixte</h4>
                </div>
            </div>

            <div className="grid-item span-2-2 div_hidden">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#gradient)" 
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-augmented-reality"
                    >
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(45)">
                            <stop offset="0%" stopColor="#845ec2" />
                            <stop offset="20%" stopColor="#2c73d2" />
                            <stop offset="40%" stopColor="#0081cf" />
                            <stop offset="60%" stopColor="#0089ba" />
                            <stop offset="80%" stopColor="#008e9b" />
                            <stop offset="100%" stopColor="#008f7a" />
                            </linearGradient>
                        </defs>
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        />
                        <path d="M4 8v-2a2 2 0 0 1 2 -2h2"/>
                        <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                        <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                        <path d="M12 12.5l4 -2.5" />
                        <path d="M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5z" />
                        <path d="M8 10v4.5l4 2.5" />
                    </svg>
                    <h4>Réalité augmentée</h4>
                </div>
            </div>

            <div className="grid-item span-2-2">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-device-vision-pro"
                    >
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(45)">
                            <stop offset="0%" stopColor="#845ec2" />
                            <stop offset="30%" stopColor="#d65db1" />
                            <stop offset="45%" stopColor="#ff6f91" />
                            <stop offset="60%" stopColor="#ff9671" />
                            <stop offset="90%" stopColor="#ffc75f" />
                            <stop offset="100%" stopColor="#f9f871" />
                            </linearGradient>
                        </defs>
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        />
                        <path
                            d="M12 7c1.143 0 2.235 .035 3.275 .104c1.017 .068 1.95 .207 2.798 .42c.813 .203 1.52 .505 2.119 .909a3.903 3.903 0 0 1 1.328 1.531c.326 .657 .48 1.48 .48 2.466c0 1.006 -.189 1.91 -.574 2.707c-.375 .779 -.886 1.396 -1.537 1.848a3.696 3.696 0 0 1 -2.16 .66c-.509 0 -.97 -.068 -1.382 -.21a5.84 5.84 0 0 1 -1.17 -.548a18.45 18.45 0 0 1 -1.045 -.695a9.104 9.104 0 0 0 -1.001 -.63a2.376 2.376 0 0 0 -1.13 -.301c-.373 0 -.75 .097 -1.132 .3c-.316 .17 -.65 .38 -1 .63c-.322 .23 -.67 .462 -1.047 .695a5.78 5.78 0 0 1 -1.168 .548c-.413 .142 -.872 .21 -1.378 .21a3.706 3.706 0 0 1 -2.165 -.659c-.651 -.452 -1.162 -1.07 -1.537 -1.848c-.385 -.798 -.574 -1.7 -.574 -2.709c-.004 -.98 .15 -1.802 .477 -2.46a3.897 3.897 0 0 1 1.33 -1.531c.6 -.403 1.307 -.704 2.12 -.907a16.088 16.088 0 0 1 2.8 -.423c1.04 -.071 2.13 -.107 3.273 -.107z"
                        />
                    </svg>
                    <h4>Réalité virtuelle</h4>
                </div>
            </div>
        </div>
    </div>
    {/* <div>
        <h4>Bienvenue</h4>
        <p>Pour profiter pleinement du site merci de vous connecter depuis un ordinateur </p>
    </div> */}
    </>
  );
}
