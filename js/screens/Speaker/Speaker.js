import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  ScrollView
} from "react-native";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
const Speaker = ({ data, navigation }) => {
  return (
    <View style={styles.speakerContainer}>
      <ScrollView contentContainerStyle={styles.center}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>About The Speaker</Text>
        </View>
        <View style={styles.content}>
          <Image style={styles.Avatar} source={{ uri: data.speaker.image }} />
          <Text style={styles.name}>{data.speaker.name}</Text>
          <Text style={styles.bio}>{data.speaker.bio}</Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              Linking.canOpenURL(data.speaker.url)
                .then(supported => {
                  if (!supported) {
                    console.log("Can't handle url: " + data.speaker.url);
                  } else {
                    return Linking.openURL(data.speaker.url);
                  }
                })
                .catch(err => console.error("An error occurred", err));
            }}
          >
            <LinearGradient
              colors={["#8D5185", "#A1BAFE"]}
              style={styles.gradient}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 0.0, x: 1.0 }}
            >
              <Text style={styles.button}>Read More On Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name={Platform.OS === "ios" ? "ios-close" : "md-close"}
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Speaker;
