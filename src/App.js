import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handletToggle = (event) => {
    console.log("button clicked");
  };

  render() {
    return <button onClick={this.handleToggle}>Toggle</button>;
  }
}

export default App;
