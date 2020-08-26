//
//
import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

import './Todo.css';

function Todo(props) {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary='Dummy Deadline' />
      </ListItem>
    </List>
  );
}

export default Todo;
