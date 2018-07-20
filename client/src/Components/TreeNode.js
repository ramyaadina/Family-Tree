import React from 'react';
import { Button, Card } from 'antd'

export default class TreeNode extends React.Component {
    constructor() {
        super();
        this.state = {
            name : "Me",
            gender : "M"
        }
    }
    render() {
        return (
            <div>
                <Button type="dashed"
                    size="large"
                    onClick={()=>{alert("Clicked")}}
                    >
                {this.state.name}</Button>
                <Card title={this.state.name}>{this.state.gender}</Card>
            </div>
        )
    }
}
