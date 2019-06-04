import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };
  handleChange = e => {
    e.preventDefault();
    console.log("If you can see me I didn't refresh");
    this.setState({
      [e.target.name]: e.target.value
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
        {/* <div className="left-side-icons">
        <img />
        <img />
      </div> */}
        <form onSubmit={this.searchBarFilter}>
          <input
            onChange={this.handleChange}
            placeholder="Search for posts by search term"
            name="searchTerm"
            value={this.state.searchTerm}
          />
        </form>
        {/* <div className="right-side-icons">
        <img />
        <img />
        <img />
      </div> */}
      </div>
    );
  }
}

export default SearchBar;
