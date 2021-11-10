import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DropdownItem.css";
export const DropdownItem = (props) => {
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
    <Link
      to={props.link}
      className={isMenuMobile ? "link-menu mobile" : "link-menu"}
    >
      <p className="center">{props.name}</p>
      {props.children}
    </Link>
  );
};
