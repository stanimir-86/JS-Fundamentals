function taxCalculator(input) {

    let vehicle = input.shift().split(">>")
    let taxFamilyCar = 50;

    let taxheavyDutyCar = 80;
    let taxSportsCar = 100;

    let kmTimes = 0;
    let increaseByKM = 0;
    let decreaseYears = 0;
    let total = 0;
    let finalTotal = 0;

    for (let index = 0; index < vehicle.length; index++) {
        let element = vehicle[index].split(", ");
        let details = element[0].split(" ")
        let carType = details[0];
        let taxYears = Number(details[1]);
        let kilometers = Number(details[2]);



        if (carType === "family" || carType === "heavyDuty" || carType === "sports") {
            switch (carType) {
                case "family":
                    kmTimes = Math.floor(kilometers / 3000);
                    increaseByKM = (kmTimes * 12)
                    decreaseYears = (taxFamilyCar - (taxYears * 5));
                    total = increaseByKM + decreaseYears;
                    finalTotal += total;
                    console.log(`A ${carType} car will pay ${total.toFixed(2)} euros in taxes.`);

                    break;
                case "heavyDuty":
                    kmTimes = Math.floor(kilometers / 9000);
                    increaseByKM = (kmTimes * 14)
                    decreaseYears = (taxheavyDutyCar - (taxYears * 8));
                    total = increaseByKM + decreaseYears;
                    finalTotal += total;
                    console.log(`A ${carType} car will pay ${total.toFixed(2)} euros in taxes.`);

                    break;
                case "sports":
                    kmTimes = Math.floor(kilometers / 2000);
                    increaseByKM = (kmTimes * 18)
                    decreaseYears = (taxSportsCar - (taxYears * 9));
                    total = increaseByKM + decreaseYears;
                    finalTotal += total;
                    console.log(`A ${carType} car will pay ${total.toFixed(2)} euros in taxes.`);

                    break;
            }
        } else {
            console.log("Invalid car type.");
            continue;
        }

    }


    console.log(`The National Revenue Agency will collect ${finalTotal.toFixed(2)} euros in taxes.`);
}
// taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000 >>sports 4 7410']);

taxCalculator((['family 5 3210>>pickUp 11345 >>heavyDuty 7 21000 >>sports 59410 >>family 3 9012']));