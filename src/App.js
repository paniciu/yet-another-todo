import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import GlobalStyle from '../src/styles/GlobalStyle';
import { Container } from '../src/styles/Layout';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TodoList />
    </Container>
  );
}

export default App;
