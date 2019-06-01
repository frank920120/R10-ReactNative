import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";
const Maps = () => {
  return (
    <Text>123</Text>
    // <MapView
    //   style={styles.map}
    //   region={{
    //     latitude: 49.2635987,
    //     longitude: -123.1407987,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421
    //   }}
    //   showsUserLocation={true}
    // >
    //   <Marker
    //     coordinate={{ latitude: 49.2635987, longitude: -123.1407987 }}
    //     image={require("../../assets/images/map_pin.png")}
    //   />
    // </MapView>
  );
};

export default Maps;
