const authenticateUser = require('./user');

// Check and first describe what the test do
describe('Check if user, using correct information', () => {
    it('should return true for correct credentials', () => {
        const usernameFunction = () => 'admin';
        const passwordFunction = () => 'password123';
        const result = authenticateUser(usernameFunction, passwordFunction);
        expect(result).toBe(true);
    });

    // Looking if the test returns false when using the wrong credentials
    it('should return false for incorrect credentials', () => {
        const usernameFunction = () => 'user123';
        const passwordFunction = () => 'wrongpassword';
        const result = authenticateUser(usernameFunction, passwordFunction);
        expect(result).toBe(false);
    });
});


/* Mayby not the best way to do it, but it worked okay. The other test i changed
    after watching lecture 3 to be more clean and flexible, had some technical problems
    so i did not attend on the meeting, im sorry for that. I actually wanted to ask
    about how to check regex, but solved it. Then saw lecture 3 and rewrote it, some
    chunks of the code in usercases.js is erased then I thought mayby I should leave the
    code I wrote left. It wont make much sense doe to some parts are gone, im gonna
    try to rewrite the regex I used and the functions to test the code if I have time.
*/