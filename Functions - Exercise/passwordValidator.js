function passwordValidator(password) {

    let hasValidLength = validateLength(password);
    let hasValidSpecialChar = validateNonSpecialChar(password);
    let hasValidDigit = checkForcontainsTwoNumbers(password);
    printResult(hasValidLength, hasValidSpecialChar, hasValidDigit);

    function validateLength(password) {
        return password.length >= 6 && password.length <= 10
    }

    function validateNonSpecialChar(text) {
        for (let char of text) {
            let num = char.charCodeAt(0);
            let isLowerChar = checCharForLowerCase(num);
            let isUpperCahr = checCharForUpperCase(num);
            let isNumber = checkContainNumber(num);
            if (!isLowerChar && !isUpperCahr && !isNumber) {
                return false
            }
        }
        return true;
    }
    function checkContainNumber(num) {
        return num >= 48 && num <= 57;
    }
    function checCharForUpperCase(num) {
        return num >= 65 && num <= 90;
    }
    function checCharForLowerCase(num) {
        return num >= 97 && num <= 122
    }
    function checkForcontainsTwoNumbers(password) {
        let counter = 0;
        for (let ch of password) {
            let isNumber = checkContainNumber(ch.charCodeAt(0));
            if (isNumber) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        }
        return false;
    }
    function printResult(validLength, validSymbol, validDigit) {
        if (!validLength) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!validSymbol) {
            console.log("Password must consist only of letters and digits");
        }
        if (!validDigit) {
            console.log("Password must have at least 2 digits");
        }
        if (validLength && validSymbol && validDigit) {
            console.log("Password is valid");
        }
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');