import {db} from './config.js';
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
        createdAt: serverTimestamp(),

    });
}

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
  

const wrapperMessage = document.getElementById('messages-list');
const renderMessage = () => {
    wrapperMessage.innerHTML = "";
    const sender = localStorage.getItem('currentUser');
    const userProfile = JSON.parse(sender);
    messageList.forEach((message) => {
        const senderElm = document.createElement('p');
        senderElm.textContent = userProfile.displayName;
        wrapperMessage.appendChild(senderElm);
        const msgElm = document.createElement('p');
        msgElm.textContent = message.content;
        wrapperMessage.appendChild(msgElm);
    })
};


getMessages();