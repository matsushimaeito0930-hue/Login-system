const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginData = {
        username: username,
        password: password
    };

    console.log(loginData);

});