import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  state = {
    postsDataArray: []
  };
  componentDidMount() {
    this.setState({
      postsDataArray: dummyData
    });
  }
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
        {this.state.postsDataArray.map(postObject => {
          return (
            <div key={postObject.id} className="post-container">
              <PostContainer key={postObject.id} postObject={postObject} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
