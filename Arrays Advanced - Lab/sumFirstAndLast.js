function sumFirstAndLast(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    let sumElements = firstElement + lastElement;
    return sumElements;

}
console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));
