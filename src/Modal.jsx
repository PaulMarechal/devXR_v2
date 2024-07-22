import { useEffect } from 'react';
import $ from "jquery";

export default function Modal() {
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
        <div className="modal_infos">
            <div className="close_icon" title="Fermer la fenêtre">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </div>

            <div className="text_modale_div" id="catacombes_div">
                <div className="text_catacombes_page">
                    <h1 id="title_catacombes_page">Découvrez les Catacombes Interdites<br/> de Paris avec catacombes.xyz</h1>
                    <p id="first_text_catacombes_page">
                        Plongez dans l'histoire secrète de Paris
                        <span>grâce à notre projet innovant, catacombes.xyz. Ce site unique vous offre une exploration immersive des catacombes interdites de la Rive Gauche de Paris. Découvrez les carrières de Paris comme jamais auparavant, avec des visites en 3D, des expériences de réalité virtuelle (VR) et de réalité augmentée (AR).</span>
                    </p>
                    <div id="second_div_text_catacombes_page">
                        <h4>Photogrammétrie de Haute Précision</h4>
                        <p>Grâce à la technologie de photogrammétrie avancée, chaque salle des catacombes a été minutieusement scannée et modélisée en 3D. Cette technique permet de capturer les moindres détails, offrant une représentation fidèle et époustouflante de ces espaces souterrains historiques.</p>
                    </div>

                    <img id="first_image_room_guerinet" src="https://devxr.fr/assets/images/catacombes/catacombes_page/guerinet_room_catacombes.png" alt="Salle Guerinet - catacombes interdites de Paris" />

                    <h4>Visites en 3D et VR</h4>
                    <p>Naviguez à travers les catacombes directement depuis votre navigateur web, avec une expérience totalement en 3D. Pour une immersion encore plus profonde, utilisez un casque de réalité virtuelle, tel que l'Oculus Quest 2. Explorez chaque recoin comme si vous y étiez, ressentez l'ambiance unique et découvrez les secrets enfouis sous la ville lumière.</p>

                    <h4>Réalité Augmentée sur Mobile</h4>
                    <p>Transformez votre smartphone en une fenêtre vers les catacombes. Scannez des cartes spécifiques que nous avons dispersées dans les carrières et regardez les salles en 3D apparaître directement sur votre écran. Promenez-vous librement à travers ces représentations virtuelles, examinez la taille, la hauteur et les détails fascinants de chaque salle.</p>

                    <h4>Cartes et Interactions</h4>
                    <p>Sur notre site, nous avons également inclus une section dédiée aux cartes des carrières. Chaque carte, lorsqu'elle est scannée avec votre téléphone, fait apparaître une salle en réalité augmentée. Cette fonctionnalité interactive permet une nouvelle dimension d'exploration et de découverte, offrant une perspective unique sur la taille et la composition des catacombes.</p>

                    <h4>Une Exploration Immersive</h4>
                    <p>catacombes.xyz n'est pas seulement un site web, c'est une véritable aventure numérique. Que vous soyez un passionné d'histoire, un amateur de technologie ou simplement curieux, notre plateforme vous offre une expérience immersive et éducative sans pareille. Plongez dans l'obscurité mystérieuse des catacombes de Paris et découvrez des salles cachées, des histoires oubliées et des merveilles architecturales sous un nouvel angle.</p>

                    <p>Visitez <a href="https://catacombes.xyz">catacombes.xyz</a> dès aujourd'hui et laissez-vous transporter dans les profondeurs historiques de Paris.</p>
                </div>
            </div>

            <div className="text_modale_div" id="metro_map_div">
                <h1>Test metro</h1>
            </div>
        </div>
    );
}
