// JSX can be an expression
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