import "./Libros.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "../../ui/Card";
import { routes } from "../../routers/helpers/routes";
/* const URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key="; */
export const LibrosPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=90xqbHebJWFd1iuqpjGrUzs8I8wGl4Uw`
      );
      setBooks(res.data.results.books);
      console.log(res.data.results.books);
    };
    fetchBooks();
  }, []);

  return (
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
  );
};
