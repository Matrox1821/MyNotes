import "./AnimesPage.css";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "../../ui/Card";
import { routes } from "../../routers/helpers/routes";
import HombreMochila from "./HombreMochila.svg";
export const AnimesPage = () => {
  const [animes, setAnimes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/season/2021/fall").then((res) => {
      const animes= res.data.anime;
      setAnimes(animes);
      setIsLoaded(true);
      console.log(animes);
  })
  }, []);
  return (
    <Fragment>
      {isLoaded ? (
        <div className="content-cards">
          {animes.map((anime) => {
            const { title,image_url,mal_id,genres} = anime;
            return (
              <Link className="libros" to={routes.anime(mal_id)}>
                <Card
                  rank=""
                  title={title}
                  description={`${genres.map((genero)=>{
              const {name}=genero;
              const nameGenero=name;
              return `-${nameGenero}-`;
            })}`}
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
