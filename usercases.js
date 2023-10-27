// Function used with RegEx to see if password match the criterias.

function checkCredentials(password) {

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&]){8,}/;
    return passwordRegex.test(password);
}

// Exporting function module, to be able to use it in another file.

module.exports = checkCredentials;



/* # Dokumenterar bara hur jag tänkte innan och lämnar normalt sätt inte
    min kod såhär slarvigt med utkommenterad kod. Det är bara för att visa
    ungefär hur jag gjorde innan och lite info, du kan ignorera allt detta,
    eller radera det om det är onödigt att jag har med mitt halvdana sätt till regex.

    ## Ett försök att dokumentera och skriva tillbaka gamla koden jag fick att
        funka, jag ver regexen jag skrivit om inte är exakt den jag använde.
        Testade mig fram med flera olika för att få resultatet jag ville,
        så skriver om det så gott jag kan.

    Jag skulle aldrig lämna gammal kod utkommenterad i mitt project
    normalt sätt, detta är bara för att försöka återskapa det jag gjorde
    innan jag såg lektion 3 och alla test gick igenom då men det kändes
    halvdant. Bara därför jag lämnar gamla koden kvar så du kan se ungefär
    hur jag försökte lösa problemet, visste inte att du skule göra en jätte
    bra lektion för just regex några dagar efter :)

    Gjorde en regex function innan jag såg lektion 3, har tagit bort mycket kod.
    så nu gör det här under ingen sense alls, men de är för jag ändrat
    regex functionen så det ser bättre ut, tänkte jag sparar lite av koden
    jag skrev innan jag såg din lektion, skulle sparat allt då hade du iaf
    kunnat se hur jag löste problemet själv innan. Jag skriver på engelska
    hoppas det är okej förutom här, för jag använder engelsk layout
    på tangenbordet då det är 100x snabbare för mig att skriva kod.
    å¨ = [] på engelsk och SHIFT samma är {}. Sen är de många mer
    saker jag tycker underlättar.

function checkCredentials(userPassword) {

    Something like this was my old regex, anyway it worked,
    probably not exactly how it was. I'm writing it over from
    plain memory, the only thing I saved before changing was
    the if else statements i commented out.

    const regex = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,}$)/;
    const password = regex.match(userPassword);

    if (password == password) {
            return true, console.log("Pass Criteria");
    
        } else {
    
            return false, console.log("Do not pass");
    }
};
checkCredentials();
module.exports = checkCredentials;
    
*/