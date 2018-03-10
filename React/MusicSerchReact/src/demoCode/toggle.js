import React from 'react';
import ReactDOM from 'react-dom';


class Toggle extends React.Component{
    constructor(props) {
      super(props);
      this.state = {isToggleOn : true};
      this.handleCliked = this.handleCliked.bind(this);
    }

    handleCliked() {
      this.setState((prevState) => ({
        isToggleOn : !prevState.isToggleOn
      }));
    }

    render(){
      return(
        <button onClick = {this.handleCliked}>
          {this.state.isToggleOn? "ON" : "OFF"}
        </button>
      )
    }
}

export default Toggle;