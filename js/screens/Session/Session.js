import React from "react";
import PropTypes from "prop-types";
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

const Session = ({ SessionData, navigation }) => {
  const time = moment(SessionData.startTime).format("LT");
  return (
    <FavesContext.Consumer>
      {values => (
        <ScrollView>
          <View style={styles.sessionContainer}>
            {values.faveIds.includes(SessionData.id) ? (
              <Ionicons
                style={styles.heart}
                name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                size={20}
                color="red"
              />
            ) : (
              <Text style={styles.heart} />
            )}
            <Text style={styles.location}>{SessionData.location}</Text>
            <Text style={styles.title}>{SessionData.title}</Text>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.description}>{SessionData.description}</Text>
            <Text style={styles.subHeader}>
              {!SessionData.speaker ? "No Presenter" : "Presented by"}
            </Text>
            {!SessionData.speaker ? (
              <Text />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  navigation.push("Speaker", {
                    data: SessionData
                  });
                }}
              >
                <View style={styles.infoContainer}>
                  <Image
                    style={styles.Avatar}
                    source={{ uri: SessionData.speaker.image }}
                  />
                  <Text style={styles.name}>{SessionData.speaker.name}</Text>
                </View>
              </TouchableOpacity>
            )}

            <View style={styles.divider} />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  values.faveIds.includes(SessionData.id)
                    ? values.removeFaveSession(SessionData.id)
                    : values.addFaveSession(SessionData.id);
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
                    {values.faveIds.includes(SessionData.id)
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
Session.propTypes = {
  SessionData: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};
export default withNavigation(Session);
