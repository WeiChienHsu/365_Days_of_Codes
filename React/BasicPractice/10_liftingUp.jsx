// React is using a top-down flow through props
// If you need to share some states with other components:
// E.g. a form validator in Login Form.
// You lift it up to their closest common ancestor. 

class PasswordField extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeHandler(e);
    console.log('inside PasswordField!');
  }

  render() {
    return (
      //<input type='text' onChange={this.handleChange}/>
      <input type='text' onChange={(e) => this.handleChange(e)}/>
    );
  }
}

function MatchText(props) {
  if (props.matched) {
    return <div><h1>Matched</h1></div>
  } else {
    return <div><h1>Not matched</h1></div>
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    //this.handleFirstPasswordChange = this.handleFirstPasswordChange.bind(this);
    //this.handleSecondPasswordChange = this.handleSecondPasswordChange.bind(this);
    this.state = { 
      firstPassword: '',
      secondPassword: ''
    }
  }
  
  handleFirstPasswordChange(event) {
    this.setState({firstPassword: event.target.value});
    console.log('firstPassword changed.');
  }

  handleSecondPasswordChange(event) {
    this.setState({secondPassword: event.target.value});
    console.log('secondPassword changed.');
  }

  render() {
    return (
      <div>
        <PasswordField changeHandler={(e) => this.handleFirstPasswordChange(e)}/>
        <br/>
        <PasswordField changeHandler={(e) => this.handleSecondPasswordChange(e)}/>
        <MatchText matched={this.state.firstPassword == this.state.secondPassword}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
);