import React from 'react';
import '../App.css'
import ChildForm from './ChildForm';

export default class Tree extends React.Component {
    render() {
        return (
            <div>
                <ChildForm value="Father" />
                <ChildForm value="Mother" />
            </div>
        )
    }
}
