function magicMatrices(array) {
    let isMatrixIsMagic = false;
    let firstArray = array.shift();
    let secondArray = array.shift();
    let tirthArray = array.shift();
    let sumOfFirstArray = firstArray.reduce((sum, currValuue) => sum += currValuue, 0);
    let sumOfSecondtArray = secondArray.reduce((sum, currValuue) => sum += currValuue, 0);
    let sumOfTirthArray = tirthArray.reduce((sum, currValuue) => sum += currValuue, 0);

    if (sumOfFirstArray === sumOfSecondtArray && sumOfFirstArray === sumOfTirthArray && sumOfSecondtArray === sumOfTirthArray) {
        isMatrixIsMagic = true;
        console.log(isMatrixIsMagic);
    } else {
        console.log(isMatrixIsMagic);
    }



}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);