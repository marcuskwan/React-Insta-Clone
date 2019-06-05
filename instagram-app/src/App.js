import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  state = {
    postsDataArray: []
  };
  // using componentDidMount to set postsDataArray key to a value of dummyData
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
  // this function modifies the postsDataArray key in our state and adds a comment to the end of a post. The comment was sourced from our commentInput key that's obtained from the state within CommentSection.js

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar searchBarFilter={this.searchBarFilter} />
        </header>
        <PostsPage postsDataArray={this.state.postsDataArray} />
      </div>
    );
  }
}

export default App;
