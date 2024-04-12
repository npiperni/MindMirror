// Import the functions you need from the SDKs you need
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyC8i6XfZWVXxDIi-hc0nK_Z8L1FGxWOpks',
  authDomain: 'mindmirror-d7385.firebaseapp.com',
  databaseURL: 'https://mindmirror-d7385-default-rtdb.firebaseio.com',
  projectId: 'mindmirror-d7385',
  storageBucket: 'mindmirror-d7385.appspot.com',
  messagingSenderId: '680506894065',
  appId: '1:680506894065:web:9e851005f1a02377afab50',
  measurementId: 'G-ZPLD64RD6N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
