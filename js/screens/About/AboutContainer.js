import React, { Component } from "react";
import About from "./About";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";

class AboutContainer extends Component {
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Text>Loading..</Text>;
          if (error) return `Error! ${error.message}`;
          return <About data={data} />;
        }}
      </Query>
    );
  }
}
const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      title
      description
    }
  }
`;

export default AboutContainer;
