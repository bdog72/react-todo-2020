//
//

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBqKVU0z23TEEg-wuBSsjQy7-bTbpNfwtk',
  authDomain: 'revents-2020.firebaseapp.com',
  databaseURL: 'https://revents-2020.firebaseio.com',
  projectId: 'revents-2020',
  storageBucket: 'revents-2020.appspot.com',
  messagingSenderId: '828206534368',
  appId: '1:828206534368:web:a519aedb0da18afb694a85',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
