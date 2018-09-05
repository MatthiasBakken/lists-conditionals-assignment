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

  removeCharHandler = (index) => {
    const currentState = this.state.randomInput.split('');
    currentState.splice(index, 1);
    const updatedState = currentState.join('');
    this.setState({ randomInput: updatedState })
  };

  render() {
    const charList = this.state.randomInput.split('').map((char, index) => {
      return <CharComponent character={char} key={index} removed={() => this.removeCharHandler(index)} />
    })

    return (
      <div className="App">
        <ValidationComponent randomEntry={this.state.randomInput} />  
        <input
          type="text"
          value={this.state.randomInput}
          onChange={this.randomInputHandler}
          style={{ fontSize: "1.2rem", width: "200px" }}
        />
        <div className="char-container">
          {charList}
        </div>
      </div>
    );
  }
}

export default App;
