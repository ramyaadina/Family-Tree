import React from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom";
//import Home from './Home';
import LoginForm from './LoginForm';
import RegForm from './RegForm';

export default class Main extends React.Component {
  state = {
    response: ''
  };

  // handleNameChange = (event) => {
  //   console.log(event)
  //   this.setState({ me: event.target.value });
  // }
  // visibleForm = () => {
  //   this.setState({
  //     showChildForm: true,
  //   })
  // }
  render() {
    return (
      <HashRouter>
        <div>
          <div className="tree">
            <ul>
              <li><NavLink to="/SignIn">SignIn</NavLink></li>
              <li><NavLink to="/Register"></NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/SignIn" component={LoginForm} />
            <Route exact path="/Register" component={RegForm} />
          </div>
        </div>
      </HashRouter>
    );
  }
}