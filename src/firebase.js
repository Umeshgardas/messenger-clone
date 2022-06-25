import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAx57HuxljXFSewukqEDse3SqCIhl7-1nA",
    authDomain: "messenger-clone-de105.firebaseapp.com",
    projectId: "messenger-clone-de105",
    storageBucket: "messenger-clone-de105.appspot.com",
    messagingSenderId: "104518215529",
    appId: "1:104518215529:web:e60a5b8d8c6e516f26bff8",
    measurementId: "G-V7KXY83C0D"
});

const db = firebaseApp.firestore();

export default db;