import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBJStuWHujWCV9kTWgYUy3YOL87Ea0YtQc";

class App extends React.Component{
  render() {
    return(
      <div>
      <SearchBar/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))