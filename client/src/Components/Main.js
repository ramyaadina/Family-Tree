import React from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from './Home';
import ChildForm from './ChildForm';
import ParentForm from './ParentForm';


export default class Main extends React.Component {
    // state = {
    //   response: ''
    // };
  
    // componentDidMount() {
    //   var url='https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';
    //   fetch(url)
    //   .then(response=>{
    //     return response.json();
  
    //   }).then(data=>{
    //     console.log(data);
    //     this.setState({ 
    //       response: data.contacts[0]
    //     })
    //   })
    //   .catch(e => console.log('error', e));
    // };
  
    render() {
      return (
        <HashRouter>
          <div>
            <nav className='menu'>
              <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/childForm">Add</NavLink></li>
                <li><NavLink to="/parentForm">Add Parents</NavLink></li>
              </ul>
            </nav>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/childForm" component={ChildForm} />
              <Route exact path="/parentForm" component={ParentForm} />
            </div>
            {/* {this.state.response.name} */}
          </div>
        </HashRouter>
      );
    }
  }