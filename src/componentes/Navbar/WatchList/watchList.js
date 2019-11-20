import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class watchList extends React.Component {
  state = {
    watchList: watchList,
    redirect: true
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to={{ pathname: "/signin", state: { from: "/watchList" } }} />
      );
    }
  }
}

export default watchList;
