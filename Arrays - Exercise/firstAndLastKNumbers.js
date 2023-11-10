function firstAndLastKNumbers(input) {
    let k = input[0]
    let firstElements = input.slice(1, k + 1);
    let lastElements = input.slice(-k);
    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));
}
firstAndLastKNumbers([2,
    7, 8, 9]);
firstAndLastKNumbers([3,
    6, 7, 8, 9]);