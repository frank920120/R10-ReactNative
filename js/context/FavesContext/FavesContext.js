import React, { createContext, Component } from "react";
import { queryFaves } from "../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }
  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const ids = faves.map(fave => fave[0]);
      console.log(faves);
      this.state({
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
      <FavesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
