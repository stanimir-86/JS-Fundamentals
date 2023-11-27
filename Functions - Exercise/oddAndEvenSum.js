function oddAndEvenSum(num) {

    let numAsString = String(num);
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let curNumber = Number(numAsString[i]);
        if (curNumber % 2 === 0) {
            evenSum += curNumber;
        } else {
            oddSum += curNumber;
        }

    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);