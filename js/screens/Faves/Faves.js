import React from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import moment from "moment";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Faves = ({ FavesData, navigation }) => {
  console.log(FavesData);
  if (FavesData.length < 1) {
    return <Text>No Faves</Text>;
  }
  return (
    <SectionList
      renderItem={({ item, index, section }) => (
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("Session", {
              id: item.id
            })
          }
        >
          <View style={styles.sectionContainer} key={index}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
            <Text>
              <Ionicons name="ios-heart" size={20} color="red" />
            </Text>
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{moment(title).format("LT")}</Text>
      )}
      sections={FavesData}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      keyExtractor={(item, index) => item + index}
    />
  );
};
Faves.propTypes = {
  FavesData: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};
export default withNavigation(Faves);
