import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "../pages/home/HomePage";
import { MangasPage } from "../pages/mangas";
import { MangaPage } from "../pages/mangas/manga";
import { AnimesPage } from "../pages/animes";
import { AnimePage } from "../pages/animes/anime";
import { NosotrosPage } from "../pages/nosotros";
import { ForoPage } from "../pages/foro";
import { IniciarSesionPage } from "../pages/iniciar-sesion";
import { RegistroPage } from "../pages/registro";
import { CuentaPage } from "../pages/cuenta";
import { UsuariosPage } from "../pages/admin";
import { NotFoundPage } from "../pages/not-found";
import React from "react";
import { routes } from "./helpers/routes";
export const AppRouters = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.inicio} component={HomePage} />
          <Route exact path={routes.mangas} component={MangasPage} />
          <Route exact path={routes.manga()} component={MangaPage} />
          <Route exact path={routes.animes} component={AnimesPage} />
          <Route exact path={routes.anime()} component={AnimePage} />
          <Route exact path={routes.nosotros} component={NosotrosPage} />
          <Route exact path={routes.foro} component={ForoPage} />
          <Route
            exact
            path={routes.iniciarSesion}
            component={IniciarSesionPage}
          />
          <Route exact path={routes.registro} component={RegistroPage} />
          <Route exact path={routes.cuenta} component={CuentaPage} />
          <Route exact path={routes.admin.usuarios} component={UsuariosPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
};
