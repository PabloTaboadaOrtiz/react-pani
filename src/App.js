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
            {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
          </Routes>
        </div>
      </Router>
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