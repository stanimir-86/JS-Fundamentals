function distinctArray(arr) {

    let uniqueArr = [];

    for (let el of arr) {
        if (uniqueArr.indexOf(el) === -1) {
            uniqueArr.push(el);

        }
    }
    console.log(uniqueArr.join(" "));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
