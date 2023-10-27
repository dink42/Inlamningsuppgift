// This code defines a function authenticate
// that takes two parameters, username and password.

function authenticate(username, password) {

    /* If the username is 'admin' and the password is 'password123',
    the function returns true. Otherwise, it throws an error with the message
    'Invalid username or password'.
    */

    if (username === 'admin' && password === 'password123') {
        return true;
    } else {
        throw new Error('Invalid username or password');
    }
}

module.exports = authenticate;
