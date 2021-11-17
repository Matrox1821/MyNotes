import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AnimePage.css";
/* const URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key="; */
export const AnimePage = () => {
  let { animeID } = useParams();
  const [anime, setAnime] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${animeID }`).then((res) => {
      const anime= res.data;
      setAnime(anime);
      setIsLoaded(true);
      console.log(anime)
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
              src={anime.image_url}
              alt={`Imagen ${anime.title}`}
            />
          </div>
          <div className="content-text-manga">
            <h1 className="title">{anime.title}</h1>
            <ul className="list-info-manga">
              <div>
                <span>Estudios: </span>
                {anime.studios.map((stdio)=>{
                  const {name}=stdio;
                  return `${name} `;
                })}
              </div>
              <div>
                <span>Estado: </span>
                {anime.status}
              </div>
            </ul>
                <span className="span-link">Link <a className="link-page" href={anime.url}>MyAnimeList </a></span>
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
              {anime.synopsis}
            </p>
          </div>
        </div>
      ) : (
        "cargando"
      )}
    </Fragment>
  );
};
