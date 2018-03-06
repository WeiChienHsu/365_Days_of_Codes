import React from 'react';
import ReactDOM from 'react-dom';

// Create a New Component. 
// This Component should produce some HTML.

const App = () => {
  return <div> Hi! </div>;
}

// Take this component's grnerated HTML 
// and put it on the page(in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));