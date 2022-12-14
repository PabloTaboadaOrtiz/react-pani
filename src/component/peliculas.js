import React from "react";
import '../../src/App.css';

import CarouselComponent from "./carousel.js";

export default function Peliculas() {
    return (
      <div className="content">
        <div className="title-container">
          <div className="tittle"></div>
        </div>
        <div id="pepe">
          <CarouselComponent />
        </div>
        <div id="film">
            <div className="caratula"></div>
            <div className="sinopsis"></div>
        </div>
        <div className="film-container">
          <div className="film_tittle"></div>
          <div id="jose">
            <iframe className="iframe"  src="https://www.youtube.com/embed/purCfHQ5APY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
}