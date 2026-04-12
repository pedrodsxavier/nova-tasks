const Auth = {
    get() {
        return JSON.parse(localStorage.getItem('auth'));
    },

    isLogged() {
        const auth = this.get();
        return auth && auth.logged === true;
    },

    login(username) {
        const auth = {
            username,
            logged: true
        };

        localStorage.setItem('auth', JSON.stringify(auth));
    },

    logout() {
        localStorage.removeItem('auth');
        window.location.href = 'index.html';
    },

    requireAuth() {
        if (!this.isLogged()) {
            window.location.href = 'index.html';
        }
    }
};