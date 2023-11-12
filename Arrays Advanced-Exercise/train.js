function train(input) {
    let wagons = input.shift().split(" ").map(el => Number(el));

    let maxCapacity = Number(input.shift());

    for (let el of input) {
        let command = el.split(' ');
        if (command[0] === "Add") {
            wagons.push(Number(command[1]));

        } else {
            let passengers = Number(command[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= maxCapacity) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);
    
// secon solution
function solve(input) {

    let containingWagons = input[0].split(" ").map(Number);
    let maxCapacity = Number(input[1]);

    for (let index = 2; index < input.length; index++) {
        let element = input[index].split(" ");
        if (element[0] === "Add") {
            containingWagons.push(Number(element[1]));
        } else {
            let passengers = Number(element[0])
            for (let j = 0; j < containingWagons.length; j++) {
                let freSpace = Number(containingWagons[j]);
                if ((maxCapacity - freSpace) >= passengers) {
                    containingWagons[j] += passengers;
                    break;
                }
            }

        }
    }

    console.log(containingWagons.join(" "));
}