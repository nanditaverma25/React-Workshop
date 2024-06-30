import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Function-based component
function Greeting() {
  const name = "Nandita Verma";
  return (
    <div>
      <p>Hello! My name is {name}. This is a Function-based component.</p>
    </div>
  );
}

// Class-based component
class GreetingClass extends Component {
  render() {
    const name = "Nandita Verma";
    return (
      <div>
        <p>Hello! My name is {name}. This is a Class-based component. </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
        <GreetingClass />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;