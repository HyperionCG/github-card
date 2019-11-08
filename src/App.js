import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {},
    active: false
  }

  handleToggle = (event) => {
    console.log("button clicked");

    if (this.state.active === true) {
        this.setState({ active: false})
    } else {
      fetch("https://api.github.com/users/thurt")
      .then(res => res.json())
      .then(user => {
        this.setState({ user, active: true })
      });
    }
  };

  render() {
    return (
    <React.Fragment>
      <button onClick={this.handleToggle}>Toggle</button>
      {this.state.active === true && (
        <div>
          <img src ={this.state.user.avatar_url} />
          <h1>{this.state.user.name}</h1>
          <p>{this.state.user.bio}</p>
          <p>followers: {this.state.user.followers}</p>
        </div>
      )}
    </React.Fragment>
    );
  }
}

export default App;
