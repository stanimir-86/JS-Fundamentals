function addAndSubtract(a, b, c) {

    let sum = sumOfTwoNumbers(a, b);
    let substract = substractTwoNumbers(sum, c);
    return substract;
}

function sumOfTwoNumbers(a, b) {
    return a + b;
}
function substractTwoNumbers(a, b) {
    return a - b;
}
console.log(addAndSubtract(23,
    6,
    10)) 