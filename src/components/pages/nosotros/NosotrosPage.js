import "../../ui/hero-section/HeroSection.css";
import React from 'react';

export const NosotrosPage = () =>{
  return (
    <div className="hero-container">
      <h1 className="title-nosotros">Nosotros</h1>
      <hr />
      <div className="hero-paragraph">
        <h1 className="nosotrosUpperCase">Quiénes somos</h1>
        <br />
        <p>
          Integrantes:
          <br />
          <br />
          Matias Galarza; Trejo Franco; Lagraña Ricardo; Miranda Dante; Lopez
          Fabricio.
        </p>
        <p>Curso 7°3°</p>
        
        <div class="cards">
          <div>
            <img src="img/foto1.png" />
            <h3>Galarza Matias</h3>
          </div>
          <div>
            <img src="img/foto2.png" />
            <h3>Miranda Dante</h3>
          </div>
          <div>
            <img src="img/foto3.png" />
            <h3>Trejo Franco</h3>
          </div>
          <div>
            <img src="img/foto4.png" />
            <h3>Lagraña Ricardo</h3>
          </div>
          <div>
            <img src="img/foto5.png" />
            <h3>Lopez Fabricio</h3>
          </div>
        </div>
      </div>
    </div>
  );  
};