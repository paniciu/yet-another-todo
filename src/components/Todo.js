import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default props => (
    <Wrapper>
        <div 
            style={{
                textDecoration: props.todo.complete ? 'line-through' : ''
            }}
            onClick={props.toggleComplete}
        >
            {props.todo.name}
        </div>
        <button onClick={props.onDelete}>x</button>
    </Wrapper>
    
);