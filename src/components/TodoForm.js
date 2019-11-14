import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
    state = {
        name: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmited({
            id: shortid.generate(),
            name: this.state.name,
            complete: false
        });
        this.setState({
            name: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder='Todo...'
                />
                <button onClick={this.handleSubmit}>Add todo</button>
            </form>
        );
    }
}