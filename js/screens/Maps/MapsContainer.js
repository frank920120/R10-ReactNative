import React, { Component } from "react";
import { View, Text } from "react-native";
import Maps from "./Maps";
class MapsContianer extends Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return (
      <View>
        <Maps />
      </View>
    );
  }
}

export default MapsContianer;
