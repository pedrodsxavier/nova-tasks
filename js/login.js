const form = document.getElementById('loginForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const fakeUser = {
        username: "admin",
        password: "123456"
    };

    if (username === fakeUser.username && password === fakeUser.password) {

        Auth.login(username);

        window.location.href = 'dashboard.html';

    } else {
        alert('Invalid username or password.');
    }
});