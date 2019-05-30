import React, { Component } from "react";
import Loader from "../../components/Loader";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Query query={GET_SESSION_ITEM} variables={{ id: params.id }}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Loader />;
          if (error) return `Error! ${error.message}`;
          return <Session data={data.Session} />;
        }}
      </Query>
    );
  }
}
const GET_SESSION_ITEM = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      id
      startTime
      location
      title
      description
      speaker {
        id
        image
        name
        bio
        url
      }
    }
  }
`;

export default SessionContainer;
