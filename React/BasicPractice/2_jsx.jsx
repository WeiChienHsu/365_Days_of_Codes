// JSX combines XML and JavaScript!
// You need Babel to compile JSX

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
      );
  }
}

const mainElement = document.getElementById("app");

ReactDOM.render(React.createElement(HelloWorld), mainElement);