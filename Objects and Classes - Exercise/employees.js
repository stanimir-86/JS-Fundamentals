function Employees(array) {

    let obj = {};
    for (let names of array) {
        obj[names] = names.length;
    }

    let entries = Object.entries(obj);
    for (let [key, value] of entries) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}
Employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

function secondSolve(input) {

    let result = [];
    for (let name of input) {

        let myInfo = {
            name: name,
            personalNumber: name.length
        }
        result.push(myInfo);
    }
for (let obj of result) {
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
}


}
secondSolve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);