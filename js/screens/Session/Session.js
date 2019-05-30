import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";
import FavesContext from "../../context/FavesContext";

const Session = ({ data, navigation }) => {
  const time = moment(data.startTime).format("LT");
  return (
    <FavesContext.Consumer>
      {values => (
        <ScrollView>
          {console.log(values)}
          <View style={styles.sessionContainer}>
            {values.faveIds.includes(data.id) ? (
              <Ionicons
                style={styles.heart}
                name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                size={20}
                color="red"
              />
            ) : (
              <Text style={styles.heart} />
            )}
            <Text style={styles.location}>{data.location}</Text>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.subHeader}>
              {!data.speaker ? "No Presenter" : "Presented by"}
            </Text>
            {!data.speaker ? (
              <Text />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  console.log(navigation);
                  navigation.push("Speaker", {
                    data: data
                  });
                }}
              >
                <View style={styles.infoContainer}>
                  <Image
                    style={styles.Avatar}
                    source={{ uri: data.speaker.image }}
                  />
                  <Text style={styles.name}>{data.speaker.name}</Text>
                </View>
              </TouchableOpacity>
            )}

            <View style={styles.divider} />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  values.faveIds.includes(data.id)
                    ? values.removeFaveSession(data.id)
                    : values.addFaveSession(data.id);
                }}
                style={styles.touch}
              >
                <LinearGradient
                  colors={["#8D5185", "#A1BAFE"]}
                  style={styles.gradient}
                  start={{ y: 0.0, x: 0.0 }}
                  end={{ y: 0.0, x: 1.0 }}
                >
                  <Text style={styles.button}>
                    {values.faveIds.includes(data.id)
                      ? `Remove To Faves`
                      : `Add To Faves`}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </FavesContext.Consumer>
  );
};

export default withNavigation(Session);
