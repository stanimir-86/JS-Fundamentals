function bonusScoringSystem(input) {

    let studentsCount = Number(input.shift());
    let totalCountLecturs = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let newArr = [];
    for (let i = 0; i <= studentsCount - 1; i++) {
        let element = input[i];
        newArr.push(element);


    }

    newArr.sort((a, b) => b - a);

    let totalBonus = (newArr[0] / totalCountLecturs) * (5 + additionalBonus);
    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${newArr[0]} lectures.`);

}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);
