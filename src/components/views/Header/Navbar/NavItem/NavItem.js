import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";
export const NavItem = (props) => {
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
      <Link
        className={
          isMenuMobile ? "nav-links center mobile" : "nav-links center"
        }
        to={`/${props.link}`}
      >
        {props.name}
      </Link>
    </div>
  );
};
