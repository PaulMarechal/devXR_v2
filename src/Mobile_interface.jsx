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
    <div className="container">
        <div className="grid">
            <div className="grid-item span-2-1" onClick={() => display_modal("#product_div")}>
                <h1>1</h1>
            </div>
            <div className="grid-item span-2-1">
                 <h1>2</h1>
            </div>
            <div className="grid-item span-1-4">
                <h1>3</h1>
            </div>
            <div className="grid-item span-2-2">
                <h1>4</h1>
            </div>
            <div className="grid-item span-1-2">
                <h1>5</h1>
            </div>
            <div className="grid-item span-3-2">
                <h1>6</h1>
            </div>
        </div>
    </div>
  );
}
