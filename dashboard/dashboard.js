import { auth, signOut, onAuthStateChanged } from "../firebase.js";

let logoutBtn = document.getElementById('logout-btn');

const logout = (event) => {
    event.preventDefault();
    signOut(auth)
        .then(() => {
            Toastify({
                text: "Logout Successfully",
                duration: 3000
                }).showToast();
        })
}

logoutBtn.addEventListener('click', logout);

onAuthStateChanged(auth, (user) => {
    if (!user) {
     window.location.href = '../login/login.html' 
    }
  });


