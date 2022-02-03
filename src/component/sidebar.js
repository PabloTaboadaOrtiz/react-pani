import React from "react";
import { elastic as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu right {...props}>
      <a className="menu-item" href="/">
        Peliculas
      </a>

      <a className="menu-item" href="/cortos">
        Cortometrajes
      </a>

      <a className="menu-item" href="/pizzas">
        About Us
      </a>
    </Menu>
  );
};
