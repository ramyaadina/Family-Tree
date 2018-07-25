import React, { Component } from 'react';
import Text from './Components/Text.js'
import './App.css';
import Main from './Components/Main.js';
import Node from './Components/Node.js';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'Parents',
    attributes: {
      Father: 'x',
      Mother: 'y',
    },
    children: [
      {
        name: 'Children',
        attributes: {
          Husband: 'Dwayne',
          Wife: 'Rina',
        },
        children: [
          {
            name: 'Children',
            attributes: {
              Husband: <a href="//google.com">Dwayne</a>,
              Wife: 'Rina',
            },
          },
          {
            name: 'Level 2: B',
          },
        ],
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];
class App extends Component {
  state={
    visible: false,
    familyData: {
      name: "dsgsdgs",
    },
  }

  showModal = () => {
    console.log("Visible called")
    this.setState({
      visible: true,
    })
  }
  handleOk = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  componentDidMount() {
    //get from db
  }
  render() {
    return (
      <div >
        {/* <div className="App">
          <Text />
          <Main />
        </div> */}
        <div style={{width: '100%', height: '1000px'}}>
          <Tree 
            data={myTreeData} 
            onClick={this.showModal}
            collapsible={false} 
            orientation="vertical"
            style={{textAlign: 'center'}}
            translate={{
              x: 750,
              y:300
            }}
          />
          <Node 
            buttonText="Add your details" 
            visible={this.state.visible} 
            handleOk={this.handleOk} 
            handleCancel={this.handleCancel} 
          />
        </div>

        {/* {this.state.familyData ? 
          <div>
            <Node buttonText="Add parent"/>
            <Node buttonText="Add Sibling"/>
            <Node buttonText="Add Spouse"/>
            <Node buttonText="Add Children"/>
          </div> :
          <Node buttonText="Add your details" visible={this.state.visible} />
        } */}
      </div>
    );
  }
}

export default App;
