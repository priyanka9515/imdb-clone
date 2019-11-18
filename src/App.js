import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componentes/Navbar/Navbar.js";
import watchList from "./componentes/Navbar/WatchList/watchList";
import { BrowserRouter, Route } from "react-router-dom";
import Movies from "./componentes/Movies/Movies.js";
import signin from "./componentes/signin/signin.js";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/watchList" component={watchList} />
          <Route exact path="/signin" component={signin} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
