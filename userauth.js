// Using function with 1 parameter to export and check user credentials with RegEx.
function authenticateUsers(username) {

    /* This is similair to the first one, i'm testing around here a bit, i'm not sure the first one is correct, so i did
    an additonal and tried some things out. Hopefully it's not to bad, i'm diving in to jest and its functions but
    its alot. Instead of doing functions as before, i simply use the code in a cleaner manner. The test cases are similair to the user ones. */

    // Took a long time to figure out some regex, but this can't take number.
    // Want to do it more sophisticated but I think I been spending to much time on this.
    // This Regex may be better \b(?!admin\b)\w+ but not sure if it takes out admin and accepts everything else with admin in it, like adminad, adminoro.
    const userRegex = /^(?=.*[A-Za-z])^(?!.*?(\d.).*$)(?!.*?[@#%&!?].*$){5}/;
    return userRegex.test(username);

}

module.exports = authenticateUsers;
