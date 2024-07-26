import React, { useEffect, useRef } from 'react';
import $ from "jquery";

export default function Modal() {
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

                    <div className="second_div_site_classique_page">
                        <h4>Un Exemple de Réalisation : Site de Nettoyage d'Entreprise et de Voitures</h4>
                        <p>
                            L'un de nos récents projets est la création d'un site web pour une société spécialisée dans le <b>nettoyage d'entreprise et de véhicules</b>. Ce site est conçu en <b>version "one page"</b>, une approche moderne qui permet aux visiteurs de trouver rapidement et facilement toutes les informations nécessaires sans avoir à naviguer à travers de multiples pages.
                        </p>
                    </div>

                    <div className="third_div_site_classique_page">
                        <h4>Design Adaptatif et Navigation Intuitive</h4>
                        <p>Le site est entièrement <b>responsive</b>, s'adaptant parfaitement aux écrans de bureau, tablettes et smartphones. Ce design adaptatif garantit une <b>expérience utilisateur optimale</b>, quelle que soit la taille de l'écran. Nous avons mis un point d'honneur à rendre la navigation <b>intuitive et fluide</b>, permettant aux utilisateurs de parcourir les différents services offerts par la société sans être submergés par trop d'informations.</p>
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
            </div>
        </div>
    );
}
