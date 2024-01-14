import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {auth} from './config.js';

const fullnameProfileDisplay = document.getElementById('fullname1');
const avatarProfileDisplay = document.getElementById('user-avt');
const backgroundProfileDisplay = document.getElementById('bg1')

const handleGetProfile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        console.log(user.displayName);
        avatarProfileDisplay.src = user.photoURL ? userProfile.photoURL: 'https://static.thenounproject.com/png/3825456-200.png';
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