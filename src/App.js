import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {},
    active: false
  }

  handletToggle = (event) => {
    console.log("button clicked");
    fetch("https://api.github.com/users/thurt")
    .then(res => res.json())
    .then(user => {
      this.setState({ user })
    });
  };

  render() {
    return <button onClick={this.handleToggle}>Toggle</button>;
  }
}

export default App;
