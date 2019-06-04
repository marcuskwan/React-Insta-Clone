import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  state = {
    postsDataArray: dummyData
  };
  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <div className="posts-container">
          {this.state.postsDataArray.map(postObject => (
            <PostContainer key={postObject.id} postObject={postObject} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
