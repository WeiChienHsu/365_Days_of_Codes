import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const isLoggedIn = this.props.isLoggedIn;
    if(isLoggedIn) {
      return <h1>Welcome back!</h1>
    } else {
      return <h1>Please sign up.</h1>
    }
  }
}

export default Greeting