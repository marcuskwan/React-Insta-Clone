import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postsDataArray: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <div className="post-container">
          <PostContainer postsDataArray={this.state.postsDataArray} />
        </div>
      </div>
    );
  }
}

export default App;
