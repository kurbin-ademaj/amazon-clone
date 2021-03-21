import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDsfA9bR0dgJRKCzwutTKz9eFH1sEkuhhY',
  authDomain: 'clone-b3e94.firebaseapp.com',
  databaseURL: 'https://clone-b3e94.firebaseio.com',
  projectId: 'clone-b3e94',
  storageBucket: 'clone-b3e94.appspot.com',
  messagingSenderId: '771145710746',
  appId: '1:771145710746:web:0b325ffbcc63b664e6b323',
  measurementId: 'G-CR00HRCEJ8',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
