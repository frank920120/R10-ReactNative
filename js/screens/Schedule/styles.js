import { StyleSheet, Dimensions } from "react-native";

import gobalStyles from "../../config/styles";
export const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
    fontFamily: gobalStyles.mainFont,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5
  },
  location: {
    color: gobalStyles.mediumGrey,
    paddingTop: 5,
    paddingBottom: 5
  },
  header: {
    backgroundColor: gobalStyles.lightGrey,
    padding: 10,
    fontSize: 10
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: gobalStyles.lightGrey
  }
});
