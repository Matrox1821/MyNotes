import React, { Fragment } from "react";
import { Navbar } from "./navbar";
import { NavItemDropdown } from "./navbar/nav-item-dropdown";
import { NavItem } from "./navbar/nav-item";
import "./Navegacion.css";

export const Navegacion = () => {
  return (
    <Fragment>
      <Navbar>
        <NavItemDropdown name="Directorio"></NavItemDropdown>
        <NavItem link="nosotros" name="Quiénes somos?" />
        <NavItem link="foro" name="Foro" />
      </Navbar>
    </Fragment>
  );
};
