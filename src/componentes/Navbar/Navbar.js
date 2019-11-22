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
