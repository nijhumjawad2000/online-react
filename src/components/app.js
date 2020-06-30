import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./landing";
import Login from "./login";
import Singup from "./signup";
import Practice from "./practice";
import Nav from "./nav";
import Contact from "./contact";
import Review from "./review";
import Timmer from "./Timmer";
import UncontrolledForm from "./uncontrol";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Singup} />
            <Route path="/contact" component={Contact} />
            <Route path="/review" component={Review} />
            <Route path="/Timmer" component={Timmer} />
            <Route path="/uncontrol" component={UncontrolledForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
