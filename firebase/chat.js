import {db, auth} from './config.js';
import {
    collection,
    query,
    getDocs,
    addDoc,
    serverTimestamp,
    orderBy,
    where, 
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


const ref = collection(db, "messages");
const q = query(ref, orderBy('createdAt'));
let messageList = [];

const querySnapshot = await getDocs(q);
console.log(querySnapshot);
const inputMessage = document.getElementById("message");
const sendBtn = document.getElementById('send-btn');
const addMessage = async () => {
    const message = inputMessage.value;
    const sender = localStorage.getItem('currentUser');
    const userProfile = JSON.parse(sender);
    await addDoc(ref, {
        content: message,
        sender: userProfile.displayName ? userProfile.displayName : 'Guest',
        photoURL: userProfile.photoURL,
        createdAt: Date.now(),
    });
}

inputMessage.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
        addMessage();
        inputMessage.value = "";
      // Trigger the button element with a click
    }
  });

sendBtn.addEventListener('click', addMessage);

// Lấy tin nhắn từ FB
// const getMessages = async () => {
//     const q = query(ref, orderBy('createdAt'));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         messageList.push(doc.data());
//     });
//     renderMessage();
//     // console.log(messageList);
// };

// Render data ra giao diện

onSnapshot(q, (querySnapshot) => {
    messageList = [];
    querySnapshot.forEach((doc) => {
        messageList.push(doc.data());
    });
    renderMessage();
    
    // console.log("Current cities in CA: ", cities.join(", "));
  });
  
  const handleGetProfile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        console.log(user.displayName);
        avatarProfileDisplay.src = user.photoURL;
        // fullnameProfileDisplay.textContent = user.displayName;
        // backgroundProfileDisplay.src = user.backgroundURL;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      
}

handleGetProfile();


//code render tin nhắn
const wrapperMessage = document.getElementById('messages-list');
const renderMessage = () => {
    wrapperMessage.innerHTML = "";
    const sender = localStorage.getItem('currentUser');
    messageList.forEach((message) => {
        const liElm = document.createElement('li');
        const divMsg = document.createElement('div');
        const divMsg2 = document.createElement('div')
        const avtElm = document.createElement('img');
        const sendTime = ref.createdAt;
        avtElm.classList.add("rounded-circle");
        avtElm.setAttribute('id','avatar');
        avtElm.setAttribute('width', '30');
        avtElm.src = message.photoURL;
        // const handleGetProfile = () => {
        //     onAuthStateChanged(auth, (user) => {
        //         if (user) {
        //         console.log(user.displayName);
        //         avtElm.src = user.photoURL;
        //         // fullnameProfileDisplay.textContent = user.displayName;
        //         // backgroundProfileDisplay.src = user.backgroundURL;
        //           // ...
        //         } else {
        //           // User is signed out
        //           // ...
        //         }
        //       });
              
        // }
        // handleGetProfile();
        liElm.classList.add("clearfix");
        divMsg.classList.add('message-data');


        liElm.appendChild(divMsg);
        liElm.appendChild(divMsg2);
        divMsg.appendChild(avtElm);
        wrapperMessage.appendChild(liElm);

        const senderElm = document.createElement('div');
        senderElm.classList.add("message-data-time");
        const day = new Date(message.createdAt);
        const m = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
        senderElm.textContent = message.sender + " - " + new Date(message.createdAt).toLocaleString();
        divMsg.appendChild(senderElm);
        // wrapperMessage.appendChild(senderElm);
        const msgElm = document.createElement('div');
        msgElm.classList.add("message");
        msgElm.classList.add("my-message");
        msgElm.textContent = message.content;
        liElm.appendChild(msgElm);
        // wrapperMessage.appendChild(msgElm);
    })
    wrapperMessage.scrollTo(0, wrapperMessage.scrollHeight);
};

getMessages();