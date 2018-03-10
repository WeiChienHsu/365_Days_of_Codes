import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.showWord = this.showWord.bind(this);
  }

  render() {
    return(
      <div>
      <input 
        value = {this.state.term}
        onChange = {event => this.setState({term : event.target.value})} />
      <button onClick = {this.showWord}> Click me! </button>
      </div>
    )
  }

  showWord() {
    const new_words = this.state.term;
    console.log(new_words); 
  }

}

export default SearchBar;