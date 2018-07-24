import React, { Component } from 'react';
import Text from './Components/Text.js'
import './App.css';
import Main from './Components/Main.js';
import Node from './Components/Node.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Text />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
