import { Button } from "../buttons/Button";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>MyNotes - Galarza Matías, Trejo Franco</h1>
      <div className="hero-paragraph">
        <p>
          &nbsp;&nbsp; Esta es una página para buscar distintos tipos de cosas,
          Hola HOLA HOLA HOLA como libros o música, donde podrás diseñar tu
          propia lista para no olvidar lo que más te gustó o llamó la atención
          wtfff
        </p>
      </div>
      <div className="hero-btns">
        <Button
          link="/libros"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Ver Libros
        </Button>
      </div>
    </div>
  );
};
