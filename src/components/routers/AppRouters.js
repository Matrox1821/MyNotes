import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "../pages/home/HomePage";
import { LibrosPage } from "../pages/libros";
import { NosotrosPage } from "../pages/nosotros";
import { ForoPage } from "../pages/foro";
import { IniciarSesionPage } from "../pages/iniciar-sesion";
import { RegistroPage } from "../pages/registro";
import { CuentaPage } from "../pages/cuenta";
import { UsuariosPage } from "../pages/admin";
import { NotFoundPage } from "../pages/not-found";
import React from "react";
export const AppRouters = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/inicio" component={HomePage} />
          <Route exact path="/libros" component={LibrosPage} />
          <Route exact path="/nosotros" component={NosotrosPage} />
          <Route exact path="/foro" component={ForoPage} />
          <Route exact path="/iniciar-sesion" component={IniciarSesionPage} />
          <Route exact path="/registro" component={RegistroPage} />
          <Route exact path="/cuenta" component={CuentaPage} />
          <Route exact path="/admin/usuario" component={UsuariosPage} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
};
