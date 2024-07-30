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
    // const scrollRef = useRef()

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

        $("#qr_code_v1").on("click", () =>{
            $("#background_color_button").css("margin-left", "0")
            $("#guerinet_qr_v2").css("opacity", "0");
            $("#fdc_qr_v2").css("opacity", "0");
            setTimeout(() => {       
                $("#cabi_qr_v1").css("opacity", "1");
                $("#cabibis_qr_v1").css("opacity", "1");
            }, 450);
        })

        $("#qr_code_v2").on("click", () =>{
            $("#background_color_button").css("margin-left", "39px")
            $("#cabi_qr_v1").css("opacity", "0");
            $("#cabibis_qr_v1").css("opacity", "0");
            setTimeout(() => {       
                $("#guerinet_qr_v2").css("opacity", "1");
                $("#fdc_qr_v2").css("opacity", "1");
            }, 450);
        })

        return () => {
            $(".close_icon").off("click");
            // scroll.destroy(); 
        };
    }, []);

    return (
        <>
            <div className="header_banner">
                <div className="button_header_banner glassmorphism_button_header_white" onClick={() => display_modal("#product_div")} >
                    <h4>Product</h4>
                </div>
                <div className="button_header_banner glassmorphism_button_header_white" onClick={() => display_modal("#about_us_div")} >
                    <h4>About us</h4>
                </div>

                <div className="button_header_banner glassmorphism_button_header_white button_header_banner_logo"></div>

                <div className="button_header_banner glassmorphism_button_header_white" onClick={() => display_modal("#prestations_div")}>
                    <h4>Prestations</h4>
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
                        <div className="text_catacombes_page" >
                            <h1 id="title_catacombes_page" >Découvrez les Catacombes Interdites<br/> de Paris avec catacombes.xyz</h1>
                            <p id="first_text_catacombes_page" >
                                Plongez dans l'histoire secrète de Paris 
                                <span> grâce à notre projet innovant, <b>catacombes.xyz</b>. Ce site unique vous offre une <b>exploration immersive</b> des catacombes interdites de la Rive Gauche de Paris. Découvrez les carrières de Paris comme jamais auparavant, avec des <b>visites en 3D</b>, des expériences de <b>réalité virtuelle (VR) et de réalité augmentée (AR)</b>.</span>
                            </p>
                            <div id="second_div_text_catacombes_page">
                                <h4>Photogrammétrie de Haute Précision.</h4>
                                <p>Grâce à la technologie de <b>photogrammétrie avancée</b>, chaque salle des catacombes a été minutieusement scannée et modélisée en 3D. Cette technique permet de capturer les moindres détails, offrant une <b>représentation fidèle</b> et époustouflante de ces espaces souterrains historiques.</p>
                            </div>

                            <img  id="first_image_room_guerinet" src="https://devxr.fr/assets/images/catacombes/catacombes_page/guerinet_room_catacombes.png" alt="Salle Guerinet - catacombes interdites de Paris" />

                            <h4 className="title_modale_presentation">Immersion Digitale.</h4>
                            <div className="div_video_catacombes">
                                <img src="https://devxr.fr/assets/images/catacombes/oculus_screen_guerinet_catacombes.jpg" alt="Capture d'écran d'une visite des catacombes interdites avec un casque Oculus Quest 2 en réalité virtuelle." />

                                <video src="https://devxr.fr/assets/video/visite_guerinet_realite_virtuelle.mp4" loop autoPlay={true} muted></video>
                                
                                <img src="https://devxr.fr/assets/images/catacombes/graphiti_1863_guerinet_catacombes.jpg" alt="" />
                            </div>

                            <div className="div_text_under_images">
                                <p>Naviguez à travers les catacombes directement depuis votre <b>navigateur web</b>, avec une expérience totalement en 3D. Pour une immersion encore plus profonde, utilisez un <b>casque de réalité virtuelle</b>.</p>
                                <p>Explorez chaque recoin comme si vous y étiez, ressentez l'<b>ambiance unique</b> et découvrez les secrets enfouis sous la ville lumière.</p>
                            </div>


                            <div className="second_div_video_text">
                                <video src="https://devxr.fr/assets/video/demo_catacombes_realite_virtuelle.mp4" loop muted autoPlay={true} ></video>
                                <span>
                                    <h4>Exploration Interactive.</h4>
                                    <p>Transformez votre smartphone en une fenêtre vers les catacombes. <b>Scannez des cartes</b> spécifiques que nous avons dispersées dans les carrières et regardez les salles en 3D <b>apparaître directement</b> en réalité augmentée. Promenez-vous librement à travers ces représentations virtuelles, examinez la <b>taille</b>, la <b>hauteur</b> et les <b>détails fascinants</b> de chaque salle.</p>
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
                                    <p >Sur notre site, nous avons également inclus une section dédiée aux cartes des carrières. Chaque carte, lorsqu'elle est <b>scannée avec votre téléphone</b>, fait apparaître une <b>salle en réalité augmentée</b>. Cette fonctionnalité interactive permet une nouvelle dimension d'<b>exploration</b> et de <b>découverte</b>, offrant une <b>perspective unique</b> sur la taille et la composition des catacombes.</p>
                                </span>
                                <video src="https://devxr.fr/assets/video/demo_telephone_realite_augmentee.mp4" loop muted autoPlay={true}></video>
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

                        <div className="title_navigo_section">
                            <h1>Paris XR Guide: <br/>Navigo Augmentée.</h1>
                            <p>Découvrez une nouvelle façon de vous déplacer dans Paris avec notre <b>Carte Navigo Interactive</b>, un outil révolutionnaire pour les voyageurs urbains. Grâce à la réalité augmentée, votre simple carte Navigo se transforme en une <b>carte du métro de Paris en 3D</b>.</p>
                        </div>

                        <div className="second_div_navigo_page">
                            <video src="https://devxr.fr/assets/video/demo_navigo_realite_augmentee.mp4" loop muted autoPlay={true}></video>
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
                        <h1 id="title_catacombes_page" >Présentation de la Page Interactive <br/>d'aero-bay.com</h1>

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
                            <video src="https://devxr.fr/assets/video/screen_helico_3D.mp4" loop muted autoPlay={true}></video>
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
                            <video src="https://devxr.fr/assets/video/capture_ecran_site_classique.mp4" loop autoPlay={true} muted></video>
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

                        <div className="last_text_site_classique_page">
                            <p>
                                En choisissant DevXR pour la création de votre site web, vous bénéficiez d'un design soigné, d'une navigation intuitive et d'une <p>présentation claire de vos services</p>. Que vous cherchiez à attirer de nouveaux clients ou à fournir des informations clés à vos utilisateurs, nous sommes là pour vous aider à réaliser vos objectifs avec un site web de qualité.
                            </p>
                        </div>

                    </div>

                    {/* Realisations tab */}
                    <div className="text_modale_div" id="product_div">
                        <h1 id="title_catacombes_page">Nos Solutions Digitales.</h1>

                        <div class="display_infos_product">
                            {/* Sites 2D */}
                            <div className="realisation_infos_div_first">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="44"  height="44"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world-www">
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
                            <div className="realisation_infos_div_first">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badge-3d" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                    <path d="M7 9.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5" />
                                    <path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                                </svg>
                                <h4>Site Immersif en 3D</h4>
                                <p>Créez une expérience utilisateur captivante avec des sites web en 3D. Idéal pour mettre en valeur vos produits ou services de manière interactive et innovante, offrant une immersion totale dans votre univers.</p>
                            </div>

                            {/* augmented reality */}
                            <div className="realisation_infos_div_first">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-augmented-reality" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                            <div class="realisation_infos_div_second">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-vision-pro" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 7c1.143 0 2.235 .035 3.275 .104c1.017 .068 1.95 .207 2.798 .42c.813 .203 1.52 .505 2.119 .909a3.903 3.903 0 0 1 1.328 1.531c.326 .657 .48 1.48 .48 2.466c0 1.006 -.189 1.91 -.574 2.707c-.375 .779 -.886 1.396 -1.537 1.848a3.696 3.696 0 0 1 -2.16 .66c-.509 0 -.97 -.068 -1.382 -.21a5.84 5.84 0 0 1 -1.17 -.548a18.45 18.45 0 0 1 -1.045 -.695a9.104 9.104 0 0 0 -1.001 -.63a2.376 2.376 0 0 0 -1.13 -.301c-.373 0 -.75 .097 -1.132 .3c-.316 .17 -.65 .38 -1 .63c-.322 .23 -.67 .462 -1.047 .695a5.78 5.78 0 0 1 -1.168 .548c-.413 .142 -.872 .21 -1.378 .21a3.706 3.706 0 0 1 -2.165 -.659c-.651 -.452 -1.162 -1.07 -1.537 -1.848c-.385 -.798 -.574 -1.7 -.574 -2.709c-.004 -.98 .15 -1.802 .477 -2.46a3.897 3.897 0 0 1 1.33 -1.531c.6 -.403 1.307 -.704 2.12 -.907a16.088 16.088 0 0 1 2.8 -.423c1.04 -.071 2.13 -.107 3.273 -.107z" />
                                </svg>
                                <h4>Réalité Virtuelle (VR)</h4>
                                <p>Plongez vos visiteurs dans un environnement virtuel complet accessible avec un casque de type Oculus Quest 2. Idéal pour les visites virtuelles de lieux culturels, les démonstrations de produits ou les formations immersives.</p>
                            </div>

                            {/* Mixed reality */}
                            <div className="realisation_infos_div_second">
                                <span>
                                    {/* AR */}
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badge-ar" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                        <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
                                        <path d="M7 13h3" />
                                        <path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
                                    </svg>

                                    {/* VR */}
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badge-vr" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                        <path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
                                        <path d="M7 9l2 6l2 -6" />
                                    </svg>

                                    {/* 3D */}
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badge-3d" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                            <p className="first_text_site_classique" >
                                <b>Chez DevXR</b>, nous sommes une équipe passionnée par la fusion des arts et des technologies pour créer des expériences numériques exceptionnelles. Nous combinons expertise technique et créativité pour réaliser des projets qui se démarquent et répondent aux besoins uniques de nos clients.
                            </p>
                        </div>

                        <div>
                            <p><b>Notre fondateur</b>, Paul Maréchal, a débuté sa carrière dans le secteur de la restauration, où il a occupé des postes de directeur de restaurant, allant du salon de thé aux restaurants étoilés. Cette expérience lui a permis de développer des compétences en gestion, en service client et en attention aux détails, des qualités qui sont aujourd'hui au cœur de notre approche en développement web.</p>
                        </div>

                        <div>
                            <p>Après avoir décidé de changer de carrière, il a entrepris des études de développement à l'<b>ESIEE Paris Tech</b>. Durant cette période, il a travaillé sur divers projets en groupe et en solo, avec des langages de programmation obligatoires, et a eu l'occasion de présenter ses travaux devant un jury composé de professeurs et de professionnels. C'est à ce moment-là qu'il a découvert sa passion pour le développement 3D.</p>
                        </div>

                        <div>
                            <p>Poursuivant sa formation à <b>La Sorbonne</b>, sur le campus Pierre et Marie Curie à Paris, il a approfondi ses connaissances en développement et en architecture réseau. Cette étape lui a permis d'acquérir une compréhension plus approfondie des technologies web et des systèmes informatiques.</p>
                        </div>

                        <div>
                            <p>Après sa formation, il a rejoint <b>Aero-Bay</b> en tant que développeur front-end, où il a rapidement été promu responsable IT. Dans ce rôle, il a refait complètement le design du site et a proposé de nouveaux outils, contribuant ainsi à l'amélioration significative de la présence en ligne de l'entreprise.</p>
                        </div>

                        <div>
                            <p>Fort de son expérience, il a ensuite été invité à donner des cours de <b>3D</b> à l'<b>école IIM Digital School</b> pour le master spécialisé en design et 3D à Nanterre. Cette expérience lui a permis de partager ses connaissances avec la prochaine génération de créateurs et de continuer à évoluer dans le domaine de la 3D.</p>
                        </div>

                        <div>
                            <p>Chez DevXR, nous croyons en l'innovation constante et en l'exploration de nouvelles technologies pour offrir à nos clients des solutions à la fois créatives et fonctionnelles. Nous nous engageons à dépasser vos attentes et à transformer vos idées en réalité, en alliant expertise technique et passion pour le design.</p>
                        </div>

                        <div>
                            <p>Nous sommes impatients de collaborer avec vous et de donner vie à vos projets les plus ambitieux.</p>
                        </div>
                    </div>

                    {/* Prestations */}
                    <div className="text_modale_div" id="prestations_div">
                        <h1 id="title_catacombes_page">Nos Services</h1>
                        <div>
                            <p className="first_text_site_classique" >
                                Chez <b>DevXR</b>, nous offrons une gamme complète de prestations adaptées à vos besoins spécifiques. Que vous recherchiez un site web classique ou une expérience numérique immersive, nous avons les compétences et l’expertise nécessaires pour réaliser vos projets avec succès. Découvrez nos services ci-dessous :
                            </p>
                        </div>

                        <div>
                            <h4>Développement Web Classique</h4>
                            <p>Nous concevons des sites web classiques sur mesure, qu’ils soient statiques ou dynamiques, One Page ou des structures plus complexes. Nos sites sont entièrement responsives, garantissant une expérience utilisateur optimale sur tous les appareils, des smartphones aux ordinateurs de bureau. Nous mettons l'accent sur une interface moderne et ergonomique pour que votre site se distingue par son esthétique et sa fonctionnalité.</p>
                        </div>

                        <div>
                            <h4>Optimisation SEO et Méthodes de Développement</h4>
                            <p>Nous nous occupons de l’<b>optimisation pour les moteurs de recherche (SEO)</b> afin de maximiser la visibilité de votre site. En utilisant les <b>dernières pratiques de développement</b> et en respectant les normes actuelles, nous assurons que votre site est à la pointe de la technologie et performant. Nous suivons les meilleures pratiques du secteur pour garantir la qualité et la pérennité de vos projets.</p>
                        </div>

                        <div>
                            <h4>Expériences Immersives en 3D</h4>
                            <p>Pour des présentations plus innovantes, nous réalisons des <b>sites web immersifs en 3D</b>. Ces sites sont parfaits pour <b>présenter vos produits</b> de manière captivante et originale. Les éléments de la scène sont <b>interactifs</b>, vous permettant d'explorer et de découvrir des projets réalisés par notre équipe. Vous pouvez vous déplacer dans ces scènes en utilisant les flèches directionnelles et la souris. De plus, des <b>bonus cachés</b> sont intégrés dans la scène pour offrir une expérience ludique et engageante. N'hésitez pas à cliquer sur les éléments pour en découvrir davantage !</p>
                        </div>

                        <div>
                            <h4>Réalité Virtuelle (VR)</h4>
                            <p>Nous développons des <b>sites en réalité virtuelle (VR)</b> pour des <b>visites virtuelles</b> de sites culturels, musées ou propriétés immobilières. Ces expériences immersives permettent aux utilisateurs de <b>plonger dans un environnement virtuel riche et détaillé</b>, offrant une nouvelle dimension d’interaction et de découverte.</p>
                        </div>

                        <div>
                            <h4>Réalité Augmentée (AR)</h4>
                            <p>Nous créons des <b>applications web en réalité augmentée (AR)</b> pour des expériences interactives uniques. Après avoir scanné un QR code ou chargé une page, les utilisateurs peuvent <b>visualiser des objets virtuels</b> ou obtenir des <b>informations supplémentaires</b>. Ces applications permettent de créer des expériences mémorables et engageantes qui enrichissent la réalité quotidienne.</p>
                        </div>

                        <div>
                            <p>Nous nous engageons à fournir des solutions créatives et fonctionnelles qui répondent à vos attentes et dépassent vos objectifs. Explorez nos prestations et découvrez comment nous pouvons transformer vos idées en réalité. <b>Contactez-nous</b> pour discuter de vos projets et démarrer votre aventure avec DevXR.</p>
                        </div>
                    </div>

                    {/* Contact us */}
                    <div className="text_modale_div" id="contact_us_div">
                        <h1 id="title_catacombes_page">Contact Us</h1>
                        <div>
                            <p className="first_text_site_classique" >
                                Pour toute question ou demande de renseignements, <b>n'hésitez pas à nous contacter</b>. Notre équipe est disponible pour discuter de vos projets et vous fournir des solutions adaptées à vos besoins.
                            </p>
                        </div>

                        <div>
                            <p><b>Envoyez-nous un message</b> via le formulaire de contact ou directement par email à <a href="contact@paulmarechal.xyz">DevXR</a> ou par <a href="tel:+33648357374">téléphone</a>. Nous sommes impatients de vous aider !</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
