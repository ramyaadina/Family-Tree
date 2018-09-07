import React, { Component } from 'react';
import './App.css';
import Node from './Components/Node.js';
import ChildForm from './Components/ChildForm';
import Main from './Components/Main';
import request from 'request-promise'
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from 'react-force-graph';

const myTreeData =
  [
    {
      name: 'Dewan Keshavmal',

      children:
        [
          {
            name: 'Bashesharnath Kapoor',
            attributes:
            {

              Wife: 'Ramsarni Mehra',
            },
            children:
              [
                {
                  name: 'Prithviraj Kapoor',
                  attributes:
                  {

                    Wife: 'Ramsarni Mehra',
                  },

                  children:
                    [
                      {
                        name: 'Ranbir Raj',
                        attributes:
                        {

                          Wife: 'Krishna Malhothra',
                        },
                        children:
                          [
                            {
                              name: "Randhir",
                              attributes:
                              {
                                wife: "Babitha"
                              },
                              children: [
                                {
                                  name: "Karisma",
                                  attributes: {
                                    husband: "Sanjay Kapoor",
                                  },
                                  children: [
                                    {
                                      name: "Samaira",
                                    }
                                  ]
                                },
                                {
                                  name: "Kareena",
                                  attributes: {
                                    husband: <a href="/saifali">Saif Ali Khan</a>
                                  }

                                }
                              ]

                            },
                            {
                              name: "Ritu",
                              attributes:
                              {
                                husband: 'Rajan Nanda',
                              },
                              children: [
                                {
                                  name: "Nikhil",
                                  attributes: {
                                    wife: " Shwetha Bachchan",
                                  },
                                  children: [
                                    {
                                      name: " Navya Naveli",
                                    },
                                    {
                                      name: "Agasthya"
                                    },

                                  ],


                                },
                                {
                                  name: " Nitasha",
                                }
                              ]
                            },
                            {
                              name: "Rishi",
                              attributes: {
                                wife: "Neethu Singh"
                              },
                              children: [
                                {
                                  name: "Ranbir Raj",
                                },
                                {
                                  name: "Riddima"
                                }
                              ],

                            },
                            {
                              name: "Rima",
                              attributes: {
                                husband: 'Manoj Jain'
                              },
                              children: [
                                {
                                  name: "Arman"

                                },
                                {
                                  name: 'Aadar',
                                }
                              ]
                            },
                            {
                              name: "Rajiv",
                            }

                          ]

                      },
                      {
                        name: 'Ravinder',
                      },
                      {
                        name: 'Devinder',
                      },
                      {
                        name: 'Shamsher Raj',
                        attributes:
                        {
                          Wife: "Geeta Bali",
                          wife: " Neela Devi"
                        },
                        children: [
                          {
                            name: "Adithya Raj"
                          },
                          {
                            name: "Kanchan",
                            attributes: {
                              wife: "Kethan Desai",
                            }
                          },

                        ]
                      },
                      {
                        name: 'Urmi',
                      },
                      {
                        name: 'Shashi',
                        attributes: {
                          wife: "Jennifer Kendal",
                        },
                        children: [
                          {
                            name: "Kunal",
                            attributes: {
                              wife: "Sheena Sippy"
                            }
                          },
                          {
                            name: "Karan",
                          },
                          {
                            name: "Sanjana",
                            attributes: {
                              husband: "Aditya bhattacharya",
                              husband: "Valmik Thapar"
                            }
                          }
                        ]
                      }
                    ],

                }],


          },
        ]
    }]

// fake data for force graph

const data = {
  "nodes": [
    {
      "id": "1",
      "name": "Randhir - Babita",
      "val": 100
    },
    
    {
      "id": "3",
      "name": "Kareena - Saif Ali Khan",
      "val": 40
    },
    {
      "id": "4",
      "name": "Karishma",
      "val": 30
    },
    // {
    //   "id": "5",
    //   "name": "Taimur",
    //   "val": 20
    // },
  ],
  "links": [
    
    {
      "source": "1",
      "target": "3",
      "relation": "mother",
    },
    {
      "source": "1",
      "target": "4"
    },
    {
      "source": "3",
      "target": "4"
    },
    // {
    //   "source": "3",
    //   "target": "5",
    //   "relation": "children"
    // },
  ]
}

class App extends Component {
  state = {
    visible: false,
    currentNode: '',
    familyData: {
      name: "dsgsdgs",
    },
  }

  sendData = async (values) => {
    console.log('Received values of form: ', values);
    console.log("handle submit");
    let options = {
      method: 'PUT',
      uri: 'http://localhost:3001/details/addperson/:user',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Origin': 'http://localhost:3000',
        'Access-Control-Request-Method': 'PUT',
      },
      body: {

        Name: values.name,
        Gender: values.gender,
        relationship: values.relationship,
        wrt: values.wrt
      },
      json: true
    }
    console.log(options.body)
    var value;
    await request(options).then(data => {
      value = data
      console.log(options)
      //this.setState({isLoggedIn:value})
    }).catch(e => console.error(e))
    return value

  }

  showModal = (node) => {
    console.log("Visible called"+node.name)
    this.setState({
      visible: true,
      currentNode: node.name,
    })
  }
  handleOk = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        this.sendData(values);
        //this.sendData(values);
        //console.log('Received values of form: ', values);

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
        <h1>Family Tree</h1>
        <Main />
        <div style={{ width: '100%', height: '1000px' }}>
          {/* <Tree
            data={myTreeData}
            onClick={this.showModal}
            collapsible={false}
            orientation="vertical"
            style={{ textAlign: 'center' }}
            translate={{
              x: 750,
              y: 300
            }}
          /> */}
          <ForceGraph2D
            linkMaterial="relation"
            linkOpacity={1}
            linkColor="red"
            onLinkHover={(link) => { console.log(link ? link.relation : '') }}
            onNodeClick={(node)=>{this.showModal(node)}}
            graphData={data}
            nodeAutoColorBy="group"
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.name;
              const fontSize = 12 / globalScale;
              ctx.font = `${fontSize}px Sans-Serif`;
              const textWidth = ctx.measureText(label).width;
              const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
              ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = node.color;
              ctx.fillText(label, node.x, node.y);
            }}
          />
          <Node
            buttonText={this.state.currentNode}
            visible={this.state.visible}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
          />
        </div>
            <input type="hidden" value="Kareena"/>

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
