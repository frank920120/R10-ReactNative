import { StyleSheet, Dimensions, Platform } from "react-native";
import gobalStyles from "../../config/styles";

export const styles = StyleSheet.create({
  sessionContainer: {
    flex: 1,
    padding: 15,
    position: "relative"
  },
  location: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: gobalStyles.mediumGrey
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 25
  },
  time: {
    paddingTop: 10,
    paddingBottom: 10,
    color: gobalStyles.red,
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
    color: gobalStyles.mediumGrey,
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
    backgroundColor: gobalStyles.lightGrey,
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
    width: 250,
    height: 50
  },
  button: {
    borderRadius: 20,
    width: 250,
    textAlign: "center",
    color: "white",
    fontFamily: gobalStyles.mainFont
  },
  heart: {
    position: "absolute",
    right: 10,
    top: 25
  }
});
