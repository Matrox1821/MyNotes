import "./Libros.css";
import { /* useState,  */ useEffect } from "react";
import axios from "axios";
import { Card } from "../../../ui/Card/Card";
import React from "react";
/* const URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key="; */
export const Libros = () => {
  /* const [books, setBooks] = useState([]); */
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=90xqbHebJWFd1iuqpjGrUzs8I8wGl4Uw`
      );
      console.log(res.data);
    };
    fetchBooks();
  }, []);
  return (
    <div className="content-cards">
      <Card Title="Primer libro" Description="Descripción del libro"></Card>
      <Card Title="Segundo Libro" Description="Descripción del libro"></Card>
      <Card Title="Tercer libro" Description="Descripción del libro"></Card>
      <Card
        Title="Cuarto libro"
        Description="Descripción del último libro"
      ></Card>
    </div>
  );
};
