import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MangaPage.css";
import HombreMochila from "./HombreMochila.svg";
/* const URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key="; */
export const MangaPage = () => {
  let { mangaID } = useParams();
  const [manga, setManga] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/manga/${mangaID }`).then((res) => {
      const manga= res.data;
      setManga(manga);
      setIsLoaded(true);
      console.log(manga)
  })
  }, []);
  return (
    <Fragment>
      {isLoaded ? (
        <div className="content-anime">
          <div className="cont-anime">
          <div className="content-img-manga">
            <img
              className="anime-image"
              src={manga.image_url}
              alt={`Imagen ${manga.title}`}
            />
          </div>
          <div className="content-text-manga">
            <h1 className="title">{manga.title}</h1>
            <ul className="list-info-manga">
              <div>
                <span>Volúmenes: </span>
                {manga.volumes}
              </div>
              <div>
                <span>Estado: </span>
                {manga.status}
              </div>
            </ul>
                <span className="span-link">Link <a className="link-page" href={manga.url}>MyAnimeList </a></span>
            {/* <span className="span-author">Links de compra: </span>
            <ul>
              {anime.title].buy_links.map((link) => {
                const { name, url } = link;
                return (
                  <div key={name}>
                    <a className="link-shop" href={url}>
                      {name}
                    </a> 
                  </div>
                );
                })} 
            </ul>
              */}
          </div>
          </div>
          <div class="cont-synopsis">
            <p className="description">&nbsp;&nbsp; 
              {manga.synopsis}
            </p>
          </div>
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
