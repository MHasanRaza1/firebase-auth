import { auth, createUserWithEmailAndPassword, onAuthStateChanged} from "./firebase.js";
let formFields = document.querySelectorAll('form input');
let [userEmail, userPassword] = formFields;
let signupBtn = document.getElementById('signup-btn');
let error = document.getElementById('error');
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const signup = () => {
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            Toastify({
                text: "Signup Successfully",
                duration: 3000
                }).showToast();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Toastify({
                text: errorMessage,
                duration: 3000
                }).showToast();
        });
}

const checkReg = (event) => {
    event.preventDefault();
    if((emailReg.test(userEmail.value)) && (passwordReg.test(userPassword.value))){
        signup();
    }
    else{
        error.innerText = 'Email and Password must follow the standard';
    }
}

signupBtn.addEventListener('click',checkReg);

onAuthStateChanged(auth, (user) => {
    if (user) {
     window.location.href = './dashboard/dashboard.html' 
    }
  });