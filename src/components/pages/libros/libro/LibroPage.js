import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
          <div>{books[libroIDReducido].title}</div>
          <div>{books[libroIDReducido]["rank"]}</div>
          <div>{books[libroIDReducido]["description"]}</div>
          <div>
            <img
              src={books[libroIDReducido]["book_image"]}
              alt={books[libroIDReducido]["title"]}
            />
          </div>
        </div>
      ) : (
        "cargando"
      )}
    </Fragment>
  );
};
