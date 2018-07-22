import React from 'react';
import '../App.css'

export default class ChildForm extends React.Component {
    render() {
        return (
            <div>
                {this.props.value}
                Name : <input type="text" /><br />
                Gender : <input type="radio" name={this.props.value+"gender"} value="male" checked /> Male
                <input type="radio" name={this.props.value+"gender"} value="female" /> Female
            </div>
        )
    }
}
