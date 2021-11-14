import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../views/pages/home";
import { LibrosPage } from "../views/pages/libros";
import { NosotrosPage } from "../views/pages/nosotros";
import { ForoPage } from "../views/pages/foro";
import { IniciarSesionPage } from "../views/pages/iniciar-sesion";
import { RegistroPage } from "../views/pages/registro";
import { CuentaPage } from "../views/pages/cuenta";
import { UsuariosPage } from "../views/pages/admin";
import { NotFoundPage } from "../views/pages/not-found";
import { Header } from "../views/Header/Header";
import React from "react";
export const AppRouters = () => {
  return (
    <Router>
      <Header />
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
    </Router>
  );
};
