import "./Libros.css";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "../../ui/Card";
import { routes } from "../../routers/helpers/routes";
import HombreMochila from "./HombreMochila.svg";
/* const URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key="; */
export const LibrosPage = () => {
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
      {isLoaded ? (
        <div className="content-cards">
          {books.map((book) => {
            const { book_image, description, rank, title } = book;
            return (
              <Link className="libros" to={routes.libro(rank)}>
                <Card
                  rank={rank}
                  title={title}
                  description={description}
                  book_image={book_image}
                ></Card>
              </Link>
            );
          })}
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
