function arrayModifier(input) {
    function swapElements(array, index0, index1) {

        let temp = array[index0];
        array[index0] = array[index1];
        array[index1] = temp;

    };

    function multiplyElements(array, index0, index1) {
        let temp1 = Number(array[index0]);
        let temp2 = Number(array[index1]);
        let multiply = temp1 * temp2;
        array[index0] = multiply;
    };
    function decreaseElements(array) {
        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            element -= 1;
            array[index] = element;
        }
    };
    let toModifier = input.shift().split(" ").map(Number);
    let commands = input.shift().split(" ");
    let command = commands[0];
    let parameterOne = Number(commands[1]);
    let parameterTwo = Number(commands[2]);
    while (command != "end") {

        switch (command) {
            case "swap": swapElements(toModifier, parameterOne, parameterTwo); break;
            case "multiply": multiplyElements(toModifier, parameterOne, parameterTwo); break;
            case "decrease": decreaseElements(toModifier); break;

        }
        commands = input.shift().split(" ");
        command = commands[0];
        parameterOne = Number(commands[1]);
        parameterTwo = Number(commands[2]);
    }
    console.log(toModifier.join(", "));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);