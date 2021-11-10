import "./Libros.css";
import { Card } from "../../../ui/Card/Card";
export const Libros = () => {
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
