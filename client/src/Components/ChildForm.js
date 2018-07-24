import React from 'react';
import '../App.css'

export default class ChildForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            gender: 'm'
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

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name +this.state.gender);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.props.value}
                    <input type="text" onChange={this.props.nameChange} /><br />
                    <input type="radio" name={this.props.value + "gender"} value="m" onChange={this.handleGenderChange} defaultChecked /> Male
                    <input type="radio" name={this.props.value + "gender"} value="f" onChange={this.handleGenderChange} /> Female<br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
