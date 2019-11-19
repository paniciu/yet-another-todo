import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import styled from 'styled-components';
import { Button } from '../styles/Elements';

const Wrapper = styled.div`
    padding: 25px;
    text-align: center;
    color: white;
    width: 50vw;
    min-height: 50vh;
    background-color: rgba(255,255,255, .4);
    box-shadow: 0px 5px 12px -5px rgba(0,0,0,0.75);
`
const H1 = styled.h1`
    font-size: 30px;
`

export default class TodoList extends React.Component {
    state = {
        todos: [],
        toShow: 'all'
    }

    addTodo = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));
    };

    toggleComplete = id => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        }));
    };

    // Show all/active/complete
    updateToShow = s => {
        this.setState({
            toShow: s
        });
    };

    handleDelete = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    };

    render() {
        let todos = [];

        if(this.state.toShow === 'all') {
            todos = this.state.todos;
        } else if(this.state.toShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete)
        } else if(this.state.toShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return <Wrapper>
                <H1>Todo or not todo...</H1>
                <TodoForm onSubmited={this.addTodo} />
                {todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        onDelete={() => this.handleDelete(todo.id)}
                        todo={todo} />
                ))}
                {this.state.todos.length === 0 ? (
                    <p>You have no todos !</p>
                ) : (
                    <div>
                        <p>Todos left: {this.state.todos.filter(todo => !todo.complete).length}</p>
                        <div>
                            <Button onClick={() => this.updateToShow('all')}>all</Button>
                            <Button onClick={() => this.updateToShow('active')}>active</Button>
                            <Button onClick={() => this.updateToShow('complete')}>completed</Button>
                        </div>
                    </div>
                )}
                
            </Wrapper>
        
    };
}