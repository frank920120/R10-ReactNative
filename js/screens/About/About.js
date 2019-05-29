import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";

const About = ({ data }) => {
  console.log(data);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/r10_logo.png")}
              resizeMode="cover"
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.subtext}>
              R10 is a conference that focuses on just about any topic related
              to dev.
            </Text>
            <Text style={styles.header}>Date & Venue</Text>
            <Text style={styles.subtext}>
              The R10 conference will take place on Tuesday, June 27, 2017 in
              Vancouver,BC
            </Text>
            <Text style={styles.header}>Code of Conduct</Text>
          </View>
          {data.allConducts.map(d => {
            return (
              <View key={d.id}>
                <View style={styles.conductTitle}>
                  <Text style={styles.plusMinus}>-</Text>
                  <Text style={styles.title}>{d.title}</Text>
                </View>
                <Text style={styles.description}>{d.description}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.divider} />
        <View style={styles.copyRightContainer}>
          <Text style={styles.copyRight}>© RED Academy 2019</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
