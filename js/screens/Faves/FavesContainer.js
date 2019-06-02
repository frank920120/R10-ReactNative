import React, { Component } from "react";
import Faves from "./Faves";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../Helps";
import Loader from "../../components/Loader";
import FavesContext from "../../context/FavesContext";

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <Query query={GET_SESSION_ITEMS}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Loader />;
          if (error) return `Error! ${error.message}`;

          return (
            <FavesContext.Consumer>
              {values => {
                const newData = data.allSessions.filter(fave =>
                  values.faveIds.includes(fave.id)
                );
                const formatData = formatSessionData(newData);
                return <Faves FavesData={formatData} />;
              }}
            </FavesContext.Consumer>
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

export default FavesContainer;
