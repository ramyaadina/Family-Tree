import React, { Component } from 'react';
import Text from './Components/Text.js'
import './App.css';
import Tree from './Components/Tree';
import { Menu } from 'antd'
import Main from './Components/Main.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Text />
          <Tree />
        </div>
        <div className="nav">
          <Main />
          {/* <Menu>
            <Menu.Item key='name'>Name</Menu.Item>
            <Menu.Item key='gender'>Gender</Menu.Item>
          </Menu> */}
        </div>
      </div>
    );
  }
}

export default App;
