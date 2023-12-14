function movingTarget(input) {

    let sequinsOfTargets = input[0].split(" ").map(Number);
    let index = 1;
    let command;
    while ((command = input[index]) !== "End") {
        command = input[index].split(" ");
        let actions = command[0];
        let actionIndex = Number(command[1]);
        let power = Number(command[2]);

        switch (actions) {
            case "Shoot": shoot(actionIndex, power, sequinsOfTargets); break;
            case "Add": add(actionIndex, power, sequinsOfTargets); break;
            case "Strike": strike(actionIndex, power, sequinsOfTargets); break;
        }
        function shoot(index, power, arr) {

            if (index >= 0 && index < arr.length) {
                if (arr[index] - power <= 0) {
                    arr.splice(index, 1)
                } else {
                    arr[index] -= power;
                }
            }
        }
        function add(index, value, arr) {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        }
        function strike(index, radius, arr) {

            if (index - radius >= 0 && index + radius < arr.length) {
                arr.splice(index - radius, ((2 * radius) + 1));
            } else {
                console.log("Strike missed!");
            }
        }
        index++;
    }

    console.log(sequinsOfTargets.join("|"));

}
movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]));
    movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);