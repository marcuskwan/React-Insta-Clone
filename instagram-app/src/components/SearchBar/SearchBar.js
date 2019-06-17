// importing React
import React from "react";
// importing styled-components
import styled from "styled-components";
//  styling searchBar container component
const SearchBarContainer = styled.div`
  background: pink;
`;

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
      <SearchBarContainer>
        <form onSubmit={this.searchBarFilter}>
          <input
            name="searchTerm"
            value={this.state.searchTerm}
            placeholder="Search for posts by search term"
            onChange={this.handleChanges}
          />
        </form>
      </SearchBarContainer>
    );
  }
}

export default SearchBar;
