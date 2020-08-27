//
//
import React, { useState, useEffect } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';

import Todo from './Todo';
import db from './firebase';

import firebase from 'firebase';
import Container from '@material-ui/core/Container';

function App() {
  //
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
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
      <Container maxWidth='md'>
        <h1>REACT TODO</h1>
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
              <Todo todo={todo} />
            ))}
          </ul>
        </form>
      </Container>
    </div>
  );
}

export default App;
