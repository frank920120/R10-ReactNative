import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import SpeakerModal from "../screens/Speaker";
export default createAppContainer(
  createStackNavigator(
    { Layout: NavigationLayout, speaker: SpeakerModal },
    { model: "modal", headerMode: "none" }
  )
);
