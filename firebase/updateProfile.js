import {auth} from './config.js';
import {updateProfile, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const submitBtn = document.getElementById('submit-btn');
let avatarInput = document.getElementById('photo');
let nameInput = document.getElementById('name');

const handleProfileChange = () => {
    updateProfile(auth.currentUser, {
        displayName: nameInput.value, photoURL: avatarInput.value
      }).then(() => {
        // Profile updated!
        // ...
        alert("Cập nhật profile thành công")
      }).catch((error) => {
        // An error occurred
        // ...
        alert(error.code);
      });
      Set
      
}

const handleGetProfile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        nameInput.value = user.displayName;
        avatarInput.value = user.photoURL;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      
}

submitBtn.addEventListener('click', handleProfileChange);
handleGetProfile();