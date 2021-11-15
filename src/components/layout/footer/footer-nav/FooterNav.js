import "./FooterNav.css";
import HombreMochila from "./HombreMochila.svg"

import React from "react";
export const FooterNav=(props)=> {
  return (
    <div className="content-footer">
      <div className="imagen-cont">
        <img
            className="image-mochila"
            src={HombreMochila}
            alt="cargando hombre mochila"
          ></img>
        </div>
      <div className="items"><p>Redes Sociales</p>{props.children}</div>
          
      </div>
  )
}
