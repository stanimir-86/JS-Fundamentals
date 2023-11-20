function lowerOrUpper(arr) {

    let firstElement = arr.shift();
    let lastElement = arr[arr.length - 1];
    let sumElements=firstElement+lastElement;

    console.log(sumElements)



}
lowerOrUpper([20, 30, 40]);
lowerOrUpper([10, 17, 22, 33]);
lowerOrUpper([11, 58, 69]);
