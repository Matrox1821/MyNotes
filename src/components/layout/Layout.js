import React, { Fragment } from "react";
import { Navegacion } from "./navegacion";
export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navegacion />
      {children}
    </Fragment>
  );
};
