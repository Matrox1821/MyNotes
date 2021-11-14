import React, { Fragment } from "react";
import { Navbar } from "./navbar";
import { NavItemDropdown } from "./navbar/nav-item-dropdown";
import { NavItem } from "./navbar/nav-item";
import "./Navegacion.css";
import { routes } from "../../routers/helpers/routes";

export const Navegacion = () => {
  return (
    <Fragment>
      <Navbar>
        <NavItemDropdown name="Directorio"></NavItemDropdown>
        <NavItem link={routes.nosotros} name="Quiénes somos?" />
        <NavItem link={routes.foro} name="Foro" />
      </Navbar>
    </Fragment>
  );
};
