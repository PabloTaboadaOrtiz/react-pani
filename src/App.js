import React from 'react';
import './App.css';
import CarouselComponent from "./component/carousel.js";
import SideBar from "./component/sidebar";
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <header>
        <div id="page-wrap">
        </div>
      </header>
      <div className="content">
        <div className="tittle"></div>
        <div id="film">
            <div className="caratula"></div>
            <div className="sinopsis"></div>
        </div>
        <div id="pepe">
          <CarouselComponent />
        </div>
        <div class="film-container">
          <div className="film_tittle"></div>
          <div id="jose">
            <iframe width="80%" height="590" src="https://www.youtube.com/embed/purCfHQ5APY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

      </div>
      <footer>
        <div className="social-icon">
          <SocialIcon url="https://www.instagram.com/tabulands2020/"></SocialIcon>
        </div>
        <div className="social-icon">
          <SocialIcon url="https://www.youtube.com/channel/UCI3ytFpd0wEw_E9JAadLUZw"></SocialIcon>
        </div>
      </footer>
    </div>
  );
}
export default App;