// State is used to keep internal variables or objects
// ==========================================================
// WARNING: don't modify state directly. Use this.setState().
// ==========================================================

// React component lifecycle:
// https://reactjs.org/docs/react-component.html

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
    
    // Equivalent to:
    // this.state.date = new Date();
    // this.setState();
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('app')
);