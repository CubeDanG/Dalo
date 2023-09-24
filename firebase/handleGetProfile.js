import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {auth} from './config.js';

const fullnameProfileDisplay = document.getElementById('fullname');
const avatarProfileDisplay = document.getElementById('avatar');
const backgroundProfileDisplay = document.getElementById('bg')

const handleGetProfile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        console.log(user.displayName);
        avatarProfileDisplay.src = user.photoURL;
        fullnameProfileDisplay.textContent = user.displayName;
        backgroundProfileDisplay.src = user.backgroundURL;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      
}

handleGetProfile();