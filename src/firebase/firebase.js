import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrydPuxDnisTu7y9QBx-uMETkyj0hCiPM",
    authDomain: "campus-sphere-f25e0.firebaseapp.com",
    projectId: "campus-sphere-f25e0",
    storageBucket: "campus-sphere-f25e0.appspot.com",
    messagingSenderId: "587314309463",
    appId: "1:587314309463:web:3cfa0bfe5ee6ef4a367612",
    measurementId: "G-FS6ZEKRS71"
};
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
export { auth }