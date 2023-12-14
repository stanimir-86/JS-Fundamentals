let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(0, 2));
console.log(arr)

function memoryGame(input) {
    let sequence = input.shift().split(" ");
    let command = input.shift();
    let counter = 0;
    while (command !== "end") {
        counter++;
        let index = command.split(" ").map(Number);
        if (index[0] < 0 || index[0] > sequence.length - 1 ||
            index[1] < 0 || index[1] > sequence.length - 1 ||
            index[0] === index[1]) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let middle = sequence.length / 2;
            sequence.splice(middle, 0, `-${counter}a`, -${ counter }a`)

            command = input.shift();
            continue;
        }
        let firstItem = sequence[index[0]];
        let secondItem = sequence[index[1]];
        if (firstItem === secondItem) {
            console.log(`Congrats! You have found matching elements - ${ firstItem }!`);
            sequence.splice(Math.min(index[0]),index[1]), 1)
            sequence.splice(Math.max(index[0],index[1]) -1,1)
        }else {
            console.log(`Try again!);
        }
        if (sequence.length === 0) {
            break;
        }
        command = input.shift();
    }
    if (sequence.length === 0) {
        console.log(`You have won in ${counter} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${sequence.join(" ")}`);
    }

}












