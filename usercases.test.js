const checkCredentials = require('./usercases');

// Importing function checkCredentials with require.
// Check if password fullfill the criteria in usercases.
// Before I changed it, the regex only checked for atleast 8 letters and atleast one number.

describe('Password validations', () => {
    test('Should return true for correct credentials', () => {
        const check = () => "P@ssword123";
        expect(checkCredentials(check)).toBe(true);
    });

    test('Password do not have alphanumerical characters or minimum lenght', () => {
        const alphanumerical = () => "55547";
        expect(checkCredentials(alphanumerical)).toBe(false);
    });

    test('Password do not have any number', () => {
        const numCheck = () => "P@ssword";
        expect(checkCredentials(numCheck)).toBe(false);
    });

    test('Password got no special chars or number', () => {
        const specChar = () => "pas"
        expect(checkCredentials(specChar)).toBe(false)
    });
});



/* # Part of the old code! Tried to rewrite some from memory.
    Used (it, and not test) after description and it worked.

    describe(Password should meet criteria, () => {
        it(Should pass if right alphanumerical and numbers are right, () => {
            const checkCredentials => "password123";
            const result = checkCredentials(userPassword);
                expect(result).toEqual();
        });
        it(Should not pass if to short or no letters, () => {
            const checkCredentials => "123";
            const result = checkCredentials(userPassword);
                expect(result).toEqual();
        });
    });   
*/