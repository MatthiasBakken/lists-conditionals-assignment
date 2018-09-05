import React, { Component } from 'react';

import './App.css';
import ValidationComponent from './Components/ValidationComponent/ValidationComponent';
import CharComponent from './Components/CharComponent/CharComponent';

class App extends Component {
  state = {
    randomInput: ''
  }

  randomInputHandler = (event) => {
    this.setState({ randomInput: event.target.value });
  };

  removeCharHandler = (props) => {
    const currentState = this.state.randomInput.split('')
  };

  render() {
    return (
      <div className="App">
        <ValidationComponent randomEntry={this.state.randomInput} />  
        <input
          type="text"
          value={this.state.randomInput}
          onChange={this.randomInputHandler}
          style={{ fontSize: "1.2rem", width: "200px" }}
        />
        <CharComponent chars={this.state.randomInput} removed={this.removeCharHandler} />
      </div>
    );
  }
}

export default App;
