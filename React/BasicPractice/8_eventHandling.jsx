function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="www.google.com" onClick={handleClick}>
      Click me
    </a>
    // <a href="www.google.com" 
    //   onClick={(e) => {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    //   }}>
    //   Click me
    // </a>
  );
}

ReactDOM.render(
  <ActionLink />,
  document.getElementById('app')
);