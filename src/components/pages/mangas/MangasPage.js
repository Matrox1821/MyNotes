import "./MangasPage.css";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "../../ui/Card";
import { routes } from "../../routers/helpers/routes";
import HombreMochila from "./HombreMochila.svg";
export const MangasPage = () => {
  const [mangas, setMangas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/top/manga").then((res) => {
      const mangas= res.data.top;
      setMangas(mangas);
      setIsLoaded(true);
      console.log(mangas);
  })
  }, []);
  return (
    <Fragment>
      {isLoaded ? (
        <div className="content-cards">
          {mangas.map((manga) => {
            const { title,image_url,mal_id,volumes,end_date} = manga;
            return (
              <Link className="libros" to={routes.manga(mal_id)}>
                <Card
                  rank=""
                  title={title}
                  description={`Finalizado: ${end_date?`Sí, en ${end_date} y cuenta con ${volumes} volúmenes.`:"No."}`}
                  book_image={image_url}
                ></Card>
              </Link>
            );
          }
          )} 
        </div>
      ) : (
        <div className="cargando-hm">
          <img
            className="hombre-mochila"
            src={HombreMochila}
            alt="cargando hombre mochila"
          ></img>
          <h2>Transportando sus datos...</h2>
        </div>
      )}
    </Fragment>
  );
};
