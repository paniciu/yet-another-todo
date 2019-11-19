import React from 'react';
import shortid from 'shortid';
import { Button } from '../styles/Elements';

export default class TodoForm extends React.Component {
    state = {
        name: '',
        hidden: true
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.name === '') {
            this.setState({
                hidden: false
            })
        } else {
            this.props.onSubmited({
                id: shortid.generate(),
                name: this.state.name,
                complete: false
            });
            this.setState({
                name: '',
                hidden: true
            });
        }
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
                <Button onClick={this.handleSubmit} primary>Add todo</Button>
                <p className={'error'} hidden={this.state.hidden}>Add a todo first...</p>
            </form>
        );
    }
}