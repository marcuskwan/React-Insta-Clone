import React from "react";

const withAuthenticate = someComponent =>
    class extends React.Component {
        constructor () {
        this.state = {
            loggedIn: ""
        }
    }
        componentDidMount() {
            if (localStorage.getItem("username")) {
                this.setState({
                    loggedIn: true;
                })
            }
        }
    render() {
      if (this.state.loggedIn===true) {
        return <FirstComp />;
      } else {
        return <Login />;
      }
    }
  };
export default withAuthenticate;
