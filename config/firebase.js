import firebase from 'firebase';
import ENV from '../env';
require('firebase/firestore');

const firebaseConfig = {
    apiKey: ENV.apiKey,
    authDomain: ENV.authDomain,
    databaseURL: ENV.databaseURL,
    projectId: ENV.projectId,
    storageBucket: ENV.storageBucket,
    messagingSenderId: ENV.messagingSenderId,
    appId: ENV.appId
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default db;
