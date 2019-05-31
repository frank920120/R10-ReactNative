import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("window").width; //full width

export const styles = StyleSheet.create({
  conductTitle: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20
  },
  plusMinus: {
    color: "#BA55D3"
  },
  title: {
    color: "#BA55D3",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "400"
  },
  description: {
    fontSize: 16,
    fontWeight: "100"
  }
});
