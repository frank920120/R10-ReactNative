import React, { Component } from "react";
import Loader from "../../components/Loader";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../Helps";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };

  render() {
    return (
      <Query query={GET_SESSION_ITEMS}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Loader />;
          if (error) return `Error! ${error.message}`;

          return (
            <Schedule ScheduleData={formatSessionData(data.allSessions)} />
          );
        }}
      </Query>
    );
  }
}

const GET_SESSION_ITEMS = gql`
  query {
    allSessions {
      id
      startTime
      location
      title
      description
    }
  }
`;
export default ScheduleContainer;
