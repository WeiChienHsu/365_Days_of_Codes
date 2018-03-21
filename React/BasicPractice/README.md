# React Demo

- 1. Hello World
```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app') 
);
```

- 2. JSX : Define a Class extends React.Component
```js
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
```
- 3. JSX : Use Function in a HTML
```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Ming',
  lastName: 'Xiao'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('app')
);
```
- 4. JSX : Give a argument to function, and use that function to render html
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
  getGreeting(), // Put in an user
  document.getElementById('app')
);
```


- 5. Render : Virtual DOM
* run tick every 1000 ms
* virtual DOM will recognize which part of codes will be changed in time
```js
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
```
```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('app')
  );
}

setInterval(tick, 1000);
```

- 6. Props : Send a property into a Component (Likes sending a argument)

```js
  <Welcome name="Sara" age="18" />,
```
```js
return <h1>Hello, {this.props.name}. My age is {this.props.age}.</h1>;
```
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}. My age is {this.props.age}.</h1>;
  }
}

ReactDOM.render(
  <Welcome name="Sara" age="18" />,
  document.getElementById('app')
);
```

- 7. State : Property will be likes a argument; State is its own argument without using others
```js
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

* React program, see the render first!

[LifeCycle Methods](https://reactjs.org/docs/react-component.html)
```
constructor()
componentWillMount()
render()
componentDidMount()
```

* Update state and Renew the Date in the same time
```js
  tick() {
    this.setState({
      date: new Date()
    });
```

- 8. EventHandling
```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="www.google.com" onClick={handleClick}>
      Click me
    </a>
  );
}

ReactDOM.render(
  <ActionLink />,
  document.getElementById('app')
);
```

- 9. EventHandling
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);  // Or use => in line 18
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}> 
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
);
```