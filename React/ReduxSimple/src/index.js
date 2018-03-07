import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  var element = (
    <div>
      <h1>Hello, World</h1>
      <h2> It is {new Date().toLocaleTimeString()}</h2>
    </div>  
  )

  ReactDOM.render(element, document.querySelector(".container"));
}

setInterval(tick, 1000);