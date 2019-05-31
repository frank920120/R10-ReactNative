import { Platform } from "react-native";

const gobalStyles = {
  mainFont: Platform.OS === "ios" ? "Montserrat" : "Montserrat-Regular",
  mediumGrey: "#999999",
  lightGrey: "#e6e6e6",
  blue: "#8797D6",
  purple: "#9963ea",
  red: "#cf392a"
};

export default gobalStyles;
