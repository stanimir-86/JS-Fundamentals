function reverseAnArrayOfNumbers(num, array) {

    let newArray = [];

    for (let i = num - 1; i >= 0; i--) {

        let elemnts = array[i];
        newArray.push(elemnts);

    }
    console.log(newArray.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);