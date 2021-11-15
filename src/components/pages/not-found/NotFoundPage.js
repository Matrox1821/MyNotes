import React from "react";
import HombreMochila from "./HombreMochila.svg";
import "./NotFoundPage.css";
export const NotFoundPage = () => {
  return (
    <div className="content-error">
      <h1>
        <span className="error">Error 404:</span> Lo sentimos, esta página no
        existe
      </h1>
      <img className="img-error" src={HombreMochila} alt="hombre mochila" />
    </div>
  );
};
