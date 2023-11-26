function requiredReading(currBookPages, reedPagesInOneHour, daysOfReading) {

    let totalTime = currBookPages / reedPagesInOneHour;
    let requireTimeInDays = totalTime / daysOfReading;
    console.log(requireTimeInDays)

}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);