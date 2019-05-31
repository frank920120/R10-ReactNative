import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager
} from "react-native";
import { styles } from "./styles";
class Conducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  onClickHandle = () => {
    const currentIsOpen = this.state.isOpen;
    LayoutAnimation.spring();
    this.setState({
      isOpen: !currentIsOpen
    });
  };
  render() {
    const { data } = this.props;
    const { isOpen } = this.state;
    return (
      <TouchableOpacity
        onPress={() => {
          this.onClickHandle();
        }}
      >
        <View key={data.id}>
          <View style={styles.conductTitle}>
            <Text style={styles.plusMinus}>{isOpen ? "-" : "+"}</Text>
            <Text style={styles.title}>{data.title}</Text>
          </View>
          {isOpen ? (
            <Text style={styles.description}>{data.description}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}

export default Conducts;
