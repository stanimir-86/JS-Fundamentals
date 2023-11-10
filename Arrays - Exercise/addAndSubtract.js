function addAndSubtract(arr) {

    let newArr = [];
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let newElement = arr[i];
        oldSum += newElement;
        if (newElement % 2 === 0) {
            newElement += i;
            newArr[i] = newElement;
        } else {
            newElement -= i;
            newArr[i] = newElement;

        }
        newSum += newElement;
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([5, 15, 23, 56, 35]);


// мое решение
// let sumArr = 0;
//     let sumModifiedArr = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         sumArr += element;
//         if (element % 2 === 0) {
//             element += i;
//         } else {
//             element -= i;
//         }
//         sumModifiedArr += element;
//         arr[i] = element;
//     }

//     console.log(arr)
//     console.log(sumArr);
//     console.log(sumModifiedArr);