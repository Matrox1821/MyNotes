import { Button } from "../buttons/Button";
import "./HeroSection.css";
import React from "react";
import { routes } from "../../routers/helpers/routes";
export const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>MyNotes </h1>
      <div className="hero-paragraph">
        <p>
          &nbsp;&nbsp; Esta es una página para buscar distintos tipos de cosas,
          como mangas o animes, donde podrás diseñar tu propia lista para no
          olvidar lo que más te gustó o llamó la atención.
        </p>
      </div>
      <div className="hero-btns">
        <Button
          link={routes.mangas}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Ver Mangas
        </Button>
        <Button
          link={routes.animes}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Ver Animes
        </Button>
      </div>
    </div>
  );
};
