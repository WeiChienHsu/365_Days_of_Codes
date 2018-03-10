import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Toggle from './demoCode/toggle';

const API_KEY = "AIzaSyBJStuWHujWCV9kTWgYUy3YOL87Ea0YtQc";

class App extends React.Component{
  render() {
    return(
      <div>
        <SearchBar/>
        <Toggle/>
        <div id = "login"> </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))