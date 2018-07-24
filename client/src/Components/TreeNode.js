import React from 'react';
import { Button, Card } from 'antd'

export default class TreeNode extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Me",
            gender: "M"
        }
    }

    handleClick = () => {
        this.setState({ name: this.state.name });
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    <input type="text" value={this.state.name}/>
                </Button>
            </div>
        )
    }
}
