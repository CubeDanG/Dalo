import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {auth} from './config.js';

const fullnameProfileDisplay = document.getElementById('fullname');
const avatarProfileDisplay = document.getElementById('avatar');

const handleGetProfile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        console.log(user.displayName);
        fullnameProfileDisplay.textContent = user.displayName;
        avatarProfileDisplay.src = user.photoURL;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      
}

handleGetProfile();