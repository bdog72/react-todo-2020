//
//
import React, { useState, useEffect } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';

import Todo from './Todo';
import db from './firebase';

import firebase from 'firebase';

function App() {
  //
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>TODO</h1>
      <form action=''>
        <FormControl>
          <InputLabel>Write A Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          onClick={addTodo}
          disabled={!input}
        >
          Add Todo
        </Button>

        <ul>
          {todos.map((todo) => (
            <Todo text={todo} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
