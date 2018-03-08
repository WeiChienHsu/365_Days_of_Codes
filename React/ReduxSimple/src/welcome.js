import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  render(){
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('welcome')
);