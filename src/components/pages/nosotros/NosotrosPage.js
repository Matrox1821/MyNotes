import React from 'react';
import foto1 from "./img/foto1.png"
import foto2 from "./img/foto2.png"
import foto3 from "./img/foto3.png"
import foto4 from "./img/foto4.png"
import foto5 from "./img/foto5.png"
import "./NosotrosPage.css"
export const NosotrosPage = () =>{
  return (
    <div className="cont-nosotros">
      <h1 className="title-nosotros">Nosotros</h1>
      <hr />
        <p>Curso 7°3°</p>
        
          <div className="integrante">
            <img className="imagen-integrante" src={foto1} alt="foto Galarza Matías"/>
            <div className="cont-datos">
            <h3 className="nombre">Galarza Matias</h3>
            <ul className="datos">
              <div>Me gusta dibujar</div>
              <div>Me gusta programar</div>
              <div>JUEGO AL MUDAE</div>
              <div>Siempre quise jugar básquet</div>
              <div>MOSCAAAAAAAAAAAAAA</div>
              <div>TWD=Familia</div>
            </ul>
            <h4> Cómo contactarme:</h4>
            <div className="datos">
              <a className="red-social" href="https://www.instagram.com/maty.gg" target="_blank">Instagram</a>
              <div>Mi mail es: matiasgg1821@gmail.com</div>
            </div>
            </div>

          </div>
          <div className="integrante">
            <img className="imagen-integrante" src={foto2} alt="foto Miranda Dante"/>
            <div className="cont-datos">
            <h3 className="nombre">Miranda Dante</h3>
            <ul className="datos">
              <div>Soy bueno carreando petes</div>
              <div>Petes=Joacum</div>
              <div>TWD=Familia</div>
            </ul>
            <h4> Cómo contactarme:</h4>
            <div className="datos">
              <a className="red-social" href="https://www.instagram.com/maty.gg" target="_blank">Instagram</a>
              <div>Mi mail es: dantefalso123@gmail.com</div>
            </div>
            </div>
          </div>
          <div className="integrante">
            <img className="imagen-integrante" src={foto3} alt="foto Trejo Franco"/>
            <div className="cont-datos">
            <h3 className="nombre">Trejo Franco</h3>
            <ul className="datos">
              <div>Carrear a Joacum</div>
              <div>TWD=Familia</div>
              <div></div>
            </ul>
            <h4> Cómo contactarme:</h4>
            <div className="datos">
              <div>
                <a className="red-social" href="https://www.instagram.com/marcoss.villar" target="_blank">Instagram</a>
              </div>
              <div>
                <a className="red-social" href="https://www.facebook.com/PeladasterComandante/" target="_blank">Facebook</a>
              </div>
              <div>Mi mail es: trejofranco19@gmail.com</div>
            </div>
            </div>
          </div>
          <div className="integrante">
            <img className="imagen-integrante" src={foto4} alt="foto Lagraña Ricardo"/>
            <div className="cont-datos">
            <h3 className="nombre">Lagraña Ricardo</h3>
            <ul className="datos">
              <div>Actividad paranormal existe</div>
              <div>Me gusta jugar Muse Dash</div>
              <div>Sé cagó a piñas con el gato y perdió</div>
              <div>TWD=Familia</div>
            </ul>
            <h4> Cómo contactarme:</h4>
            <div className="datos">
              <a className="red-social" href="https://www.instagram.com/team_with_down" target="_blank">Instagram</a>
              <div>Mi mail es: rickikapo@gmail.com</div>
            </div>
            </div>
          </div>
          <div className="integrante">
            <img className="imagen-integrante" src={foto5} alt="foto López Fabricio"/>
            <div className="cont-datos">
            <h3 className="nombre">López Fabricio</h3>
            <ul className="datos">
              <div>Me gusta programar</div>
              <div></div>
              <div></div>
              <div>El TWD & Fabricio 😎</div>
            </ul>
            <h4> Cómo contactarme:</h4>
            <div className="datos">
              <a className="red-social" href="https://www.instagram.com/lopez.fabri_" target="_blank">Instagram</a>
              <div>Mi mail es: fabricio.l.moneda@gmail.com</div>
            </div>
            </div>
          </div>
          {/* <div>
            <img src={foto2} alt="foto Miranda Dante"/>
            <h3>Miranda Dante</h3>
          </div>
          <div>
            <img src={foto3} alt="foto Trejo Franco"/>
            <h3>Trejo Franco</h3>
          </div>
          <div>
            <img src={foto4} alt="foto Lagraña Ricardo"/>
            <h3>Lagraña Ricardo</h3>
          </div>
          <div>
            <img src={foto5}alt="foto Lopez Fabricio"/>
            <h3>Lopez Fabricio</h3>
          </div> */}
      </div>
  );  
};