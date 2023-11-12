function solve(input) {

    let targetsSequence = input.shift().split(" ").map(Number);
    let index = 0;
    let command = input[index];
    index++;
    let count = 0;
    while (command !== "End") {
        let temp = 0;
        if (targetsSequence[Number(command)] != -1) {
            if (Number(command) >= 0 && Number(command) < targetsSequence.length) {
                temp = targetsSequence[Number(command)];
                targetsSequence[Number(command)] = -1;
                count++;
                for (let i = 0; i < targetsSequence.length; i++) {
                    let element = Number(targetsSequence[i]);
                    let nextElement = Number(targetsSequence[i + 1]);
                    if ((element != -1)) {
                        if (element > nextElement && element != -1) {
                            element -= temp;
                            targetsSequence[i] = element;
                        } else if (element <= nextElement && element != -1) {
                            element += temp;
                            targetsSequence[i] = element;
                        }
                    }
                }
            }

        }
        command = input[index];
        index++;
    }
    console.log(`Shot targets: ${count} -> ${targetsSequence.join(" ")}`);
}
solve((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]));
console.log('-----------');
solve((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]));
