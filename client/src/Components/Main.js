import React from 'react'
import { Route, NavLink, HashRouter, Link } from "react-router-dom";
import Home from './Home';
import ChildForm from './ChildForm';
import ParentForm from './ParentForm';
import TreeNode from './TreeNode';


export default class Main extends React.Component {
  state = {
    response: '',
    me: 'ME',
    showChildForm: false,
  };

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

  handleNameChange = (event) => {
    console.log(event)
    this.setState({ me: event.target.value });
  }
  visibleForm = () => {
    this.setState({
      showChildForm:true,
    })
  }
  render() {
    return (
      <HashRouter>
        <div>
          <div className="tree">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              {/* <li><Link to={{pathname: '/childForm', nameChange: this.handleNameChange}}>{this.state.me}</Link></li> */}
              <li onClick={this.visibleForm}>{this.state.me}</li>
            </ul>
            {this.state.showChildForm ? 
              <ChildForm nameChange={this.handleNameChange}/> : 
              <ParentForm />}
          </div>
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