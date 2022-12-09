import "./App.css";
import React, { useState } from "react";
import { ShowImages } from "./carousel";
import { lista } from "./imgs/imageList";

function Main() {
  const [show, setShow] = useState(null);

  function toggle(i) {
    setPosition(0)

    if (show === null) {
      return setShow(i);
    }
    setShow(null);
  }

  const [position, setPosition] = useState(0);
  const carousel = (pos) => {
    for(let i = 0; i < lista.length; i++){
      var soma = i + 1720 + 220 
    }
    if (position >= soma) {
      return setPosition(0)
    }
    
    setPosition(position + pos);
  };

  return (
    <div
      className="background"
      style={{ bottom: show === null ? "30px" : "200px" }}
    >
      
      <div 
        className={show === null ? 'arrow' : "arrow show"}
        onClick={() => {carousel(880)}}
      >  
        {'>'}
      </div>

      <button
        onClick={() => {
          toggle("show");
        }}
      >
        BackGround
      </button>

      <div className={show === null ? "wrapper" : "wrapper show"}>
        <div
          className="carousel"
          style={{ left: position != 0 ? `-${position}px` : "0px" }}
        >
          {lista.map(imgs => (
            <ShowImages details={imgs.details} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Main;
