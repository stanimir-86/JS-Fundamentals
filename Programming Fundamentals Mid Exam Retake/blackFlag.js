function blackFlag(input) {

    let totalDays = Number(input.shift());
    let daylyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let sum = 0;
    for (let i = 1; i <= totalDays; i++) {
        sum += daylyPlunder;
        if (i % 3 === 0) {
            sum += (daylyPlunder * 0.5);
        }
        if (i % 5 === 0) {
            sum *= 0.7;
        }
    }
    if (sum >= expectedPlunder) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        let percentige = (sum / expectedPlunder) * 100;
        console.log(`Collected only ${percentige.toFixed(2)}% of the plunder.`);
    }

}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);