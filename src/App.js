import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/views/pages/home";
import { Libros } from "./components/views/pages/libros";
import { Header } from "./components/views/Header/Header";

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inicio" exact component={Home} />
        <Route path="/libros" exact component={Libros} />
      </Switch>
    </Router>
  );
};

export default App;
