import "./Libros.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../ui/Card";
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
        const {
          age_group,
          author,
          book_image,
          buy_links,
          description,
          price,
          primary_isbn10,
          publisher,
          rank,
          title,
        } = book;
        return (
          <Card
            title={title}
            description={description}
            book_image={book_image}
          ></Card>
        );
      })}
    </div>
  );
};
