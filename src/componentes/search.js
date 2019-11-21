import React, { Component } from "react";

import SearchIcon from "@material-ui/icons/Search";

class Search extends Component {
  render() {
    return (
      <div>
        <input
          className="search"
          placeholder="search here"
          style={{
            border: "1px solid black",
            width: "600px",
            height: "30px",
            margin: "10px"
          }}
        />
        <SearchIcon
          style={{
            marginLeft: "-40px"
          }}
        />
      </div>
    );
  }
}

export default Search;
