import React, { Component } from "react";
import PropTypes from "prop-types";
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
      spinValue: new Animated.Value(0),
      scaleValue: new Animated.Value(0)
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  onClickHandle = () => {
    const currentIsOpen = this.state.isOpen;
    Animated.parallel([
      Animated.timing(this.state.scaleValue, {
        toValue: currentIsOpen ? 0 : 1,
        duration: 1000
      }),

      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 1500
      })
    ]).start(animation => {
      if (animation.finished) {
        this.setState({
          spinValue: new Animated.Value(0),
          scaleValue: currentIsOpen
            ? new Animated.Value(0)
            : new Animated.Value(1)
        });
      }
    });

    LayoutAnimation.easeInEaseOut();
    this.setState({
      isOpen: !currentIsOpen
    });
  };
  render() {
    const { ConductsData } = this.props;
    const { isOpen, spinValue, scaleValue } = this.state;

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: isOpen ? ["0deg", "360deg"] : ["0deg", "-360deg"]
    });
    const scale = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2.5]
    });

    let animatedStyled = {
      transform: [{ rotate: spin }, { scale: scale }]
    };
    return (
      <TouchableOpacity
        onPress={() => {
          this.onClickHandle();
        }}
      >
        <View key={ConductsData.id}>
          <View style={styles.conductTitle}>
            <Animated.Text style={[styles.plusMinus, animatedStyled]}>
              {isOpen ? "-" : "+"}
            </Animated.Text>
            <Text style={styles.title}>{ConductsData.title}</Text>
          </View>
          {isOpen ? (
            <Text style={styles.description}>{ConductsData.description}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}
Conducts.propTypes = {
  ConductsData: PropTypes.object.isRequired
};
export default Conducts;
