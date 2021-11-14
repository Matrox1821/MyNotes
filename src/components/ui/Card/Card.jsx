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
        {/* <p>
          <span className="span-card">Autor:</span> {author}
        </p> */}
      </div>
      {/* <ul className="card-mini-dates">
        <li>
          <span className="span-card">Editorial: </span> {publisher}
        </li>
        <li>
          <span className="span-card">ISBN: </span> {primary_isbn10}
        </li>
      </ul>
      <p>Links de compra:</p>
      <ul>
        {buy_links.map((link) => {
          const { name, url } = link;
          return (
            <div key={name}>
              <a className="shop-link" href={url}>
                {name}
              </a>
            </div>
          );
        })}
      </ul> */}
    </div>
  );
};
