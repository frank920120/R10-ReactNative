import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  sessionContainer: {
    flex: 1,
    padding: 15,
    fontFamily: "Montserrat"
  },
  location: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: "#999999"
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 25
  },
  time: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "red",
    fontSize: 16
  },
  description: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20
  },
  subHeader: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "#999999",
    fontSize: 20
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  Avatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  name: {
    fontSize: 20,
    marginLeft: 10
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e6e6e6",
    marginTop: 20,
    marginBottom: 20
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gradient: {
    justifyContent: "center",
    borderRadius: 20,
    width: 200,
    height: 50
  },
  button: {
    borderRadius: 20,
    width: 250,
    textAlign: "center"
  }
});
