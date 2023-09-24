import {updatePassword} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {auth} from './config.js';

const newInput = document.getElementById('new-password');
const changeBtn = document.getElementById('change-password-btn');
const user = auth.currentUser;

const handleChangePassword = () => {
    updatePassword(user, newInput.value).then(() => {
        // Update successful.
        alert("Đổi mật khẩu thành công")
      }).catch((error) => {
        // An error ocurred
        // ...
        alert(error.code);
      });
      
}

changeBtn.addEventListener('click', handleChangePassword);