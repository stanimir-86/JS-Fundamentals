function mergeArrays(firstArr, secondArr) {

    let newArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let valueA = firstArr[i];
        let valueB = secondArr[i];

        if (i % 2 === 0) {
            valueA = Number(valueA);
            valueB = Number(valueB);
        }

        let currResult = valueA + valueB;
        newArr.push(currResult);
    }

    console.log(newArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);