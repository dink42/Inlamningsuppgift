const authenticateUsers = require('./userauth.js');

describe("Check if using correct information pass", () => {
    test("should return true for correct credentials", () => {
        const authenticate = () => "admin";
        const result = authenticateUsers(authenticate);
        expect(result).toBe(true);
    });

    test("Can't start with number", () => {
        const wrongAuth = () => "2admin";
        const result = authenticateUsers(wrongAuth);
        expect(result).toBe(false);
    });

    test("Can't start or end on numbers", () => {
        const onlyNums = () => "6admin6";
        const result = authenticateUsers(onlyNums);
        expect(result).toBe(false);
    });

    test("User can't contain numbers", () => {
        const startNums = () => "admin22";
        const result = authenticateUsers(startNums);
        expect(result).toBe(false);
    });

    test("User can contain upper and lower chars", () => {
        const letterCase = () => "AdMin";
        const result = authenticateUsers(letterCase);
        expect(result).toBe(true);
    });

    test("User can't contain special chars", () => {
        const specialChar = () => "admin@";
        const result = authenticateUsers(specialChar);
        expect(result).toBe(false);
    });

});