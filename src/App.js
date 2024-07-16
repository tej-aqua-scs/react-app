import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './message_pb'; // Adjust path as necessary

function App() {
  // Create an instance of the protobuf message
  const user = new User();
  user.id = '1';
  user.username = 'john_doe';
  user.email = 'john@example.com';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h2>Protobuf Message Example</h2>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
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
