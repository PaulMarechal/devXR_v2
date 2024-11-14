import React from 'react';

const Choose_site = ({ onClose }) => {
    const goToSiteClassique = () => {
        window.location.href = "https://devxr.fr/site_classique";
    };

    return (
        <div className="choose-site-modal">
            <div className="choose-site-content">
                <div className="choose-site-option glassmorphism_button_header_white" onClick={goToSiteClassique}>
                    <h2>Site classique</h2>
                    <p>Explorez le site DevXR en version 2D classique, offrant une navigation standard et simple.</p>
                    <img src="https://devxr.fr/assets/images/logo/logo_classique_devxr_1200_630.png" alt="Capture d'écran du site classique de DevXR montrant la page principale avec des images des projets réalisés." />
                </div>
                <div className="choose-site-option glassmorphism_button_header_white" onClick={onClose}>
                    <h2>Site immersif</h2>
                    <p>Plongez dans le site DevXR en version immersive 3D, où vous pouvez vous déplacer avec les flèches.</p>
                    <img src="https://devxr.fr/assets/images/logo/logo_devxr_1200_630.png" alt="Capture d'écran du site immersif de DevXR avec le robot pour la navigation dans la scène principale." />
                </div>
            </div>
        </div>
    );
};

export default Choose_site;
