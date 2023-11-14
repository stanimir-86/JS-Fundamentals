function schoolGrades(input) {
    let result = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let student = tokens.shift();
        let grades = tokens.map(Number);
        if (!result.hasOwnProperty(student)) {
            result[student] = [];
        }
        result[student] = result[student].concat(grades);
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grade] of sorted) {
        let sumGrades = 0;
        for (let grades of grade) {
            sumGrades += grades;
        }
        let avgGrade = sumGrades / grade.length;
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']

);