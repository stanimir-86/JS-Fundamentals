function memoryGame(input) {

    let sequenceOfElements = input[0].split(" ");
    let index = 1;
    let command;
    let counter = 0;


    while ((command = input[index]) != "end") {
        counter++;
        let comandsOfInput = command.split(" ");
        let firstIndex = Number(comandsOfInput[0]);
        let lastIndex = Number(comandsOfInput[1]);

        if (firstIndex < 0 || firstIndex > sequenceOfElements.length ||
            lastIndex < 0 || lastIndex > sequenceOfElements.length ||
            firstIndex === lastIndex) {
            sequenceOfElements.splice(sequenceOfElements.length / 2, 0, `-${counter}a`, `-${counter}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else {
            let fisrtTakenElement = sequenceOfElements[firstIndex];
            let secondTakenElement = sequenceOfElements[lastIndex];
            if (fisrtTakenElement === secondTakenElement) {
                sequenceOfElements.splice(Math.min(firstIndex, lastIndex), 1,);
                sequenceOfElements.splice(Math.max(firstIndex, lastIndex) - 1, 1);
                console.log(`Congrats! You have found matching elements - ${fisrtTakenElement}!`);
            } else {
                console.log("Try again!");
            }
        }
        if (sequenceOfElements.length === 0) {


            break;
        }

        index++;
    }
    if (sequenceOfElements.length === 0) {
        console.log(`You have won in ${counter} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${sequenceOfElements.join(" ")}`);
    }
}
// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ]);
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]);

