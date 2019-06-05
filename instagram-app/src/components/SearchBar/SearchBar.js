import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };
  handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  searchBarFilter = event => {
    event.preventDefault();
    this.props.searchBarFilter(this.state.searchTerm);
    this.setState({
      searchTerm: ""
    });
  };
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.searchBarFilter}>
          <input
            name="searchTerm"
            value={this.state.searchTerm}
            placeholder="Search for posts by search term"
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
