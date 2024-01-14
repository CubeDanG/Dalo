import {auth} from './config.js';
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const usernameElm = document.getElementById('username');
const passwordElm = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

const handleLogin = () => {
    const email = usernameElm.value;
    const password = passwordElm.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const email = user.email;
    const displayName = user.displayName;
    const photoURL = user.photoURL;
    const userProfile = {
        email, 
        displayName, 
        photoURL
    }
    localStorage.setItem('currentUser', JSON.stringify(userProfile));
    alert("Đăng nhập thành công, chuyển đến trang chủ.")
    window.location.replace("./chat.html")
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
    });
}

loginBtn.addEventListener('click', handleLogin);

/// fix 2023