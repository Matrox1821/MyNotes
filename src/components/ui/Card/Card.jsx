import "./Card.css";
export const Card = ({ Title, Description }) => {
  return (
    <div className="card">
      <h1>{Title}</h1>
      <div className="card-graphic"></div>
      <div className="card-content">
        <p>{Description}</p>
      </div>
    </div>
  );
};
