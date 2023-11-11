import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDXshqnMaDDv7fgBiktqOHh9hYFMAXEPDI",
    authDomain: "myprojectjsi03dang.firebaseapp.com",
    projectId: "myprojectjsi03dang",
    storageBucket: "myprojectjsi03dang.appspot.com",
    messagingSenderId: "683688456198",
    appId: "1:683688456198:web:75136b01d7aacee6939387",
    measurementId: "G-P733B0NVDV"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);

