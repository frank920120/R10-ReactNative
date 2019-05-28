import { createStackNavigator, createAppContainer } from "react-navigation";
import AboutScreen from "../screens/About";

const AboutStack = createStackNavigator({
  About: {
    screen: AboutScreen
  }
});

export default createAppContainer(AboutStack);
