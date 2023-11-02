import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {auth} from './config.js';


onAuthStateChanged(auth, (user) => {
    if (user) {
    document.getElementById('user-avt').src = user.photoURL;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });