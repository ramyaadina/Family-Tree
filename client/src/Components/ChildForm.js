import React from 'react';
import '../App.css'

export default class ChildForm extends React.Component {
    render() {
        return (
            <div>
                {this.props.value}
                Name : <input type="text" />
                Gender : <input type="radio" name="gender" value="male" checked /> Male<br />
                <input type="radio" name="gender" value="female" /> Female
            </div>
        )
    }
}
