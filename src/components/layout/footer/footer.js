import "../../ui/hero-section/HeroSection.css";
import "./footer.css";
import HombreMochila from "../../pages/libros/HombreMochila.svg"
import React from "react";
  export const footer = () => {
    return (
      <div class="conteiner">
        <section class="social"></section>
        <div class="footer-links">
          <div class="footer-container">
          <ul>
              <img
            className="Mochila"
            src={HombreMochila}
            alt="cargando hombre mochila"
          ></img>
            </ul>
            <ul>
              <p>Redes Sociales</p>
              </ul>
            <ul>
              <a href="https://www.facebook.com/marcos.villar.78" target="_blank">
                <img
                  class="img"
                  src="https://raw.githubusercontent.com/Magtimus/Footer-HTML5-CSS3/master/icon/facebook.png"
                />
              </a>
            </ul>
            <ul>
              <a href="https://www.instagram.com/majin.project/" target="_blank">
                <img
                  class="img"
                  src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png"
                />
              </a>
            </ul>
            <ul>
              <a href="https://twitter.com/hashtag/RenuncioGallardo?src=hashtag_click" target="_blank">
                <img
                  class="img"
                  src="https://raw.githubusercontent.com/Magtimus/Footer-HTML5-CSS3/master/icon/twitter.png"
                />
              </a>
            </ul>
            <ul>
              <a href="mailto:trejofranco19@gmail.com;galarzamatias@gmail.com?Subject=Hola">
                <img
                  class="img"
                  src="https://raw.githubusercontent.com/Magtimus/Footer-HTML5-CSS3/master/icon/contact.png"
                />
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  };