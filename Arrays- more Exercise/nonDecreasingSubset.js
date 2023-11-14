function nonDecreasingSubset(numbers) {
    let result = [];

    if (numbers.length === 0) {
        return result;
    }

    let currentBiggest = numbers[0];
    result.push(currentBiggest);

    for (let i = 1; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        if (currentNumber >= currentBiggest) {
            result.push(currentNumber);
            currentBiggest = currentNumber;
        }
    }

    return result.join(" ");
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);