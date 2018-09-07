import React from 'react';
import request from 'request-promise'
import '../App.css'

export default class ChildForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            response: '',
            relationship:"new",
            wrt:''
        };

        // this.handleNameChange = this.handleNameChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleNameChange(event) {
    //     this.setState({ name: event.target.value });
    // }
    nameChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }

    handleGenderChange(event) {
        console.log("childform");
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
                'Access-Control-Request-Method': 'POST',
            },
            body: {
                
                    Name : this.state.name,
                    Gender: this.state.gender,
                    relationship:this.state.relationship
                
            },
          json:true
        }
        console.log(options.body)
        var value;
        await request(options).then(data => {
                  value = data
                  console.log(options)
                  //this.setState({isLoggedIn:value})
                }).catch(e => console.error (e))
                return value

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
                    <input type="text"  name="name" onChange={this.nameChange} /><br />
                    <input type="radio" name={this.props.value + "gender"} value="male" onChange={this.handleGenderChange} defaultChecked /> Male
                    <input type="radio" name={this.props.value + "gender"} value="female" onChange={this.handleGenderChange} /> Female<br />
                    <input type="submit" value="Submit" />
                </form>
                <p>
                    {this.state.response !== '' ? this.state.response : 'nothing'}
                </p>
            </div>
        )
    }
}
