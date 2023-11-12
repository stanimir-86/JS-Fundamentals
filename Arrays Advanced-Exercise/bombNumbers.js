function bombNumbers(input, bombInfo) {

    let [bombNumber, bombPower] = bombInfo;
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === bombNumber) {

            let leftIndex = Math.max(i - bombPower, 0);
            let rightIndex = Math.min(i + bombPower, input.length - 1);

            input.splice(leftIndex, rightIndex - leftIndex + 1);
            i = leftIndex - 1;
        }

    }

    result = input.reduce((acc, curr) => acc + curr, 0);
    return result;

}
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));