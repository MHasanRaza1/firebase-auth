import { auth, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "../firebase.js";

let formFields = document.querySelectorAll('form input');
let [userEmail, userPassword] = formFields;
let loginBtn = document.getElementById('login-btn');
let forgetPass = document.getElementById('forget-password');

const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            Toastify({
                text: "SignUp Successfully",
                duration: 3000
            }).showToast();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Toastify({
                text: "Invalid Credentials",
                duration: 3000
            }).showToast();
        });
}

loginBtn.addEventListener('click', login);

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html';
    }
});

const forget = () => {
    
    sendPasswordResetEmail(auth, userEmail.value)
        .then(() => {
            Toastify({
                text: `Password sent check email`,
                duration: 3000
                }).showToast();
        })
        .catch((error) => {
            Toastify({
                text: errorMessage,
                duration: 3000
                }).showToast();
        });
}

forgetPass.addEventListener('click', forget)