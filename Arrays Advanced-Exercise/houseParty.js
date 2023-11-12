function houseParty(arr) {
    let myList = [];
    for (let el of arr) {
        let commands = el.split(" is ");
        let names = commands[0];
        let command = commands[1];
        if (command === "going!") {
            if (myList.indexOf(names) === -1) {
                myList.push(names);
            } else {
                console.log(`${names} is already in the list!`);
            }
        } else {
            if (myList.indexOf(names) === -1) {
                console.log(`${names} is not in the list!`);
            } else {
                myList.splice(myList.indexOf(names), 1);
            }
        }
    }
    console.log(myList.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);

    //second solution 
    function solve(input) {
        let myList = [];
        for (let commands of input) {
    
            let splited = commands.split("is");
            let names = splited[0];
            let command = splited[1];
            if (command === " going!") {
                if (myList.includes(names)) {
                    console.log(`${names}is already in the list!`);
                } else {
                    myList.push(names);
                }
            } else {
                if (myList.includes(names)) {
                    let removedName = myList.indexOf(names);
                    myList.splice(removedName, 1);
                } else {
                    console.log(`${names}is not in the list!`);
                }
            }
    
        }
        console.log(myList.join(" \n"));
    }