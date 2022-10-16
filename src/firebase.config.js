import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyB7CnnkZwmrkZLG0CL6Jrx6MIOGvNS1Gig",
    authDomain: "resturant-project-1.firebaseapp.com",
    databaseURL: "https://resturant-project-1-default-rtdb.firebaseio.com",
    projectId: "resturant-project-1",
    storageBucket: "resturant-project-1.appspot.com",
    messagingSenderId: "323936914684",
    appId: "1:323936914684:web:339159df9a5886d6941b79"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getFirestore(app)
export { app, firestore, storage }