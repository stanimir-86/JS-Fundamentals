function condenseArrayToNumber(arr) {
    let curArr = arr;
    while (curArr.length > 1) {
        let newArr = [];
        for (let i = 0; i < curArr.length - 1; i++) {
            let firstElement = curArr[i];
            let lastElement = curArr[i + 1];

            newArr.push(firstElement + lastElement);
        }
        curArr = newArr;
    }
    console.log(curArr.join(" "));
}
condenseArrayToNumber([2, 10, 3]);