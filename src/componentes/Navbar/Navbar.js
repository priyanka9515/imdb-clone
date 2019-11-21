import React, { Component } from "react";
// import logo from "./componentes/Navbar/imdb.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../search";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar">
        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj6y5yQ4PjlAhWIq48KHSKaCKAQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.imdb.com%2Fpressroom%2Fbrand-guidelines%2F&psig=AOvVaw3myNLBjIWRzvgKsbgg35SD&ust=1574336898771514" />

        <Search />
        <Link to="/">
          <Button style={{ color: "white", marginLeft: "30px" }}>Home</Button>
        </Link>
        <Link to="/Movies">
          <Button style={{ color: "white", marginLeft: "30px" }}>Movies</Button>
        </Link>
        <Link to="/WatchList">
          <Button style={{ color: "white", marginLeft: "30px" }}>
            WatchList
          </Button>
        </Link>
        <Link to="/signin">
          <Button style={{ color: "white", marginLeft: "30px" }}>Signin</Button>
        </Link>
      </div>
    );
  }
}

export default Navbar;
