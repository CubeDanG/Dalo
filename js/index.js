const changePassword = document.getElementById('change-password');

changePassword.addEventListener('click', () => {
    window.location = './change-password.html'

})

const profileBtn = document.getElementById('profile-btn');

profileBtn.addEventListener('click', () => {
    window.location = './profile.html';
});

const editProfileBtn = document.getElementById('edit-profile-btn');

editProfileBtn.addEventListener('click', () => {
    window.location = './profile-edit.html';
})