import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDA9I6HFWxQrAKtjjUi4OW6zCz86ZbtlrI",
    authDomain: "prentt-lenceria.firebaseapp.com",
    projectId: "prentt-lenceria",
    storageBucket: "prentt-lenceria.appspot.com",
    messagingSenderId: "743180291622",
    appId: "1:743180291622:web:fb96263ae1a6942eb360e7"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}