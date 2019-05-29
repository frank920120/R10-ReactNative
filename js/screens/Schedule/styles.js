import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
    fontFamily: "Montserrat"
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5
  },
  location: {
    color: "grey",
    paddingTop: 5,
    paddingBottom: 5
  },
  header: {
    backgroundColor: "#e6e6e6",
    padding: 10,
    fontSize: 10
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e6e6e6"
  }
});
