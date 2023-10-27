// Using function with 2 parameters wich I use as own functions in the scope.

function authenticateUser(usernameFunction, passwordFunction) {
    const username = usernameFunction();
    const password = passwordFunction();

    // Simple check if credentials are correct!

    if (username === "admin" && password === "password123") {
        return true;
    }

    // If credentials do not match, it will return false.

    else {
        return false;
    }
}

// Export functions to user.test.js.

module.exports = authenticateUser;