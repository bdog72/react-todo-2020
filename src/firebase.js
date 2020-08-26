//
//

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDbc_0XlwsNJCvaitIlq_56oDZktU8GpA8',
  authDomain: 'react-todo-2020.firebaseapp.com',
  databaseURL: 'https://react-todo-2020.firebaseio.com',
  projectId: 'react-todo-2020',
  storageBucket: 'react-todo-2020.appspot.com',
  messagingSenderId: '1012950982849',
  appId: '1:1012950982849:web:906124528c0824fa5e7440',
});

const db = firebaseApp.firestore();

export default db;
