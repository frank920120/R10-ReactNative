import React from "react";
import { View, ActivityIndicator } from "react-native";
const Loader = () => {
  return (
    <View>
      <ActivityIndicator size="small" color="red" />
    </View>
  );
};

export default Loader;
