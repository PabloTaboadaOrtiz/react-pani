import React from "react";
import '../../src/App.css';

import CarouselComponent from "./carousel.js";

export default function Cortos() {
    return (
        <div className="content_corto">
            <div className="tittle_cortos"></div>
            <div className="cortos_card">
                <div className="caratula_corto"></div>
                <div className="video_corto">
                    <div className="video_corto_tittle"></div>
                    <div className="jose_cortos">
                    <iframe width="500" height="270" src="https://www.youtube.com/embed/7EX5GstZ3mE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                </div>
            </div>
            <br></br>
            <div className="cortos_card_1">
                <div className="caratula_corto_2"></div>
                <div className="video_corto">
                    <div className="video_corto_tittle_2"></div>
                    <div className="jose_cortos">
                        <iframe width="500" height="270" src="https://www.youtube.com/embed/mPxpRqWCo_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="cortos_card">
                <div className="caratula_corto_3"></div>
                <div className="video_corto">
                    <div className="video_corto_tittle_3"></div>
                    <div className="jose_cortos">
                        <iframe width="500" height="270" src="https://www.youtube.com/embed/qzEf31RHfrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     </div>
                </div>
            </div>
            <br></br>
            <div className="cortos_card_1">
                <div className="caratula_corto_4"></div>
                <div className="video_corto">
                    <div className="video_corto_tittle_4"></div>
                    <div className="jose_cortos">
                        <iframe width="500" height="270" src="https://www.youtube.com/embed/FsLGxsQGpvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="cortos_card">
                <div className="caratula_corto_5"></div>
                <div className="video_corto">
                    <div className="video_corto_tittle_5"></div>
                    <div className="jose_cortos">
                        <iframe width="500" height="270" src="https://www.youtube.com/embed/roj5IaZLne8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            {/* <div id="pepe">
                <CarouselComponent />
            </div>
            <div className="film-container">
                <div className="film_tittle"></div>
                <div id="jose">
                    <iframe width="80%" height="590" src="https://www.youtube.com/embed/purCfHQ5APY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>  */}

      </div>
    );
}