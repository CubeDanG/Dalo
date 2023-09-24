import {auth} from './config.js';
import {signInAnonymously} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const SignInAnonymouslyBtn = document.getElementById('signInAnonymously-btn');

const handleSignInAnonymously = () => {
    signInAnonymously(auth)
  .then(() => {
    // Signed in..
    // const user = userCredential.user;
    alert("Đăng nhập thành công, chuyển đến trang chủ.")
    window.location.replace("../Lesson6/index.html")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}

SignInAnonymouslyBtn.addEventListener('click', handleSignInAnonymously);