import "./Card.css";
import React from "react";
export const Card = ({ title, description, book_image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="image" src={book_image} alt={title} />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
