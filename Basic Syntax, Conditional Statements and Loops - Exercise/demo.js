function solve(input) {

    let userName = input[0];
    let password = "";

    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
    }
    let incorrectPasswordCount = 0;

    for (let i = 1; i < input.length; i++) {
        let tempPassword = input[i];


        if (tempPassword === password) {
            console.log(`User ${userName} logged in.`);
        } else {
            incorrectPasswordCount++;
            if (incorrectPasswordCount === 4) {
                console.log(`User ${userName} blocked!`)
                break;
            }
            console.log("Incorrect password. Try again.");
        }
    }


}
solve(['Acer', 'login', 'go', 'let me in', 'recA']);
solve(['momo', 'omom']);
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);


