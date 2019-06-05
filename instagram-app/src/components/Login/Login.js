import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  login = (username, password) => {
    this.setState({});
  };
  handleChanges = event => {
    e.preventDefault;
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <form>
        <input
          name="username"
          placeholder="Enter desired username"
          value={this.state.username}
        />
        <input
          name="password"
          placeholder="Enter desired password"
          value={this.state.password}
        />
        <button onClick={this.login}>Login</button>
      </form>
    );
  }
}

export default Login;
