import React, { Component } from "react";
import Faves from "./Faves";
class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Faves />;
  }
}

export default FavesContainer;
