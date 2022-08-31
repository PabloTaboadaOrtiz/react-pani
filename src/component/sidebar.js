import React from "react";
import { elastic as Menu } from "react-burger-menu";

export default props => {
  return (
    <div className="burger-menu">
      <Menu right {...props}>
        <a className="menu-item" href="/">
          Peliculas
        </a>

        <a className="menu-item" href="/cortos">
          Cortometrajes
        </a>

        <a className="menu-item" href="/incoming">
          Nuevos proyectos
        </a>

        <a className="menu-item" href="/us">
          Nosotros
        </a>

      </Menu>
    </div>// Pass on our props
  );
};
