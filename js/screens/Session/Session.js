import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import moment from "moment";
const Session = ({ data }) => {
  const time = moment(data.startTime).format("LT");
  return (
    <ScrollView>
      <View style={styles.sessionContainer}>
        <Text style={styles.location}>{data.location}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.subHeader}>Presented by:</Text>
        <View style={styles.infoContainer}>
          <Image style={styles.Avatar} source={{ uri: data.speaker.image }} />
          <Text style={styles.name}>{data.speaker.name}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Session;
