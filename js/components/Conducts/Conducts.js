import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
class Conducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOPen: false
    };
  }
  onClickHandle = () => {
    this.setState({
      isOPen: true
    });
  };
  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity onPress={() => {}}>
        <View key={data.id}>
          <View style={styles.conductTitle}>
            <Text style={styles.plusMinus}>-</Text>
            <Text style={styles.title}>{data.title}</Text>
          </View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Conducts;
