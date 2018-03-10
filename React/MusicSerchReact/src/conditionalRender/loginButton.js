import React from 'react';

class LoginButton extends React.Component{
  render() {
    return(
      <button onClick = {this.props.onClick}>
        Login Please
      </button>  
    );
  }
}

export default LoginButton