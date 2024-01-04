function demo(input) {

    let foodInGrams = Number(input.shift()) * 1000;
    let hayInGrams = Number(input.shift()) * 1000;
    let coverInGrams = Number(input.shift()) * 1000;
    let weightInGrams = Number(input.shift()) * 1000;


    for (let i = 1; i <= 30; i++) {
        foodInGrams -= 300;
        if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }

        if (i % 2 === 0) {
            let neededHay = foodInGrams * 0.05;
            hayInGrams -= neededHay;

        }
        if (i % 3 === 0) {
            let quantityCover = (weightInGrams) / 3;
            coverInGrams -= quantityCover;
        }

    }

    if (foodInGrams > 0 && hayInGrams > 0 && coverInGrams > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    }

}
// demo(["10",
//     "5",
//     "5.2",
//     "1"]);
// demo(["1",
//     "1.5",
//     "3",
//     "1.5"
// ]);
demo(["9",
    "5",
    "5.2",
    "1"]);