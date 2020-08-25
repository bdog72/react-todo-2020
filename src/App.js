//
//
import React, { useState } from 'react';
import './App.css';

function App() {
  //
  const [todos, setTodos] = useState(['Walk Dog', 'Drink Beer', `Wash Car`]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    setTodos([...todos, input]);
  };

  return (
    <div className='App'>
      <h1>TODO</h1>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
