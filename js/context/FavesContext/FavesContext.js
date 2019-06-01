import React, { createContext, Component } from "react";
import { queryFaves, createFave, deleteFave } from "../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }
  addFaveSession = async id => {
    console.log("id", id);
    try {
      const newFave = await createFave(id);
      this.getFavedSessionIds();
    } catch (e) {
      return false;
    }
  };
  removeFaveSession = async id => {
    try {
      await deleteFave(id);
      this.getFavedSessionIds();
    } catch (e) {
      return false;
    }
  };
  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const ids = faves.map(fave => fave[0]);
      this.setState({
        faveIds: ids
      });
    } catch (e) {
      return false;
    }
  };
  componentDidMount = () => {
    this.getFavedSessionIds();
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
