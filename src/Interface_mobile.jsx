import React, { useEffect, useState } from 'react';
import $ from "jquery";

export default function Interface_mobile() {

  useEffect(() => {
    $(".close_icon_start").on("click", function () {
      $(".interface").css("opacity", "0");
      setTimeout(() => {
        $(".interface").css("display", "none");
      }, 400);
    });

    return () => {
      $(".close_icon_start").off("click");
    };
  }, []);

  return (
    <div className="interface">
        <div className="welcome_modal">
            <div className="close_icon_start" title="Fermer la fenêtre">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </div>
            <p className="main_title_restart">
                <span>Bienvenue sur </span>
                <br />
                <span className="name_font">DevXR.fr</span>
            </p>
            <p className="text_intro">
                Pour profiter pleinement du site web en version immersive merci de vous 
                connecter depuis un ordinateur. 
            </p>
        </div>
    </div>
  );
}
