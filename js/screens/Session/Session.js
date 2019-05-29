import React from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { styles } from "./styles";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";
const Session = ({ data }) => {
  const time = moment(data.startTime).format("LT");
  return (
    <ScrollView>
      <View style={styles.sessionContainer}>
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
          <View style={styles.infoContainer}>
            <Image style={styles.Avatar} source={{ uri: data.speaker.image }} />
            <Text style={styles.name}>{data.speaker.name}</Text>
          </View>
        )}

        <View style={styles.divider} />
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={["#8D5185", "#A1BAFE"]}
            style={styles.gradient}
            start={{ y: 0.0, x: 0.0 }}
            end={{ y: 0.0, x: 1.0 }}
          >
            <Button
              style={styles.button}
              color="white"
              title={`Remove From Faves`}
            />
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

export default Session;
