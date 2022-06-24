function passwordValidator(givenPassword) {
    function validateLength(givenPassword) {
        if (givenPassword.length < 6 || givenPassword.length > 10) {
            console.log('Password must be between 6 and 10 characters');
            return false;
        } else {
            return true;
        }
    }

    function validateAlphaNumeric(givenPassword) {
        let regEx = /^[0-9a-zA-Z]+$/;
        if (!givenPassword.match(regEx)) {
            console.log('Password must consist only of letters and digits');
            return false;
        } else {
            return true;
        }
    }

    function validateMinDigits(givenPassword) {
        let regEx = /\d+/;
        let allDigits = givenPassword.match(regEx);
        if (!allDigits || allDigits[0].length < 2) {
            console.log('Password must have at least 2 digits');
            return false;
        } else {
            return true;
        }
    }

    let length = validateLength(givenPassword);
    let alphaNumeric = validateAlphaNumeric(givenPassword);
    let minDigits = validateMinDigits(givenPassword);

    if (length && alphaNumeric && minDigits) {
        console.log('Password is valid')
    }
}

passwordValidator('logIn')

passwordValidator('MyPass123')

passwordValidator('Pa$s$s')