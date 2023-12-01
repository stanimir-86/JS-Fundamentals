function race(array) {
    let patternName = /[A-Za-z]/g
    let patternDistance = /[0-9]/g
    let obj = {};
    let participantsInput = array.shift().split(", ");
    for (const names of participantsInput) {
        obj[names] = 0;
    }
    for (const line of array) {
        if (line === "end of race") {
            break;
        }
        let nameFromLine = line.match(patternName).join("");
        let distanceFromLine = line.match(patternDistance);
        let tempDistance = 0;

        for (const num of distanceFromLine) {
            tempDistance += Number(num);

        }
        if (obj.hasOwnProperty(nameFromLine)) {
            obj[nameFromLine] += tempDistance;
        }
    }
    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}`);//все едно разпечатваме матрица
    console.log(`2nd place: ${sorted[1][0]}`);//[0] връща първия индекс а с [0] стойността му
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);