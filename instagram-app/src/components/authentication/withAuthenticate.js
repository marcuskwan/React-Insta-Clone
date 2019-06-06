import React from "react";

// import Login-page component
import LoginPage from "./../Login/Login";

// import Posts-page component
import PostsPage from "./../PostsContainer/PostsPage";

const withAuthenticate = FirstComponent => SecondComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      }
    }
    render() {
      if (this.state.loggedIn === true) {
        return <FirstComponent postsDataArray={this.props.postsDataArray} />;
      } else {
        return <SecondComponent />;
      }
    }
  };

export default withAuthenticate(PostsPage)(LoginPage);
