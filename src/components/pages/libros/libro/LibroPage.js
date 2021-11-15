import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./libro.css";
/* const URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key="; */
export const LibroPage = () => {
  let { libroID } = useParams();
  let libroIDReducido = libroID - 1;
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=90xqbHebJWFd1iuqpjGrUzs8I8wGl4Uw`
      );
      setBooks(res.data.results.books);
      /* console.log(res.data.results.books); */
      setIsLoaded(true);
    };
    fetchBooks();
  }, []);
  return (
    <Fragment>
      {isLoaded && books && books.length > 0 ? (
        <div className="content-cards">
          <div className="content-img-book">
            <img
              className="book-image"
              src={books[libroIDReducido]["book_image"]}
              alt={books[libroIDReducido]["title"]}
            />
          </div>
          <div className="content-text-book">
            <h1 className="title">{books[libroIDReducido].title}</h1>
            <p className="description">
              {books[libroIDReducido]["description"]}
            </p>
            <p className="author">
              <span className="span-author">Autor: </span>
              {books[libroIDReducido].author}
            </p>
            <ul className="list-info-book">
              <div>
                <span>Editorial: </span>
                {books[libroIDReducido].publisher}
              </div>
              <div>
                <span>ISBN: </span>
                {books[libroIDReducido].primary_isbn10}
              </div>
            </ul>
            <span className="span-author">Links de compra: </span>
            <ul>
              {books[libroIDReducido].buy_links.map((link) => {
                const { name, url } = link;
                return (
                  <div>
                    <a className="link-shop" href={url}>
                      {name}
                    </a>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        "cargando"
      )}
    </Fragment>
  );
};
