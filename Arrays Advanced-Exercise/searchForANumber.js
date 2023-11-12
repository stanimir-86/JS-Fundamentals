function seachForANumber(input, input2) {

    let [takenElements, deleteElements, searchingNumber] = input2;

    let newArr = [];

    let counter = 0;

    newArr = input.splice(0, takenElements);

    for (let i = 0; i < newArr.length; i++) {
        if (i < deleteElements) {
            newArr.shift();
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        let element = newArr[i];

        if (searchingNumber === element) {
            counter++;
        }
    }


    console.log(`Number ${searchingNumber} occurs ${counter} times.`);

}
seachForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);