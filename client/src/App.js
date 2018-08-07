import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Login from"./components/Login";

const App = () => (
  <Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Movies} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/movies/:id" component={Detail} />
      <Route component={NoMatch} />
    </Switch>
  </div>
</Router>
)

export default App;

