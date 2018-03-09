import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = "AIzaSyBJStuWHujWCV9kTWgYUy3YOL87Ea0YtQc";

class App extends React.Component{
  render() {
    return(
      <h1>Hello World</h1>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))