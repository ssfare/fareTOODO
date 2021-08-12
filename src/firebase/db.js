import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance

var firebaseConfig = {
  apiKey: 'AIzaSyAxXckvtyUKc3UI3yNWQaEu1MeBX33U0rY',
  authDomain: 'mysubscriptions-7d08a.firebaseapp.com',

  projectId: 'mysubscriptions-7d08a',
  storageBucket: 'mysubscriptions-7d08a.appspot.com',
  messagingSenderId: '970379705966',
  appId: '1:970379705966:web:bd82dec5453c1ef99cb07f',
  measurementId: 'G-Z15SRSM63H'
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
