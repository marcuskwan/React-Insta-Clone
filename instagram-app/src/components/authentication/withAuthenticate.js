// importing React package from react file
import React from "react";
// import Login-page component
import LoginPage from "./../Login/Login";
// import Posts-page component
import PostsPage from "./../PostsContainer/PostsPage";

// creating withAuthenticate HOC that takes in a first and second component as arguments
const withAuthenticate = FirstComponent => SecondComponent =>
  // anonymous class
  class extends React.Component {
    // constructor and super before we can use this.state
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    // componentDidMount function that checks if localStorage object has a key of username, if it does, sets the loggedIn value in this.state to true
    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      }
    }
    render() {
      // checking whether loggedIn value in this.state is true
      if (this.state.loggedIn === true) {
        // if true, returns FirstComponent (called w/ PostsPage at bottom) that we've set as the first argument (when calling this HOC and passes down a prop of postsDataArray)
        return <FirstComponent postsDataArray={this.props.postsDataArray} />;
      } else {
        // otherwise returns SecondComponent (called w/ LoginPage at bottom) that we've set as second argument
        return <SecondComponent />;
      }
    }
  };

export default withAuthenticate(PostsPage)(LoginPage);
