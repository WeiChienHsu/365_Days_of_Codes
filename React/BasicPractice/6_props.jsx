// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called "props") and return React 
// elements describing what should appear on the screen.
// 
// NOTE: props is a top-to-bottom way to pass parms.
// All React components must act like pure functions with respect to their props.


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}. My age is {this.props.age}.</h1>;
  }
}

ReactDOM.render(
  <Welcome name="Sara" age="18" />,
  document.getElementById('app')
);