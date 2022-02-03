import React from "react";
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-slider-responsive'
export default function CarouselComponent() {
    return (
        <Carousel  autoplay multiply={3}>
        <div>
          <img src="../FOTOS1.png" alt="test-slide" />
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
        </div>

        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS2.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS3.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS4.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS5.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS6.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS7.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS8.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS9.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS10.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS11.png" alt="test-slide" />
        </div>
        <div>
          {/* <img src="../FOTOS2.png" alt="test-slide" /> */}
          <img src="../FOTOS12.png" alt="test-slide" />
        </div>
      </Carousel>
    );
}