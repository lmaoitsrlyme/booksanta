import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyD2UBosQp4xE4NsX3tb7pzx1Nm47zTOHv0",
    authDomain: "booksanta-96364.firebaseapp.com",
    databaseURL: "https://booksanta-96364.firebaseio.com",
    projectId: "booksanta-96364",
    storageBucket: "booksanta-96364.appspot.com",
    messagingSenderId: "111430556364",
    appId: "1:111430556364:web:12a4a6457a619646b50069"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
