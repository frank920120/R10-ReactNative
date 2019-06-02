import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import Maps from "./Maps";
class MapsContianer extends Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return (
      <View>
        {Platform.OS === "android" ? <Text>Coming soon...</Text> : <Maps />}
      </View>
    );
  }
}

export default MapsContianer;
