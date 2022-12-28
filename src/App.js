import React from 'react';
import './App.css';
import Peliculas from "./component/peliculas.js";
import Cortos from "./component/cortos.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SideBar from "./component/sidebar";
import { SocialIcon } from 'react-social-icons';
import { Incoming } from './component/incoming';
import { NewProject } from './component/newProject';

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <header>
        <div id="page-wrap">
        </div>
      </header>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Peliculas></Peliculas>}>
            </Route>
            <Route path="/cortos" element={<Cortos></Cortos>}>
            </Route>
            <Route path="/incoming" element={<NewProject></NewProject>}>
            </Route>
            <Route path="/us" element={<Incoming></Incoming>}>
            </Route>
            {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
          </Routes>
        </div>
      </Router>
      <div className="contact_container">
        <p>Ponte en contacto con nosotros: CONTACTO@PANOJAFILMS.COM</p>
      </div>
      <footer>
        <div className="container_social">
          <div className="social-icon">
            <SocialIcon url="https://www.instagram.com/panoja.films"></SocialIcon>
          </div>
          <div className="social-icon">
            <SocialIcon url="https://www.youtube.com/channel/UCI3ytFpd0wEw_E9JAadLUZw"></SocialIcon>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;