import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
//import Node from './Components/Node.js';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
//import LoginForm from './Components/LoginForm.js';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
