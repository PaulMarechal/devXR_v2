import React, { useEffect, useRef } from 'react';
import $ from "jquery";

export default function Modal() {

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

    $('.video').attr('playsinline',''); 

    useEffect(() => {
        const handlePlay = (video) => {
          const userAgent = navigator.userAgent.toLowerCase();
          const isMobile = /android|iphone|ipad|ipod/.test(userAgent);
    
          if (isMobile) {
            video.controls = true; 
          } else {
            video.controls = false; 
          }
        };
    
        const videos = document.querySelectorAll('video');
    
        videos.forEach((video) => {
            video.muted = true; 
            video.addEventListener('play', () => handlePlay(video));
            
            video.play().catch((error) => {
                console.log("AutoPlay failed, enabling controls:", error);
                video.controls = true;
            });
          });
      
          return () => {
            videos.forEach((video) => {
                video.removeEventListener('play', () => handlePlay(video));
            });
          };
        }, []);

    useEffect(() => {
        // const scroll = new LocomotiveScroll({
        //     el: document.querySelector(".text_modale_div"),
        //     smooth: true,
        // });

        /* Close modal */
        $(".close_icon").on("click", function() {
            $(".modal_infos").css("opacity", "0");
            $(".text_modale_div").each(function() { $(this).css("opacity", "0"); });
            setTimeout(() => {
                $(".modal_infos").css("display", "none");
                $(".text_modale_div").each(function() { $(this).css("display", "none"); });
            }, 200);
        });

        function update_qr_code_display(button_id, button_margin, hide_selectors, show_selectors) {
            $(button_id).css("margin-left", button_margin);
        
            hide_selectors.forEach(selector => {
                $(selector).css("opacity", "0");
            });
        
            setTimeout(() => {
                show_selectors.forEach(selector => {
                    $(selector).css("opacity", "1");
                });
            }, 450);
        }


        // First QR Code in catacombes page
        $("#qr_code_v1").on("click", () => {
            update_qr_code_display("#background_color_button", "0", ["#guerinet_qr_v2", "#fdc_qr_v2"], ["#cabi_qr_v1", "#cabibis_qr_v1"]);
        });
        
        $("#qr_code_v2").on("click", () => {
            update_qr_code_display("#background_color_button", "39px", ["#cabi_qr_v1", "#cabibis_qr_v1"], ["#guerinet_qr_v2", "#fdc_qr_v2"]);
        });

        // Second QR Code in Realité augmenté page
        $("#qr_code_v1_1").on("click", () => {
            update_qr_code_display("#background_color_button_1", "0", ["#guerinet_qr_v2_1", "#fdc_qr_v2_1"], ["#cabi_qr_v1_1", "#cabibis_qr_v1_1"]);
        });
        
        $("#qr_code_v2_1").on("click", () => {
            update_qr_code_display("#background_color_button_1", "39px", ["#cabi_qr_v1_1", "#cabibis_qr_v1_1"], ["#guerinet_qr_v2_1", "#fdc_qr_v2_1"]);
        });



        $("#vr_icon_exemple").on("click", () => {
            update_qr_code_display("#background_color_button_third", "2px", [".realite_augmente_exemple"], [".realite_virtuelle_exemple"]);
        });

        $("#ar_icon_exemple").on("click", () => {
            update_qr_code_display("#background_color_button_third", "46px", [".realite_virtuelle_exemple"], [".realite_augmente_exemple"]);
        });


        $(document).ready(function () {
            function updateDisplay(targetImageClass, buttonMargin) {
                $(".classique_website_img").css("opacity", "0");
                $("#background_color_button_second").css("margin-left", buttonMargin);
        
                setTimeout(() => {
                    $(targetImageClass).css("opacity", "1");
                }, 450);
            }
        
            $("#display_iphone").on("click", function() {
                updateDisplay(".iphone_classic", "3px");
            });
        
            $("#display_ipad").on("click", function() {
                updateDisplay(".ipad_classic", "44px");
            });
        
            $("#display_mac").on("click", function() {
                updateDisplay(".mac_classic", "86px");
            });
        
            updateDisplay(".iphone_classic", "3px");
        });

        return () => {
            $(".close_icon").off("click");
            // scroll.destroy(); 
        };
    }, []);

    return (
        <>
            <div className="header_banner">
                <div className="button_header_banner glassmorphism_button_header_white" onClick={() => display_modal("#product_div")} >
                    <h4>Offres</h4>
                </div>
                <div className="button_header_banner glassmorphism_button_header_white" onClick={() => display_modal("#about_us_div")} >
                    <h4>Présentation</h4>
                </div>

                <div className="button_header_banner glassmorphism_button_header_white button_header_banner_logo"></div>

                <div className="button_header_banner glassmorphism_button_header_white" onClick={() => display_modal("#prestations_div")}>
                    <h4>Solutions</h4>
                </div>
                <div className="button_header_banner glassmorphism_button_header_orange" onClick={() => display_modal("#contact_us_div")}>
                    <h4>Contact</h4>
                </div>
            </div>


            <div className="modal_infos">
                <div className="modal-scroll-container">
                    <div className="close_icon" title="Fermer la fenêtre">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </div>
                    
                    {/* catacombes.xyz presentation page */}
                    <div className="text_modale_div" id="catacombes_div">
                        <div className="return_back_arrow" onClick={() => display_modal("#product_div")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="46" height="46" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0" />
                                <path d="M5 12l6 6" />
                                <path d="M5 12l6 -6" />
                            </svg>
                        </div>
                        <div className="text_catacombes_page" >
                            <h1 id="title_catacombes_page" >Découvrez les Catacombes Interdites<br/> de Paris avec catacombes.xyz</h1>
                            <p id="first_text_catacombes_page" >
                                Plongez dans l'histoire secrète de Paris 
                                <span> grâce à notre projet innovant, <a href="https://catacombes.xyz" target="_blank" rel="noopener noreferrer"><b>catacombes.xyz</b></a>. Ce site unique vous offre une <b>exploration immersive</b> des catacombes interdites de la Rive Gauche de Paris. Découvrez les carrières de Paris comme jamais auparavant, avec des <b>visites en 3D</b>, des expériences de <b>réalité virtuelle (VR) et de réalité augmentée (AR)</b>.</span>
                            </p>
                            <div id="second_div_text_catacombes_page">
                                <h4>Photogrammétrie de Haute Précision.</h4>
                                <p>Grâce à la technologie de <b>photogrammétrie avancée</b>, chaque salle des catacombes a été minutieusement scannée et modélisée en 3D. Cette technique permet de capturer les moindres détails, offrant une <b>représentation fidèle</b> et époustouflante de ces espaces souterrains historiques.</p>
                            </div>

                            <img  id="first_image_room_guerinet" src="https://devxr.fr/assets/images/catacombes/catacombes_page/guerinet_room_catacombes.png" alt="Salle Guerinet - catacombes interdites de Paris" />

                            <h4 className="title_modale_presentation">Immersion Digitale.</h4>
                            <div className="div_video_catacombes">
                                <img src="https://devxr.fr/assets/images/catacombes/oculus_screen_guerinet_catacombes.jpg" alt="Capture d'écran d'une visite des catacombes interdites avec un casque Oculus Quest 2 en réalité virtuelle." />

                                <video className="video" src="https://devxr.fr/assets/video/visite_guerinet_realite_virtuelle.mp4" loop autoPlay={true} muted playsInline></video>
                                
                                <img src="https://devxr.fr/assets/images/catacombes/graphiti_1863_guerinet_catacombes.jpg" alt="" />
                            </div>

                            <div className="div_text_under_images">
                                <p>Naviguez à travers les catacombes directement depuis votre <b>navigateur web</b>, avec une expérience totalement en 3D. Pour une immersion encore plus profonde, utilisez un <b>casque de réalité virtuelle</b>.</p>
                                <p>Explorez chaque recoin comme si vous y étiez, ressentez l'<b>ambiance unique</b> et découvrez les secrets enfouis sous la ville lumière.</p>
                            </div>


                            <div className="second_div_video_text">
                                <video className="video" src="https://devxr.fr/assets/video/demo_catacombes_realite_virtuelle.mp4" loop muted autoPlay={true} ></video>
                                <span>
                                    <h4>Exploration Interactive.</h4>
                                    <p>Sur la vidéo à côté, vous pouvez voir comment, à partir d'un lien, un modèle 3D grandeur nature peut apparaître. Ici, il s'agit d'une salle des catacombes, mais cela peut être tout ce que vous souhaitez : un appartement à faire visiter à des clients, des œuvres d'art, des meubles etc. Imaginez pouvoir offrir des visites immersives et détaillées de vos produits ou espaces directement depuis un simple lien.</p>
                                    <span className="hover-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
                                            <path d="M9 12h6"/>
                                            <path d="M12 9v6"/>
                                        </svg>
                                        <a href="https://catacombes.xyz/displayRooms/" target="_blank" rel="noopener noreferrer" className="hover-text">
                                            Découvrir les salles en réalité augmentée
                                        </a>
                                    </span>
                                </span>
                            </div>

                            <div className="third_div_video_text">
                                <span>
                                    <h4>Découverte Augmentée.</h4>
                                    <p>Nous avons également inclus une section dédiée aux cartes des carrières. Chaque carte, lorsqu'elle est <b>scannée avec votre téléphone</b>, fait apparaître une <b>salle en réalité augmentée</b>. Cette fonctionnalité interactive permet une nouvelle dimension d'<b>exploration</b> et de <b>découverte</b>, offrant une <b>perspective unique</b> sur la taille et la composition des catacombes.</p>
                                </span>
                                <video className="video" src="https://devxr.fr/assets/video/demo_telephone_realite_augmentee.mp4" loop muted autoPlay={true}></video>
                                <span>
                                    {/* <img src="http://devxr.fr/assets/images/catacombes/qr_cabinet_old.png" alt="" /> */}
                                    <span>
                                        <span id="background_color_button"></span>
                                        <p id="qr_code_v1">v1</p>
                                        <p id="qr_code_v2">v2</p>
                                    </span>
                                    <img id="guerinet_qr_v2" src="http://devxr.fr/assets/images/catacombes/qr_code_guerinet.png" alt="QR code qui permet d'afficher la salle Guerinet des Catacombes interdites de Paris en réalité augmentée" />
                                    <img id="fdc_qr_v2" src="http://devxr.fr/assets/images/catacombes/qr_code_fdc.png" alt="QR code qui permet d'affciher la salle Bracitorium des Catacombes interdites de Paris en réalité augmentée" />

                                    <img id="cabi_qr_v1" src="http://devxr.fr/assets/images/catacombes/cabi_qr_code_v1.png" alt="QR code qui permet d'afficher la salle Guerinet des Catacombes interdites de Paris en réalité augmentée" />
                                    <img id="cabibis_qr_v1" src="http://devxr.fr/assets/images/catacombes/cabibis_qr_code_v1.png" alt="QR code qui permet d'affciher la salle Bracitorium des Catacombes interdites de Paris en réalité augmentée" />
                                </span>
                            </div>

                            <h4 className="title_immersive_exploration">Voyage Immersif et Educatif</h4>

                            <div className="div_text_under_images">
                                <p><b>Catacombes.xyz</b> n'est pas seulement un site web, c'est une véritable <b>aventure numérique</b>. Que vous soyez un passionné d'histoire, un amateur de technologie ou simplement curieux, notre plateforme vous offre une <b>expérience immersive</b> et éducative sans pareille. </p>
                                <p>Plongez dans l'obscurité mystérieuse des catacombes de Paris et découvrez des <b>salles cachées</b>, des <b>histoires oubliées</b> et des <b>merveilles architecturales</b> sous un nouvel angle.</p>
                            </div>


                            <p className="visit_website_text">Visitez <b><a href="https://catacombes.xyz" target="_blank">catacombes.xyz</a></b> dès aujourd'hui et laissez-vous transporter dans les profondeurs historiques de Paris.</p>
                        </div>
                    </div>

                    {/* Paris metro map presentation page */}
                    <div className="text_modale_div" id="metro_map_div">

                        <div className="return_back_arrow" onClick={() => display_modal("#product_div")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="46" height="46" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0" />
                                <path d="M5 12l6 6" />
                                <path d="M5 12l6 -6" />
                            </svg>
                        </div>

                        <div className="title_navigo_section">
                            <h1>Paris XR Guide: <br/>Navigo Augmentée.</h1>
                            <p>Découvrez une nouvelle façon de vous déplacer dans Paris avec notre <b>Carte Navigo Interactive</b>, un outil révolutionnaire pour les voyageurs urbains. Grâce à la réalité augmentée, votre simple carte Navigo se transforme en une <b>carte du métro de Paris en 3D</b>.</p>
                        </div>

                        <div className="second_div_navigo_page">
                            <video className="video" src="https://devxr.fr/assets/video/demo_navigo_realite_augmentee.mp4" loop muted autoPlay={true}></video>
                            <p>Imaginez-vous en train de sortir de la station, cherchant la ligne de métro ou le RER le plus proche. Plus besoin de consulter des applications ou des plans papier compliqués. Avec notre technologie de <b>scanning AR</b>, il suffit de pointer votre smartphone vers votre carte Navigo pour voir s'afficher instantanément une <b>carte interactive en 3D</b>. Cette carte vous montre <b>votre position exacte</b> et vous guide vers la station la plus proche.</p>
                        </div>

                        <div className="third_div_navigo_page">
                            <div className="third_div_first_text">
                                <h4>Un Guide en Temps Réel</h4>
                                <p>Notre système utilise la géolocalisation pour identifier votre position précise, même si vous êtes dans un lieu que vous ne connaissez pas. Une fois votre position déterminée, la carte AR affiche clairement les lignes de métro et de RER à proximité, avec des indications pour les correspondances possibles. Vous pouvez <b>explorer les lignes en 3D</b>, les voir se superposer à votre carte Navigo.</p>
                            </div>

                            <div className="third_div_second_text">
                                <h4>Accessibilité et Simplicité</h4>
                                <p>Que vous soyez un <b>habitué des transports parisiens</b> ou un <b>touriste découvrant la ville lumière</b>, cette technologie est conçue pour être intuitive et accessible. Le design 3D est fluide et immersif, vous permettant de naviguer facilement à travers le réseau complexe des transports en commun parisiens.</p>
                            </div>
                        </div>

                        <div className="fouth_div_img_navigo">
                            <img src="https://devxr.fr/assets/images/carte_metro/carte_metro_wireframe.png" alt="" />
                            <img src="https://devxr.fr/assets/images/carte_metro/carte_metro_second.png" alt="" />
                            <img src="https://devxr.fr/assets/images/carte_metro/carte_metro_final.png" alt="" />
                        </div>

                        <div className="fifth_div_navigo_page">
                            <span>
                                <h4>Une Expérience Immersive</h4>
                                <p>Plongez dans une <b>expérience augmentée</b> unique avec notre Carte Navigo Interactive. Cette technologie ne se contente pas de vous montrer le réseau de transport parisien : elle vous place littéralement <b>au cœur de la ville</b>. En scannant simplement votre carte Navigo avec votre smartphone, vous verrez apparaître une <b>carte du métro de Paris en 3D</b>, vous indiquant <b>précisément où vous vous trouvez</b>.</p>

                                <span>
                                    <p>Pour tester cette fonctionnalité, scannez le <b>QR code</b> ci-dessous et utilisez l’image de la carte Navigo pour voir la magie opérer. Explorez Paris sous un nouvel angle, où que vous soyez, avec une technologie moderne qui rend la découverte de la ville plus <b>accessible et engageante.</b></p>
                                    <img src="https://devxr.fr/assets/images/metro/carte_metro_qr.png" alt="" />
                                </span>
                            </span>
                            <img id="carte_navigo_img" src="https://devxr.fr/assets/images/metro/carte_navigo.png" alt="" />
                        </div>

                        <div className="last_text_navigo_page">
                            <p>Explorez Paris de manière interactive et découvrez les secrets du réseau métropolitain avec notre <b>Carte Navigo Interactive</b> en Réalité Augmentée. Transformez chaque voyage en une <b>aventure numérique passionnante</b>.</p>
                        </div>
                    </div>

                    {/* Aero-Bay Helico 3D presentation page */}
                    <div className="text_modale_div" id="helico_aerobay_div">

                        <div className="return_back_arrow" onClick={() => display_modal("#product_div")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="46" height="46" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0" />
                                <path d="M5 12l6 6" />
                                <path d="M5 12l6 -6" />
                            </svg>
                        </div>

                        <h1 id="title_catacombes_page" >Présentation de la Page Interactive <br/>de aero-bay.com</h1>

                        <div>
                            <p id="first_text_catacombes_page" >
                                Découvrez la nouvelle <b>page interactive d'aero-bay.com</b>, spécialement conçue pour révolutionner votre expérience d'achat de pièces détachées pour avions et hélicoptères. En tant que premier revendeur de pièces Airbus en Europe, AeroBay innove en vous offrant une manière inédite de parcourir notre vaste catalogue.
                            </p>
                        </div>

                        <div className="first_div_aero_page">
                            <div>
                                <h4>Visualisation 3D Immersive</h4>
                                <p>
                                    Naviguez à travers un <b>modèle 3D détaillé d'un hélicoptère</b>, où chaque pièce disponible à la vente est marquée par un point rouge interactif. En survolant ou en cliquant sur ces points, vous pouvez accéder instantanément à des informations détaillées sur chaque pièce : son nom, ses spécifications techniques, son état, et bien plus encore. Cette interface intuitive vous permet de <b>visualiser directement les pièces</b> que vous recherchez, rendant la navigation plus intuitive et efficace.
                                </p>
                            </div>
                            <video className="video" src="https://devxr.fr/assets/video/screen_helico_3D.mp4" loop muted autoPlay={true}></video>
                        </div>

                        <div className="second_div_aero_page">
                            <h4>Accès Rapide aux Informations Complètes</h4>
                            <p>Chaque point interactif sur le modèle 3D est lié à une page produit complète. En un seul clic, vous pouvez <b>accéder à toutes les informations nécessaires</b> sur la pièce, y compris sa disponibilité, son prix, et des détails supplémentaires sur son utilisation. Cela vous permet non seulement de <b>gagner du temps</b> dans vos recherches, mais aussi de <b>faciliter vos décisions d'achat</b>.</p>
                        </div>

                        <div className="third_div_aero_page">
                            <span>
                                <h4>Augmenter les Ventes et l'Engagement des Utilisateurs</h4>
                                <p>Cette fonctionnalité offre un double avantage : elle permet aux clients de <b>voir en un coup d'œil tout ce qui est disponible pour un modèle spécifique</b>, tout en stimulant l'intérêt pour d'autres pièces similaires ou complémentaires. En intégrant des éléments de <b>gamification</b>, nous encourageons les utilisateurs à interagir davantage avec notre plateforme, ce qui se traduit par une <b>augmentation significative du temps passé sur la page</b> – jusqu'à trois fois plus longtemps – et par conséquent, une augmentation des ventes potentielles.</p>
                            </span>
                            <img src="https://devxr.fr/assets/images/aero/capture_ecran_helico_3D_first.png" alt="" />
                        </div>

                        <div className="fouth_div_aero_page">
                            <p>Avec cette nouvelle page, AeroBay.com ne se contente pas de vendre des pièces détachées ; nous vous offrons une <b>expérience d'achat innovante</b> et personnalisée, alignée avec les <b>dernières avancées technologiques</b> du secteur. Explorez notre modèle 3D et découvrez comment nous facilitons vos ventes tout en enrichissant votre <b>expérience utilisateur</b>.</p>
                        </div>
                    </div>

                    {/* Site classique presentation page */}
                    <div className="text_modale_div" id="site_classique_presentation_page">

                        <div className="return_back_arrow" onClick={() => display_modal("#product_div")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="46" height="46" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0" />
                                <path d="M5 12l6 6" />
                                <path d="M5 12l6 -6" />
                            </svg>
                        </div>
                        
                        <h1 id="title_catacombes_page">Réalisation de sites 2D. <br/>Classiques et Efficaces.</h1>
                        
                        <div>
                            <p className="first_text_site_classique" >
                                Chez DevXR, nous ne nous limitons pas aux technologies immersives comme la réalité virtuelle et augmentée. Nous sommes également spécialisés dans la création de <b>sites web 2D classiques</b>, parfaitement adaptés aux besoins des entreprises souhaitant une présence en ligne professionnelle et efficace.
                            </p>
                        </div>

                        <div className="first_div_aero_page">
                            <div>
                                <h4>Un Exemple de Réalisation : Site de Nettoyage d'Entreprise et de Voitures</h4>
                                <p>
                                    L'un de nos récents projets est la création d'un site web pour une société spécialisée dans le <b>nettoyage d'entreprise et de véhicules</b>. Ce site est conçu en <b>version "one page"</b>, une approche moderne qui permet aux visiteurs de trouver rapidement et facilement toutes les informations nécessaires sans avoir à naviguer à travers de multiples pages.
                                </p>
                            </div>
                            <video className="video" src="https://devxr.fr/assets/video/capture_ecran_site_classique.mp4" loop autoPlay={true} muted></video>
                        </div>

                        <div className="third_div_site_classique_page">
                            <h4>Design Adaptatif et Navigation Intuitive</h4>
                            <p>Le site est entièrement <b>responsive</b>, s'adaptant parfaitement aux écrans de bureau, tablettes et smartphones. Ce design adaptatif garantit une <b>expérience utilisateur optimale</b>, quelle que soit la taille de l'écran. Nous avons mis un point d'honneur à rendre la navigation <b>intuitive et fluide</b>, permettant aux utilisateurs de parcourir les différents services offerts par la société sans être submergés par trop d'informations.</p>
                        </div>

                        <div className="div_img_site_classique">
                            <img src="https://devxr.fr/assets/images/site_classique/capture_iphone.png" alt=""/>

                            <img src="https://devxr.fr/assets/images/site_classique/capture_ipad.png" alt="" />
                                
                            <img src="https://devxr.fr/assets/images/site_classique/capture_mac.png" alt="" />
                        </div>

                        <div className="fouth_div_site_classique_page">
                            <h4>Présentation des Services</h4>
                            <p>
                                La page met en valeur les différents services de la société de manière claire et concise, avec des sections dédiées pour chaque service, des descriptions détaillées et des visuels attractifs. Cette structure permet aux visiteurs de <b>comprendre rapidement l'étendue des services proposés</b> et de trouver exactement ce qu'ils recherchent.
                            </p>
                        </div>

                        <div className="fifth_div_site_classique_page">
                            <h4>Un Exemple de Nos Compétences Diversifiées</h4>
                            <p>Ce projet démontre notre capacité à réaliser des sites web 2D <b>fonctionnels et esthétiques</b>, en ligne avec les attentes de nos clients. Que vous ayez besoin d'un site web simple pour présenter vos services ou d'une solution plus complexe, DevXR est votre partenaire de choix pour créer des expériences en ligne engageantes et professionnelles.</p>
                        </div>

                        <div className="contact_us_presentation">
                            <p>
                                En choisissant DevXR pour la création de votre site web, vous bénéficiez d'un design soigné, d'une navigation intuitive et d'une <b>présentation claire de vos services</b>. Que vous cherchiez à attirer de nouveaux clients ou à fournir des informations clés à vos utilisateurs, nous sommes là pour vous aider à réaliser vos objectifs avec un site web de qualité.
                            </p>
                        </div>

                    </div>

                    {/* Realisations tab */}
                    <div className="text_modale_div" id="product_div">
                        <h1 id="title_catacombes_page">Nos Solutions Digitales.</h1>

                        <div className="display_infos_product">
                            {/* Sites 2D */}
                            <div className="realisation_infos_div_first" onClick={() => display_modal("#site_classique_presentation_page")} >
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="44"  height="44"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-world-www">
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
                                <h4>Site Classique en 2D</h4>
                                <p>Conception de sites web traditionnels, alliant design élégant et fonctionnalités robustes. Parfait pour présenter vos services ou votre portfolio avec une navigation intuitive et une esthétique moderne.</p>
                            </div>

                            {/* Sites 3D */}
                            <div className="realisation_infos_div_first" onClick={() => display_modal("#helico_aerobay_div")}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-3d" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                    <path d="M7 9.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5" />
                                    <path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                                </svg>
                                <h4>Site Immersif en 3D</h4>
                                <p>Créez une expérience utilisateur captivante avec des sites web en 3D. Idéal pour mettre en valeur vos produits ou services de manière interactive et innovante, offrant une immersion totale dans votre univers.</p>
                            </div>

                            {/* augmented reality */}
                            <div className="realisation_infos_div_first" onClick={() => display_modal("#augmented_reality_explication_div")}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-augmented-reality" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                                    <path d="M12 12.5l4 -2.5" />
                                    <path d="M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5z" />
                                    <path d="M8 10v4.5l4 2.5" />
                                </svg>
                                <h4>Réalité Augmentée (AR)</h4>
                                <p>Offrez une expérience enrichie à vos utilisateurs grâce à la réalité augmentée. Que ce soit via des QR codes ou des pages dédiées, l'AR permet de superposer des éléments virtuels sur le monde réel, ajoutant une dimension ludique et informative à votre communication.</p>
                            </div>
                        </div>

                        <div className="display_infos_product">
                            {/* virtual reality */}
                            <div className="realisation_infos_div_second" onClick={() => display_modal("#virtual_reality_explication_div")}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-vision-pro" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 7c1.143 0 2.235 .035 3.275 .104c1.017 .068 1.95 .207 2.798 .42c.813 .203 1.52 .505 2.119 .909a3.903 3.903 0 0 1 1.328 1.531c.326 .657 .48 1.48 .48 2.466c0 1.006 -.189 1.91 -.574 2.707c-.375 .779 -.886 1.396 -1.537 1.848a3.696 3.696 0 0 1 -2.16 .66c-.509 0 -.97 -.068 -1.382 -.21a5.84 5.84 0 0 1 -1.17 -.548a18.45 18.45 0 0 1 -1.045 -.695a9.104 9.104 0 0 0 -1.001 -.63a2.376 2.376 0 0 0 -1.13 -.301c-.373 0 -.75 .097 -1.132 .3c-.316 .17 -.65 .38 -1 .63c-.322 .23 -.67 .462 -1.047 .695a5.78 5.78 0 0 1 -1.168 .548c-.413 .142 -.872 .21 -1.378 .21a3.706 3.706 0 0 1 -2.165 -.659c-.651 -.452 -1.162 -1.07 -1.537 -1.848c-.385 -.798 -.574 -1.7 -.574 -2.709c-.004 -.98 .15 -1.802 .477 -2.46a3.897 3.897 0 0 1 1.33 -1.531c.6 -.403 1.307 -.704 2.12 -.907a16.088 16.088 0 0 1 2.8 -.423c1.04 -.071 2.13 -.107 3.273 -.107z" />
                                </svg>
                                <h4>Réalité Virtuelle (VR)</h4>
                                <p>Plongez vos visiteurs dans un environnement virtuel complet accessible avec un casque de type Oculus Quest 2. Idéal pour les visites virtuelles de lieux culturels, les démonstrations de produits ou les formations immersives.</p>
                            </div>

                            {/* Mixed reality */}
                            <div className="realisation_infos_div_second" onClick={() => display_modal("#catacombes_div")}>
                                <span>
                                    {/* AR */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-ar" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                        <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
                                        <path d="M7 13h3" />
                                        <path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
                                    </svg>

                                    {/* VR */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-vr" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                        <path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
                                        <path d="M7 9l2 6l2 -6" />
                                    </svg>

                                    {/* 3D */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-3d" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                        <path d="M7 9.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5" />
                                        <path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                                    </svg>
                                </span>
                                <h4>Réalité Mixte (MR)</h4>
                                <p>Combinez les meilleures technologies (3D, AR, VR) pour créer des expériences de réalité mixte uniques. Que ce soit pour des démonstrations interactives, des jeux ou des simulations, la réalité mixte offre un terrain d'exploration vaste et innovant pour se démarquer.</p>
                            </div>
                        </div>

                        <div className="fouth_div_aero_page">
                            <p>Ces différentes options permettent de créer des expériences sur mesure, adaptées à vos besoins et à ceux de vos utilisateurs. Explorez les possibilités offertes par chaque technologie et choisissez la solution qui correspond le mieux à votre projet !</p>
                        </div>
                    </div>

                    {/* About us tab */}
                    <div className="text_modale_div" id="about_us_div">
                        <h1 id="title_catacombes_page">L'équipe de DevXR</h1>
                        <div>
                            <p className="first_text_site_classique">
                                <b>Chez DevXR</b>, nous sommes une équipe multidisciplinaire passionnée par la fusion des arts et des technologies pour créer des expériences numériques uniques et captivantes. Nous combinons expertise technique et sens artistique pour répondre aux besoins variés de nos clients.
                            </p>
                        </div>
                        <div>
                            <p>J'ai débuté ma carrière dans la restauration, où j'ai développé une attention minutieuse aux détails et une solide expérience en gestion et service client. Je me suis ensuite reconverti en développement, étudiant à <b>l'ESIEE Paris Tech</b> et à <b>La Sorbonne</b>, me spécialisant en développement web et 3D. J'ai également acquis une expérience précieuse en tant que développeur front-end et responsable IT chez <b>Aero-Bay</b>, avant de partager mon expertise en 3D à l'<b>IIM Digital School </b>.</p>
                        </div>
                        <div>
                            <p>J'ai eu l'idée de créer DevXR car je crois fermement que la 3D et la réalité mixte représentent l'avenir du commerce en ligne. Mon ambition est de repousser les limites de l'innovation et de l'interactivité pour offrir des expériences client immersives et engageantes. Découvrez d'autres exemples de réalisations <a href="https://paulmarechal.xyz/" target="_blank" rel="noopener noreferrer">ici</a>.</p> 
                        </div>
                        <div>
                            <p>Je travaille également avec des développeurs spécialisés dans le <b>backend</b>, assurant la stabilité et la sécurité de nos solutions numériques. Je peux aussi faire appel à des designers pour certains plus gros projets.</p>
                        </div>
                        <div className="fouth_div_aero_page">
                            <p>Chez DevXR, nous croyons en l'innovation constante et en l'exploration de nouvelles technologies. Nous nous engageons à dépasser vos attentes, en alliant expertise technique, créativité et passion pour le design, afin de donner vie à vos projets les plus ambitieux.</p>
                        </div>
                    </div>


                    {/* Prestations */}
                    <div className="text_modale_div" id="prestations_div">
                        <h1 id="title_catacombes_page">Nos Services</h1>
                        <div>
                            <p className="first_text_site_classique" >
                                Chez <b>DevXR</b>, nous offrons une gamme complète de prestations adaptées à vos besoins spécifiques. Que vous recherchiez un site web classique ou une expérience numérique immersive, nous avons les compétences et l’expertise nécessaires pour réaliser vos projets avec succès.
                            </p>
                        </div>

                        <div className="classic_website_presentation_div">
                            <span>
                                <h4>Développement Web Classique</h4>
                                <p>Nous concevons des sites web classiques sur mesure, qu’ils soient statiques ou dynamiques, One Page ou des structures plus complexes. Nos sites sont entièrement responsives, garantissant une expérience utilisateur optimale sur tous les appareils, des smartphones aux ordinateurs de bureau. Nous mettons l'accent sur une interface moderne et ergonomique pour que votre site se distingue par son esthétique et sa fonctionnalité.</p>
                            </span>
                            <div>
                                <div>
                                    <span id="background_color_button_second"></span>
                                    <p id="display_iphone">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" /><path d="M11 4h2" /><path d="M12 17v.01" /></svg>
                                    </p>
                                    <p id="display_ipad">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-device-tablet"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16z" /><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /></svg>
                                    </p>
                                    <p id="display_mac">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19l18 0" /><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /></svg>
                                    </p>
                                </div>
                            
                                <img className="classique_website_img iphone_classic" alt="" src="https://devxr.fr/assets/images/site_classique/capture_iphone.png"/>
                                <img className="classique_website_img ipad_classic" alt="" src="https://devxr.fr/assets/images/site_classique/capture_ipad.png"/>
                                <img className="classique_website_img mac_classic" alt="" src="https://devxr.fr/assets/images/site_classique/capture_mac.png"/>
                            </div>
                        </div>

                        <div className="experience_immeersives_3D">
                            <div>
                                <h4>Une seule limite. <br/>Votre immagination.</h4>
                                {/* <div>
                                    <a href="https://paulmarechal.xyz" target="_blank" rel="noopener noreferrer">
                                        <video className="video" src="https://devxr.fr/assets/video/capture_ecran_3D.mp4" loop autoPlay={true} muted></video>
                                    </a>
                                    <div>
                                        <a href="https://paulmarechal.xyz/new_cv/" target="_blank" rel="noopener noreferrer">
                                            <video className="video" src="https://devxr.fr/assets/video/capture_ecran_3D_second.mp4" loop autoPlay={true} muted></video>
                                        </a>
                                        <a href="https://catacombes.xyz" target="_blank" rel="noopener noreferrer">
                                            <video className="video" src="https://devxr.fr/assets/video/capture_ecran_3D_third.mp4" loop autoPlay={true} muted></video>
                                        </a>
                                    </div>
                                </div> */}
                            </div>

                            {/* <h4>Expériences Immersives en 3D.</h4> */}
                            <div className="text_experience_3D">
                                <p>Pour des présentations plus innovantes, nous réalisons des <b>sites web immersifs en 3D</b>. Ces sites sont parfaits pour <b>présenter vos produits</b> de manière captivante et originale. Les éléments de la scène sont <b>interactifs</b>, vous permettant d'explorer et de découvrir des projets.</p>
                                <p>Vous pouvez vous déplacer dans ces scènes en utilisant les flèches directionnelles et la souris. De plus, des <b>bonus cachés</b> sont intégrés dans la scène pour offrir une expérience ludique et engageante. N'hésitez pas à cliquer sur les éléments pour en découvrir davantage !</p>
                            </div>

                        </div>

                        <div className="exemple_different_reality">
                            <div id="exemple_different_button">
                                <span id="background_color_button_third"></span>
                            
                                <p id="vr_icon_exemple">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-badge-vr"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" /><path d="M7 9l2 6l2 -6" /></svg>
                                </p>

                                <p id="ar_icon_exemple">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-badge-ar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" /><path d="M7 13h3" /><path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" /></svg>
                                </p>
                            </div>
                            
                            <div className="realite_virtuelle_exemple">
                                <div>
                                    <h4>Réalité Virtuelle (VR)</h4>
                                    <p>Nous développons des <b>sites en réalité virtuelle (VR)</b> pour des <b>visites virtuelles</b> de sites culturels, musées ou propriétés immobilières. Ces expériences immersives permettent aux utilisateurs de <b>plonger dans un environnement virtuel riche et détaillé</b>, offrant une nouvelle dimension d’interaction et de découverte.</p>
                                </div>
                                <video className="video" onClick={() => display_modal("#catacombes_div")} src="https://devxr.fr/assets/video/visite_guerinet_realite_virtuelle.mp4" loop autoPlay={true} muted ></video>
                            </div>

                            <div className="realite_augmente_exemple">
                                <div>
                                    <h4>Réalité Augmentée (AR)</h4>
                                    <p>Nous créons des <b>applications web en réalité augmentée (AR)</b> pour des expériences interactives uniques. Après avoir scanné un QR code ou chargé une page, les utilisateurs peuvent <b>visualiser des objets virtuels</b> ou obtenir des <b>informations supplémentaires</b>. Ces applications permettent de créer des expériences mémorables et engageantes qui enrichissent la réalité quotidienne.</p>
                                </div>
                                <video className="video" onClick={() => display_modal("#catacombes_div")} src="https://devxr.fr/assets/video/demo_telephone_realite_augmentee.mp4" loop muted autoPlay={true}></video>
                            </div>
                        </div>


                        <div className="seo_infos">
                            <h4>Optimisation SEO et Méthodes de Développement</h4>
                            <p>Nous nous occupons de l’<b>optimisation pour les moteurs de recherche (SEO)</b> afin de maximiser la visibilité de votre site. En utilisant les <b>dernières pratiques de développement</b> et en respectant les normes actuelles, nous assurons que votre site est à la pointe de la technologie et performant. Nous suivons les meilleures pratiques du secteur pour garantir la qualité et la pérennité de vos projets.</p>
                        </div>

                        <div className="contact_us_presentation">
                            <p>Nous nous engageons à fournir des solutions créatives et fonctionnelles qui répondent à vos attentes et dépassent vos objectifs. Explorez nos prestations et découvrez comment nous pouvons transformer vos idées en réalité. <b>Contactez-nous</b> pour discuter de vos projets et démarrer votre aventure avec DevXR.</p>
                        </div>
                    </div>

                    {/* Contact us */}
                    <div className="text_modale_div" id="contact_us_div">
                        <h1 id="title_catacombes_page">Contact Us</h1>
                        <div>
                            <p className="first_text_site_classique" >
                                Pour toute question ou demande de renseignements, <b>n'hésitez pas à nous contacter</b>. Nous sommes disponibles pour discuter de vos projets et vous fournir des solutions adaptées à vos besoins.
                            </p>
                        </div>

                        <div>
                            <p className="align_conter"><b>Envoyez-nous un message</b> et nous tacherons de vous recontacter dans les meilleurs délais. </p>
                                
                            <div>
                                <a href="contact@paulmarechal.xyz">
                                    <svg id="contact_mail" xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                    Mail
                                </a>
                            </div>
                             
                        </div>
                    </div>

                    {/* Augmented reality explication */}
                    <div className="text_modale_div" id="augmented_reality_explication_div">
                        <div className="return_back_arrow" onClick={() => display_modal("#product_div")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="46" height="46" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0" />
                                <path d="M5 12l6 6" />
                                <path d="M5 12l6 -6" />
                            </svg>
                        </div>
                        <h1 id="title_catacombes_page" >Réalité Augmentée <br/>Avancée.</h1>

                        <div className="third_div_video_text">
                            <span>
                                <h4>Immersion Augmentée.</h4>
                                <p>Plongez dans le monde fascinant de la <b>réalité augmentée</b> ! Grâce à cette technologie innovante, votre <b>smartphone</b> peut transformer des éléments du quotidien en expériences interactives et captivantes. En scannant des <b>images</b>, des <b>objets</b> ou des <b>codes QR</b>, vous découvrirez des <b>contenus enrichis</b> qui se superposent à la réalité. Cette <b>fonctionnalité</b> ouvre un nouvel univers d'<b>exploration</b> et de <b>découverte</b>, vous permettant de visualiser des <b>objets 3D</b>, des <b>infos interactives</b>, et bien plus encore, directement dans votre environnement.</p>
                            </span>
                            <video className="video" src="https://devxr.fr/assets/video/demo_telephone_realite_augmentee.mp4" loop muted autoPlay={true}></video>

                            <span>
                                {/* <img src="http://devxr.fr/assets/images/catacombes/qr_cabinet_old.png" alt="" /> */}
                                <span>
                                    <span id="background_color_button_1"></span>
                                    <p id="qr_code_v1_1">v1</p>
                                    <p id="qr_code_v2_1">v2</p>
                                </span>
                                <img id="guerinet_qr_v2_1" src="http://devxr.fr/assets/images/catacombes/qr_code_guerinet.png" alt="QR code qui permet d'afficher la salle Guerinet des Catacombes interdites de Paris en réalité augmentée" />
                                <img id="fdc_qr_v2_1" src="http://devxr.fr/assets/images/catacombes/qr_code_fdc.png" alt="QR code qui permet d'affciher la salle Bracitorium des Catacombes interdites de Paris en réalité augmentée" />

                                <img id="cabi_qr_v1_1" src="http://devxr.fr/assets/images/catacombes/cabi_qr_code_v1.png" alt="QR code qui permet d'afficher la salle Guerinet des Catacombes interdites de Paris en réalité augmentée" />
                                <img id="cabibis_qr_v1_1" src="http://devxr.fr/assets/images/catacombes/cabibis_qr_code_v1.png" alt="QR code qui permet d'affciher la salle Bracitorium des Catacombes interdites de Paris en réalité augmentée" />
                            </span>
                        </div>

                        <div className="explication_augmented_reality_text">
                            <p>La réalité augmentée que nous proposons va encore plus loin : elle vous permet de faire apparaître des <b>objets 3D</b>, <b>animés</b> ou <b>statiques</b>, non seulement à partir de QR codes, mais aussi depuis des <b>photos</b>, des devis, des <b>logos</b> ou tout <b>autre support</b>. Mieux encore, ces modèles 3D peuvent être visualisés directement depuis une <b>page web</b>, sans nécessiter l'installation d'une application spécifique. </p>
                            <p>Imaginez pouvoir explorer une <b>salle historique</b> ou un <b>objet d'art</b> en 3D simplement en cliquant sur un lien, sans avoir à maintenir votre appareil sur un QR code, comme démontré dans notre vidéo de présentation. Cette flexibilité offre une <b>immersion totale</b> et une facilité d'accès inégalée, pour une <b>expérience utilisateur</b> véritablement <b>augmentée</b>.</p>
                        </div>

                        
                        <div className="second_div_video_text">
                            <video className="video" src="https://devxr.fr/assets/video/demo_catacombes_realite_virtuelle.mp4" loop muted autoPlay={true} ></video>
                            <span>
                                <h4>Voyage Virtuel.</h4>
                                <p>Découvrez comment, en scannant un simple lien, un <b>modèle 3D</b> de taille réelle peut apparaître devant vous. Que ce soit pour explorer des <b>salles historiques</b>, <b>des appartements</b> à visiter, ou même des <b>œuvres d'art</b> et <b>meubles</b>, la réalité augmentée vous permet de créer des <b>visites immersives</b> et détaillées de vos produits et espaces. Laissez libre cours à votre imagination pour offrir des expériences uniques directement depuis votre écran.</p>
                                <span className="hover-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
                                        <path d="M9 12h6"/>
                                        <path d="M12 9v6"/>
                                    </svg>
                                    <a href="https://catacombes.xyz/displayRooms/" target="_blank" rel="noopener noreferrer" className="hover-text">
                                        Explorer les modèles en réalité augmentée
                                    </a>
                                </span>
                            </span>
                        </div>

                        <h4>Autres exemples</h4>
                        <div className="display_inline">
                            <img src="./assets/images/QR_code/fond_du_cresw.webp" title="Scannez le QR Code avec votre téléphone pour découvrir un objet 3D" alt="Salle du fond du crew dans les catacombes interdites de Paris en realité augmentée en scannant un QR code" />
                            <img src="./assets/images/QR_code/Lune1.webp" title="Scannez le QR Code avec votre téléphone pour découvrir un objet 3D" alt="Chaussures en réalité augmentée en scannant un QR code" />
                            <img src="./assets/images/QR_code/anubis.webp" title="Scannez le QR Code avec votre téléphone pour découvrir un objet 3D" alt="Voir les plans d'un appartement en réalité augmentée après avoir scanné un QR Code" />
                            <img src="./assets/images/QR_code/fond_du_crew_1.webp" title="Scannez le QR Code avec votre téléphone pour découvrir un objet 3D" alt="Permet de voir une patisserie en ralité augmentée après avoir scanné le QR Code" />
                        </div>

                    </div>

                    {/* Virtual explication div */}
                    <div className="text_modale_div" id="virtual_reality_explication_div">
                        <div className="return_back_arrow" onClick={() => display_modal("#product_div")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="46" height="46" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0" />
                                <path d="M5 12l6 6" />
                                <path d="M5 12l6 -6" />
                            </svg>
                        </div>

                        <h1 id="title_catacombes_page">
                            Réalité Virtuelle : <br/>Une Nouvelle Dimension.
                        </h1>

                        <div className="div_video_catacombes margin_video_div">
                            <img src="https://devxr.fr/assets/images/catacombes/oculus_screen_guerinet_catacombes.jpg" alt="Capture d'écran d'une visite des catacombes interdites avec un casque Oculus Quest 2 en réalité virtuelle." />
                            
                            <video className="video" src="https://devxr.fr/assets/video/visite_guerinet_realite_virtuelle.mp4" loop autoPlay={true} muted ></video>
                            
                            <img src="https://devxr.fr/assets/images/catacombes/graphiti_1863_guerinet_catacombes.jpg" alt="" />
                        </div>

                        <div className="explication_text">
                            <p>La <b>réalité virtuelle</b> (VR) est une technologie révolutionnaire qui vous permet de vous immerger complètement dans des mondes numériques, en vous donnant l'impression d'être physiquement présent dans un environnement simulé. À l'aide d'un casque comme l'<b>Oculus Quest</b>, vous pouvez explorer des environnements en trois dimensions qui réagissent à vos mouvements et à vos interactions, créant ainsi une expérience totalement immersive.</p>
                        </div>

                        <div className="div_text_under_images">
                            <div>
                                <p>Le grand avantage de l'Oculus Quest est qu'il ne nécessite aucune installation d'application : tout fonctionne directement en ligne, rendant l'accès à la réalité virtuelle plus simple et rapide pour tous les utilisateurs. Enfilez simplement votre casque, connectez-vous à l'interface, et plongez dans des aventures extraordinaires en quelques secondes.</p>
                                <br/>
                                <p>Avec la réalité virtuelle, vous ne vous contentez plus de regarder des images : vous êtes au cœur de l'action. Elle redéfinit la manière dont vous percevez le monde numérique, en vous ouvrant des portes vers des lieux et des expériences jusque-là inaccessibles.</p>
                            </div>
                            <video className="video video_explication" src="https://devxr.fr/assets/video/load_vr_experience.mp4" loop autoPlay={true} muted ></video>
                        </div>
                        
                        <div className="text_explication_vr">
                            <h1>Vivez des expériences uniques. </h1>
                            <div className="examples_virtual_reality">
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-castle" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#d0d0d0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M15 19v-2a3 3 0 0 0 -6 0v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14h4v3h3v-3h4v3h3v-3h4v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            <path d="M3 11l18 0" />
                                        </svg>
                                        <h4>Visites de lieux difficiles d'accès</h4>
                                    </span>
                                    <p>Explorez les profondeurs des catacombes, des grottes reculées ou des monuments historiques fermés au public.</p>
                                </div>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-torii" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#d0d0d0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M4 4c5.333 1.333 10.667 1.333 16 0" />
                                            <path d="M4 8h16" />
                                            <path d="M12 5v3" />
                                            <path d="M18 4.5v15.5" />
                                            <path d="M6 4.5v15.5" />
                                        </svg>
                                        <h4>Musées virtuels</h4>
                                    </span>
                                    <p>Promenez-vous dans des galeries d'art numériques, découvrez des œuvres célèbres de près et à votre rythme, tout en profitant de commentaires audio immersifs.</p>
                                </div>
                            </div>
                            <div className="examples_virtual_reality examples_virtual_reality_second">
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sitemap" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#d0d0d0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                            <path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                            <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
                                            <path d="M12 9l0 3" />
                                        </svg>
                                        <h4>Espaces multiples</h4>
                                    </span>
                                    <p>Naviguez dans des environnements variés, du fond des océans à la surface de Mars, en une simple interaction.</p>
                                </div>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-stadium" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#d0d0d0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 12m-8 0a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
                                            <path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" />
                                            <path d="M15 6h4v-3h-4v7" />
                                            <path d="M7 6h4v-3h-4v7" />
                                        </svg>
                                        <h4>Showrooms</h4>
                                    </span>
                                    <p>Entrez dans des showrooms virtuels pour découvrir les dernières innovations technologiques ou les nouvelles collections de mode sans quitter votre maison.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}



