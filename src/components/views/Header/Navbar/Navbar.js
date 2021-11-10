import { useState, useEffect } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import MyNotes from "./MyNotes.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const cambiarAncho = () => {
    setWidth(window.innerWidth);
  };
  const handleClick = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);
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
    <nav className="navbar">
      <div className="logo">
        <Link to="/inicio" onClick={closeMobileMenu}>
          <img className="img" src={MyNotes} alt="Logo MyNotes" />
        </Link>
        <Link to="/inicio" className="logo-span" onClick={closeMobileMenu}>
          <span>MyNotes</span>
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {isMenuOpen ? (
          <IoCloseSharp className="io-close" />
        ) : (
          <IoMenuSharp className="io-menu" />
        )}
      </div>
      <div className={isMenuMobile ? "nav-menu desactive" : "nav-menu"}>
        {props.children}
      </div>
      <div
        className={
          isMenuMobile
            ? `menu-mobile ${isMenuOpen ? "active" : ""}`
            : "menu-mobile desactive"
        }
      >
        {props.children}
      </div>
    </nav>
  );
};
