function spiceMustFlow(startingYield) {

    let totalSumOfYield = 0;
    let daysCounter = 0;
    let miningCrew = 26;

    while (startingYield >= 100) {

        if (daysCounter != 0) {

            totalSumOfYield += (startingYield - miningCrew);

            startingYield -= 10;
        }
        if (startingYield < 100) {
            totalSumOfYield -= miningCrew;
            break;
        }

        daysCounter++;

    }
    console.log(daysCounter);
    console.log(totalSumOfYield);
}
spiceMustFlow(111);
spiceMustFlow(450);