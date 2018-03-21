// You can embed any JavaScript expression in JSX by wrapping it in curly braces.
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