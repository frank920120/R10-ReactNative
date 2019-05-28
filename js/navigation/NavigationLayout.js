import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Faves";
import FavesScreen from "../screens/Faves";
import Ionicons from "react-native-vector-icons/Ionicons";

const AboutStack = createStackNavigator({
  About: AboutScreen
});
const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen
});
const SessionStack = createStackNavigator({
  Session: SessionScreen
});
const FavesStack = createStackNavigator({
  Faves: FavesScreen
});
// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle-outline`;
        }
        if (routeName === "Faves") {
          iconName = `ios-heart`;
        }
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#999999",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
