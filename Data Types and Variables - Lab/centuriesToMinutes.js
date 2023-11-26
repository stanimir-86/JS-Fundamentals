function centuriesToMinutes(centuries) {

    let years = centuries * 100;
    let daysInYear = Math.trunc(years * 365.2422);
    let hours = daysInYear * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${daysInYear} days = ${hours} hours = ${minutes} minutes`);

}
centuriesToMinutes(1);
centuriesToMinutes(5);