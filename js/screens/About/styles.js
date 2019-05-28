import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  innerContainer: {
    width: width * 0.9
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  content: {
    paddingTop: 10
  },
  subtext: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "100"
  },
  header: {
    fontSize: 24
  },
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
