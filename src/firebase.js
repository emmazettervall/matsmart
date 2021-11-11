import {initializeApp} from "firebase/app";
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRg2Tj5bj3pm2X6kxGZmwQj2fPpgiJ5bc",
    authDomain: "matsmart-6f4d0.firebaseapp.com",
    projectId: "matsmart-6f4d0",
    storageBucket: "matsmart-6f4d0.appspot.com",
    messagingSenderId: "832913554832",
    appId: "1:832913554832:web:7d8b88ca3b7a9c3efec715",
    measurementId: "G-CQEJSYLYEF"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {app,db};