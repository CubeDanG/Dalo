import {auth} from './config.js';
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const usernameElm = document.getElementById('username');
const passwordElm = document.getElementById('password');
const registerBtn = document.getElementById('register-btn');

const handleRegister = () => {
    const email = usernameElm.value;
    const password = passwordElm.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Đăng ký thành công, chuyển đến trang đăng nhập");
    window.location = './login.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
  });

}

registerBtn.addEventListener('click', handleRegister);