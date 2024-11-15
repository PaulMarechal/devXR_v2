import { useKeyboardControls } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import $ from "jquery";

export default function Interface() {
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  const [leftClick, setLeftClick] = useState(false);
  const [rightClick, setRightClick] = useState(false);
  const [mouseMoving, setMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (event.button === 0) {
        setLeftClick(true);
      } else if (event.button === 2) {
        setRightClick(true);
      }
    };

    const handleMouseUp = (event) => {
      if (event.button === 0) {
        setLeftClick(false);
      } else if (event.button === 2) {
        setRightClick(false);
      }
    };

    const handleMouseMove = () => {
      setMouseMoving(true);
      clearTimeout(window.mouseMoveTimeout);
      window.mouseMoveTimeout = setTimeout(() => setMouseMoving(false), 100); 
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
        <p className="text_intro">Explorez notre scène interactive et cliquez sur les éléments pour découvrir nos services. Que ce soit pour un site web classique qui valorise votre entreprise ou des expériences immersives en réalité augmentée, virtuelle ou mixte, nous avons ce qu'il vous faut.</p>
      </div>

      <div>
        <div className="controls keyboard">
          <div className="raw">
            <div className={`key ${forward ? 'active' : ''}`}></div>
          </div>
          <div className="raw">
            <div className={`key ${leftward ? 'active' : ''}`}></div>
            <div className={`key ${backward ? 'active' : ''}`}></div>
            <div className={`key ${rightward ? 'active' : ''}`}></div>
          </div>
          <div className="raw">
            <div className={`key large ${jump ? 'active' : ''}`}></div>
          </div>
        </div>
        <div className="controls mouse">
          <div className="raw">
            <div className={`key_mouse left_clic ${leftClick ? 'active' : ''}`}></div>
            <div className={`key_mouse right_clic ${rightClick ? 'active' : ''}`}></div>
          </div>
          <div className="raw">
          <div className={`key_mouse large_mouse ${mouseMoving ? 'active' : ''}`}></div>
          </div>
          <div className="raw"></div>
        </div>
      </div>
    </div>
  );
}
