import React, { Component } from "react";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { ApolloProvider } from "react-apollo";
import FavesProvide from "./context/FavesContext";
import client from "./config/api";
export default class App extends Component {
  render() {
    return (
      <FavesProvide>
        <ApolloProvider client={client}>
          <RootStackNavigator />
        </ApolloProvider>
      </FavesProvide>
    );
  }
}
