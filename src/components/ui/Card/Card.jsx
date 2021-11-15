import "./Card.css";
import React from "react";
export const Card = ({
  rank,
  title,
  description,
  book_image,
  author,
  publisher,
  primary_isbn10,
  age_group,
  price,
  buy_links,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="image" src={book_image} alt={title} />
      </div>
      <div className="card-content" key={rank}>
        <h1 className="card-title" >{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
