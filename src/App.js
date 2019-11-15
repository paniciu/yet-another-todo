import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import GlobalStyle from '../src/styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <TodoList />
      <GlobalStyle />
    </div>
  );
}

export default App;
