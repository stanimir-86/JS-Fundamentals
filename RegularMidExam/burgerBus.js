function burgerBus(input) {

    let numeberOfCities = Number(input.shift());

    let countOfCiti = 0;

    let totalProfir = 0;
    for (let i = 0; i < input.length; i++) {
        let currCityProfit = 0;
        let currCity = input[i++];
        countOfCiti++;

        let earn = Number(input[i++]);
        let costs = Number(input[i]);
        if (countOfCiti % 5 === 0) {

            earn *= 0.9;
        }
        if (countOfCiti % 3 === 0) {
            if (countOfCiti % 5 !== 0) {
                costs = costs * 1.5;
            }

        }


        currCityProfit = earn - costs;
        totalProfir += currCityProfit;
        console.log(`In ${currCity} Burger Bus earned ${currCityProfit.toFixed(2)} leva.`);

    }

    console.log(`Burger Bus total profit: ${totalProfir.toFixed(2)} leva.`);
}
// burgerBus(["3",

//     "Sofia",

//     "895.67",

//     "213.50",

//     "Plovdiv",

//     "2563.20",

//     "890.26",

//     "Burgas",

//     "2360.55",

//     "600.00"]);
burgerBus(["5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20"]);