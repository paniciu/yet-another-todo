import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

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

    deleteAllComplete = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
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

        return <div>
            <TodoForm onSubmited={this.addTodo} />
            {todos.map(todo => (
                <Todo 
                    key={todo.id}
                    toggleComplete={() => this.toggleComplete(todo.id)}
                    onDelete={() => this.handleDelete(todo.id)}
                    todo={todo} />
            ))}
            <div>
                todos left: {this.state.todos.filter(todo => !todo.complete).length}
            </div>
            <div>
                <button onClick={() => this.updateToShow('all')}>all</button>
                <button onClick={() => this.updateToShow('active')}>active</button>
                <button onClick={() => this.updateToShow('complete')}>complete</button>
            </div>
            {this.state.todos.some(todo => todo.complete) ? (
            <div>
                <button onClick={this.deleteAllComplete}>Delete completed</button>
            </div>
            ) : null}
        </div>
    };
}