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

            {/* Site classique */}
            <div className="grid-item span-2-1 site_classique_button" onClick={() => display_modal("#site_classique_presentation_page")}>
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
                                <stop offset="0%" stopColor="#ebf4f5" />
                                <stop offset="100%" stopColor="#b5c6e0" />
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

            {/* Site 3D */}
            <div className="grid-item span-2-1 site_3D_button" onClick={() => display_modal("#helico_aerobay_div")}>
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
                                <stop offset="0%" stopColor="#84ffc9" />
                                <stop offset="50%" stopColor="#aab2ff" />
                                <stop offset="100%" stopColor="#eca0ff" />
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

            {/* Offres */}
            <div className="grid-item span-1-1" onClick={() => display_modal("#product_div")}>
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
                    className="icon icon-tabler icon-tabler-devices"
                >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(30)">
                            <stop offset="0%" stopColor="#6d90b9" />
                            <stop offset="100%" stopColor="#bbc7dc" />
                        </linearGradient>
                    </defs>

                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z" />
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                    <path d="M16 9h2" />
                </svg>
            </div>


            {/* Logo DevXR */}
            <div className="grid-item span-2-1 logo_mobile_main"></div>

            {/* Contact div */}
            <div className="grid-item span-1-1" onClick={() => display_modal("#contact_us_div")}>
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
                    className="icon icon-tabler icon-tabler-phone-call"
                >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(10)">
                            <stop offset="0%" stopColor="#6d90b9" />
                            <stop offset="100%" stopColor="#bbc7dc" />
                        </linearGradient>
                    </defs>

                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
                <h4>Contact us</h4>
            </div>

            {/* About us */}
            <div className="grid-item span-1-1" onClick={() => display_modal("#about_us_div")} >
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
                    className="icon icon-tabler icon-tabler-users"
                >
                    <defs>
                        {/* <linearGradient id="gradient" gradientTransform="rotate(45)">
                            <stop offset="0%" stopColor="#ffbe0b" />
                            <stop offset="33%" stopColor="#fb5607" />
                            <stop offset="66%" stopColor="#ff006e" />
                            <stop offset="100%" stopColor="#8338ec" />
                        </linearGradient> */}
                        <linearGradient id="gradient" gradientTransform="background-image: linear-gradient(to right top, #ff9808, #c1b210, #85bf4e, #47c486, #00c2b4, #00bfd3, #00b8ed, #00aefd, #519fff, #9489ff, #d067f3, #ff2bc9);">
                            <stop offset="0%" stopColor="#ebf4f5" />
                            <stop offset="100%" stopColor="#b5c6e0" />
                        </linearGradient>
                    </defs>

                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <h4>About us</h4>
            </div>

            {/* Realité mixte */}
            <div className="grid-item span-3-1 realite_mixte_button" onClick={() => display_modal("#catacombes_div")}>
                <div>
                    <span>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-badge-ar"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#gradient)" 
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                            <defs>
                                <linearGradient id="gradient" gradientTransform="rotate(40)">
                                    <stop offset="0%" stopColor="#00ee6e" />
                                    <stop offset="100%" stopColor="#0c75e6" />
                                </linearGradient>
                            </defs>

                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
                            <path d="M7 13h3" />
                            <path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
                        </svg>

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
                                    <stop offset="0%" stopColor="#84ffc9" />
                                    <stop offset="50%" stopColor="#aab2ff" />
                                    <stop offset="100%" stopColor="#eca0ff" />
                                </linearGradient>
                            </defs>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            <path d="M7 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
                            <path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
                        </svg>

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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-badge-vr"
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            <path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
                            <path d="M7 9l2 6l2 -6" />
                        </svg>
    
                    </span>
                    <h4>Réalité mixte</h4>
                </div>
            </div>

            {/* Augmented reality */}
            <div className="grid-item span-2-2 div_hidden" onClick={() => display_modal("#augmented_reality_explication_div")}>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-augmented-reality"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#gradient)" 
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(10)">
                                <stop offset="0%" stopColor="#00ee6e" />
                                <stop offset="100%" stopColor="#0c75e6" />
                            </linearGradient>
                        </defs>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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

            {/* Virtual reality */}
            <div className="grid-item span-2-2" onClick={() => display_modal("#virtual_reality_explication_div")}>
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
