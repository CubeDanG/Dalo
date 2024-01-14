import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from './config.js';

const sender = localStorage.getItem('currentUser');
const userProfile = JSON.parse(sender);

const contentInput = document.getElementById('content-input');
const sendBtn = document.getElementById('send-btn');

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('user-avt').src = user.photoURL;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

let posts = [];
const getPosts = async () => {
  const url = new URL("https://652016a0906e276284c403db.mockapi.io/articles");
  url.searchParams.append('sortBy', 'createdAt');
  url.searchParams.append('order', 'desc');
  const response = await fetch(url);
  posts = await response.json();
  displayPosts();
};
getPosts();


const contentArea = document.getElementById('posts-area');
const postTemp = document.getElementById('post-temp');
const displayPosts = () => {
  contentArea.innerHTML = "";
  posts.forEach((post) => {
    let postElm = postTemp.content.cloneNode(true);
    postElm.getElementById('author-avt').src = post.avatar;
    postElm.getElementById('author-name').textContent = post.author;
    postElm.getElementById('createdAt').textContent = new Date(post.createdAt).toLocaleString();
    postElm.getElementById('content-text').textContent = post.content;

    contentArea.appendChild(postElm);
  })
}
displayPosts();

const addPost = async () => {
  if (contentInput.value === '') {
    alert("Phải nhập nội dung.")
    return;
  }
  const newPostRequest = {
    content: contentInput.value,
    author: userProfile.displayName ? userProfile.displayName : 'Guest',
    avatar: userProfile.photoURL ? userProfile.photoURL: 'https://static.thenounproject.com/png/3825456-200.png',
    createdAt: Date.now(),
  };
  const response = await fetch(
    "https://652016a0906e276284c403db.mockapi.io/articles",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPostRequest),
    }
  );
  const newPost = await response.json();
  posts = [newPost ,...posts];
  displayPosts();
};

// contentElm.addEventListener("keypress", function (event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     addPost();
//     contentElm.value = "";
//     // Trigger the button element with a click
//   }
// });

sendBtn.addEventListener('click', addPost);
displayPosts()