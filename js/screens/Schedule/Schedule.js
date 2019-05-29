import React from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import moment from "moment";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import FavesContext from "../../context/FavesContext";
const Schedule = ({ ScheduleData, navigation }) => {
  console.log(ScheduleData);

  return (
    <FavesContext.Consumer>
      {values => (
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
                  {values.faveIds.includes(item.id) ? (
                    <Ionicons name="ios-heart" size={20} color="red" />
                  ) : (
                    <Text />
                  )}
                </Text>
              </View>
            </TouchableHighlight>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{moment(title).format("LT")}</Text>
          )}
          sections={ScheduleData}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          keyExtractor={(item, index) => item + index}
        />
      )}
    </FavesContext.Consumer>
  );
};

export default withNavigation(Schedule);
