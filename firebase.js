import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZ2F1lXCw_OyefMpMjH5KfQDHtw-JaulM",
  authDomain: "signup-form-b9e84.firebaseapp.com",
  projectId: "signup-form-b9e84",
  storageBucket: "signup-form-b9e84.appspot.com",
  messagingSenderId: "707088550165",
  appId: "1:707088550165:web:74cc8ab137dfe6582e011c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail}