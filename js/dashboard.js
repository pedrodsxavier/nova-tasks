const user = JSON.parse(localStorage.getItem('user'));
const isLogged = localStorage.getItem('logged');

if (!user || isLogged !== 'true') {
    window.location.href = 'index.html';
}

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user');
    localStorage.removeItem('logged');
    window.location.href = 'index.html';
});
