import React, { Component } from 'react';
import paw_tiger from './paw_tiger_large.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={paw_tiger} className="App-logo" alt="logo" />
          <h1>
            AWS Tiger Demo
          </h1>
          <a
            className="App-link"
            href="https://medium.com/@kangzeroo/the-complete-aws-boilerplate-f8ce812f356b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn AWS Cloud for Startups
          </a>
        </header>
      </div>
    );
  }
}

export default App;
