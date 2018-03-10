import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';
import LoginButton from './loginButton'
import LogoutButton from './logoutButton' 

class LoginControl extends React.Component{
  constructor(props) {
    super(props)
    this.state = {isLoggedIn : false}
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
  }

  handleLoginClick() {
    this.setState({isLoggedIn : true });
    console.log("Click Login");
  }
  
  handleLogoutClick() {
    this.setState({isLoggedIn : false});
    console.log("Click Logout");
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if(isLoggedIn) {
      button = <LogoutButton onClick = {this.handleLogoutClick} />
    } else{
      button = <LoginButton onClick = {this.handleLoginClick}/>
    }

    return(
      <div>
        <Greeting isLoggedIn = {isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl/>, document.getElementById('login'))

