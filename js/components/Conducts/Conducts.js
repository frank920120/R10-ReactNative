import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated
} from "react-native";
import { styles } from "./styles";
class Conducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      howFar: new Animated.ValueXY(),
      spinValue: new Animated.Value(0)
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  onClickHandle = () => {
    const currentIsOpen = this.state.isOpen;

    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 600
    }).start(animation => {
      if (animation.finished) {
        this.setState({ spinValue: new Animated.Value(0) });
      }
    });

    LayoutAnimation.easeInEaseOut();
    this.setState({
      isOpen: !currentIsOpen
    });
  };
  render() {
    const { data } = this.props;
    const { isOpen, spinValue } = this.state;
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    let animatedStyled = {
      transform: [{ rotate: spin }]
    };
    return (
      <TouchableOpacity
        onPress={() => {
          this.onClickHandle();
        }}
      >
        <View key={data.id}>
          <View style={styles.conductTitle}>
            <Animated.Text style={[styles.plusMinus, animatedStyled]}>
              {isOpen ? "-" : "+"}
            </Animated.Text>
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
