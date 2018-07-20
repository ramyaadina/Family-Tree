import React from 'react';
import TreeNode from './TreeNode'
import '../App.css'

export default class Tree extends React.Component {
    render() {
        return (
            <div>
                <a href="#">+</a>
                <TreeNode/>
                <a href="#">+</a>
            </div>
        )
    }
}
