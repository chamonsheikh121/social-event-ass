// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjtP0rqHmZR5QvfwKOvOKLxd0OU5GTi8g",
  authDomain: "social-evemanagement.firebaseapp.com",
  projectId: "social-evemanagement",
  storageBucket: "social-evemanagement.appspot.com",
  messagingSenderId: "943409566183",
  appId: "1:943409566183:web:c161492d7c176803516d42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;