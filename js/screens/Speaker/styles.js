import { StyleSheet } from "react-native";

import gobalStyles from "../../config/styles";
export const styles = StyleSheet.create({
  speakerContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
    position: "relative"
  },

  headerContainer: {
    height: 100,
    justifyContent: "center"
  },
  close: {
    position: "absolute",
    top: 40,
    left: 20
  },
  header: {
    color: "white",
    fontWeight: "800",
    fontFamily: gobalStyles.mainFont,
    fontSize: 16
  },
  content: {
    backgroundColor: "white",
    alignItems: "center",
    width: "95%",
    height: "100%",
    borderRadius: 10
  },
  Avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20
  },
  name: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "800",
    fontFamily: gobalStyles.mainFont
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  },
  bio: {
    fontSize: 16,
    fontFamily: gobalStyles.mainFont,
    padding: 15
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
    fontFamily: gobalStyles.mainFont,
    fontWeight: "800",
    fontSize: 20
  }
});
