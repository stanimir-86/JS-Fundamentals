function evenAndOddSubtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        let currNumber = Number(arr[i]);

        if (currNumber % 2 === 0) {
            sumEven += currNumber;
        } else {
            sumOdd += currNumber;
        }

    }
    let difference = sumEven - sumOdd;
    console.log(difference);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3,5,7,9]);