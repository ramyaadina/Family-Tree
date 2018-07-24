import React from 'react';
import request from 'request-promise'
import '../App.css'

export default class ChildForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: 'm',
            response: '',
            //value: {},
        };

        // this.handleNameChange = this.handleNameChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleNameChange(event) {
    //     this.setState({ name: event.target.value });
    // }

    handleGenderChange(event) {
        this.setState({ gender: event.target.value });
    }

    handleSubmit = async () => {
        //alert('A name was submitted: ' + this.state.name + this.state.gender);
        //event.preventDefault();
        //let value
        console.log("handle submit");
        let options = {
            method: 'POST',
            uri: 'http://localhost:3001/details/addperson',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:3000',
                'Access-Control-Request-Method': '*',
            },
            form: {
                Name : "Aish",
                Gender: "male",
                relationship: "new"
            }
          
        }
        var value
        await request(options).then(data => {
                  value = data
                  console.log(value)
                  //this.setState({isLoggedIn:value})
                }).catch(e => console.error (e))
                //return value

        //var url = 'http://localhost:3001/details/addperson';


        //for sending


        //for fetching
        // fetch(url)
        //     .then(response => {
        //         return response.json();

        //     }).then(data => {
        //         console.log(data);
        //         this.setState({
        //             response: data.type
        //         })
        //     })
        //     .catch(e => console.log('error', e));

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.props.value}
                    <input type="text"  name="name" onChange={this.props.nameChange} /><br />
                    <input type="radio" name={this.props.value + "gender"} value="m" onChange={this.handleGenderChange} defaultChecked /> Male
                    <input type="radio" name={this.props.value + "gender"} value="f" onChange={this.handleGenderChange} /> Female<br />
                    <input type="submit" value="Submit" />
                </form>
                <p>
                    {this.state.response !== '' ? this.state.response : 'nothing'}
                </p>
            </div>
        )
    }
}
