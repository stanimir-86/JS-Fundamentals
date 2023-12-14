function shootForTheWin(input) {

    let targetAndValue = input[0].split(' ').map(Number);
    let index = 1;
    let command;
    while (command = input[index] !== "End") {
        let integers = Number(input[index]);
        for (let i = 0; i < targetAndValue.length; i++) {
            let element = targetAndValue[i];
            console.log(element);

        }

        index++;
    }

}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
// shootForTheWin(["30 30 12 60 54 66",
//     "5",
//     "2",
//     "4",
//     "0",
//     "End"])