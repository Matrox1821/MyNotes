import React, { Fragment } from "react";
import { Navegacion } from "./navegacion";
import { Footer } from "./footer";
import "./Layout.css"
export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navegacion />
      <div className="page-content">{children}</div>
      <Footer/>
    </Fragment>
  );
};
