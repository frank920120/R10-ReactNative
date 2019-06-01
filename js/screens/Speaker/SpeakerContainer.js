import React, { Component } from "react";
import Speaker from "./Speaker";
class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Speaker
        SpeakerData={this.props.navigation.state.params.data}
        navigation={this.props.navigation}
      />
    );
  }
}

export default SpeakerContainer;
