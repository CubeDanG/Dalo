import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {auth} from './config.js';

const welcomeText = document.getElementById('welcome-text');

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      welcomeText.textContent = `Welcome ${user.email}`;
    } else {
      // User is signed out
      // ...
    }
  });