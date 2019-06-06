import React from "react";
// importing css file
import "./App.css";
// import mock data
import dummyData from "./dummy-data";
// import SearchBar component
import SearchBar from "./components/SearchBar/SearchBar";
// import withAuthenticate Higher Order Function
import withAuthenticate from "./components/authentication/withAuthenticate";

// creating ComponentFromWithAuthenticate
const ComponentFromWithAuthenticate = withAuthenticate;

class App extends React.Component {
  state = {
    postsDataArray: []
  };

  // using componentDidMount to set postsDataArray key to a value of dummyData array
  componentDidMount() {
    this.setState({
      postsDataArray: dummyData
    });
  }
  // this function takes in a (searchTerm) and creates a new array based on whether the username matches the searchTerm, then it modifies the postsDataArray key in our state and sets it to that new array
  searchBarFilter = searchTerm => {
    const newlyFilteredArray = this.state.postsDataArray.filter(
      postObject => postObject.username === searchTerm
    );
    this.setState({
      postsDataArray: newlyFilteredArray
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar searchBarFilter={this.searchBarFilter} />
        </header>
        <ComponentFromWithAuthenticate
          postsDataArray={this.state.postsDataArray}
        />
      </div>
    );
  }
}

export default App;
