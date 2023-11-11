function аrrayManipulations(input) {
    let arr = input[0].split(" ").map(Number);//split взима стринг и го обръща към масив от стрингове.
    //мапвам към число
    let commands = input.slice(1);//искам всички команди,със slice(1) пропускам първия елемент и всичко получено след това да се копира в нов масив
    for (let i = 0; i < commands.length; i++) {//обхождам командите(стрингове)
        let tokens = commands[i].split(' ');//rezultata e ADD 1 става на ["ADD","1"]
        let command = tokens[0];//вземам първия елемент от този стринг.от горния ред
        let parameters = tokens.slice(1).map(Number);//мога да получа различни параметри,затова пропускам първия елемент и мапвам към число.
        arr = executeCommand(command, parameters, arr);

    }
    return arr.join(" ");
    function executeCommand(command, parameters, arr) {
        switch (command) {
            case "Add": arr.push(parameters[0]); return arr;
            case "Remove": arr = arr.filter(x => x !== parameters[0]); return arr;
            case "RemoveAt": arr.splice(parameters[0], 1); return arr;
            case "Insert": arr.splice(parameters[1], 0, parameters[0]); return arr;
        }
        return arr;
    }
}
console.log(аrrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']));