import React from 'react';
import styled, {css} from 'styled-components';

const TodoWrapper = styled.div`
    position: relative;
    width: 192px;
    border: 1px solid;
    padding: 15px 20px;
    margin: 10px auto;
    cursor: pointer;

    span {
        position: absolute;
        top: 0;
        right: 5px;
        font-size: 20px;
        cursor: pointer;
    }

    ${props => props.completed && css`
        background-color: lightgray;
        text-decoration: line-through;
    `}

`

export default props => (
    <TodoWrapper 
        completed={props.todo.complete}
        onClick={props.toggleComplete}
    >
        {props.todo.name}
        <span onClick={props.onDelete}>x</span>
    </TodoWrapper>
);