import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  login = (username, password) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };
  handleChanges = event => {
    event.preventDefault();
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
          onChange={this.handleChanges}
        />
        <input
          name="password"
          placeholder="Enter desired password"
          value={this.state.password}
          onChange={this.handleChanges}
        />
        <button
          onClick={() => this.login(this.state.username, this.state.password)}
        >
          Login
        </button>
      </form>
    );
  }
}

export default Login;
