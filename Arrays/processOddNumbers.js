function processOddNumbers(arr) {
    let sumElement = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (i % 2 !== 0) {
            sumElement = element * 2;
            newArr.unshift(sumElement);
        }

    }

    console.log(newArr.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);