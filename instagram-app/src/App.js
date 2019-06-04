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
        {this.state.postsDataArray.map(postObject => {
          return (
            <div className="post-container">
              <PostContainer key={postObject.id} postObject={postObject} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
