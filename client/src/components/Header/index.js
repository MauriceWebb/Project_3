import React, { Component } from "react";
import Nav from "../subcomponent/Nav/index";
import Jumbotron from "../subcomponent/Jumbotron/index.js";
import SearchBar from "../subcomponent/SearchBar/index";
import "./style.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="d-flex flex-column justify-content-around py-2 ui_gradient2">
          <Nav />
          <Jumbotron />
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default Header;
