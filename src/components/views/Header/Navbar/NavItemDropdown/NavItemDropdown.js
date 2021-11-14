import { React, useState, useEffect } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { DropdownItem } from "./DropdownItem/DropdownItem";
import "./NabItemDropdown.css";
export const NavItemDropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const cambiarAncho = () => {
    setWidth(window.innerWidth);
  };
  const showMobileMenu = () => {
    if (width <= 960) {
      setIsMenuMobile(true);
    } else {
      setIsMenuMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", cambiarAncho);
    showMobileMenu();
    return () => {
      window.removeEventListener("resize", cambiarAncho);
    };
  });
  return (
    <div className={isMenuMobile ? "nav-item mobile" : "nav-item"}>
      <div
        className={
          isMenuMobile ? "nav-links center mobile" : "nav-links center"
        }
        onClick={() => setOpen(!open)}
      >
        {props.name}
        <IoChevronDownSharp className="io-chevron-down-sharp" />
      </div>
      <div
        className={
          open
            ? `dropdown${isMenuMobile ? " mobile" : ""} active`
            : `dropdown${isMenuMobile ? " mobile" : ""}`
        }
      >
        <DropdownItem link="libros" name="Libros"></DropdownItem>
        <DropdownItem link="musica" name="Música"></DropdownItem>
      </div>
    </div>
  );
};
