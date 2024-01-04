function shootForTheWin(input) {
    let targetsSequince = input.shift().split(" ").map(Number);
    let command = input.shift();
    let count = 0;
    while (command !== "End") {

        let index = Number(command);

        if (index >= 0 && index < targetsSequince.length) {

            let currIndex = Number(targetsSequince[index]);
            if (currIndex !== -1) {
                targetsSequince[index] = -1;
                count++;
                for (let i = 0; i < targetsSequince.length; i++) {

                    let element = Number(targetsSequince[i]);

                    if (currIndex < element && element !== -1) {

                        let decrease = element - currIndex;
                        targetsSequince.splice(i, 1, decrease);
                    } else if (currIndex >= element && element !== -1) {
                        let increase = element + currIndex;
                        targetsSequince.splice(i, 1, increase);
                    }

                }

            } else {
                break;
            }



        } else {
            command = input.shift();
            continue;
        }

        command = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${targetsSequince.join(" ")}`);
}
// shootForTheWin((["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"]));
shootForTheWin((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]));