import React from 'react';

export default class Text extends React.Component {
    state = {
        response: ''
    }
    componentDidMount() {
        var url = 'http://localhost:3001/api';
        fetch(url)
            .then(response => {
                return response.json();

            }).then(data => {
                console.log(data);
                this.setState({
                    response: data
                })
            })
            .catch(e => console.log('error', e));
    }
    render() {
        return (
            <div className="Heading">
                <h1>
                    Family Tree {this.state.response.message}
                </h1>
            </div>
        )
    }
}
