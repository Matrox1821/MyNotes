import React,{ Fragment } from "react";
import { Navbar } from "./Navbar";
import { NavItemDropdown } from "./Navbar/NavItemDropdown";
import { NavItem } from "./Navbar/NavItem";
import "./Header.css";

export const Header = () => {
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
