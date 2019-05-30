import React from "react";
import { StyleSheet, View, Platform, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => {
    return <GradientHeader {...props} />;
  },
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTitleStyle: { color: "#ffffff", fontFamily: "Montserrat" },
  headerLeft:
    Platform.OS === "ios" ? null : (
      <TouchableOpacity
        onPress={() => {
          {
            navigation.state.routeName !== "Session"
              ? navigation.toggleDrawer()
              : navigation.goBack();
          }
        }}
      >
        {navigation.state.routeName !== "Session" ? (
          <Ionicons
            name="md-menu"
            size={30}
            color="white"
            style={{ padding: 10 }}
          />
        ) : (
          <Ionicons
            name="md-arrow-round-back"
            size={30}
            color="white"
            style={{ padding: 10 }}
          />
        )}
      </TouchableOpacity>
    )
});
