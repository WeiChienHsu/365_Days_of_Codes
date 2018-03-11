import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return(
      <div className="search-bar">
      <input
        value = {this.state.term}
        onChange = { event => this.onInputChange(event.target.value) } />
      {/* <button className = "btn btn-warning" onClick = {this.showWord}> Search </button> */}
      </div>
    )
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }


}

export default SearchBar;