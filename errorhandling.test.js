const authenticate = require('./errorhandling');

/* Jest test suite for the authenticate function.
    The first test checks if the function returns true when called with valid parameters.
*/

describe("Authenticate", () => {
    test("Valid username and password", () => {
        expect(authenticate("admin", "password123")).toBe(true);
    });

    /* The second test checks if the function throws an error
        when called with invalid parameters.
    */

    test("Invalid username and password", () => {
        expect(() => authenticate("user", "password")).toThrow(Error);
    });
});