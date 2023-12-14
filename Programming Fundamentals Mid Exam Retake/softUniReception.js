function softUniReception(input) {

    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());
    let totalStudents = Number(input.shift());
    let time = 0;
    let totalPeoplePerHour = employeeOne + employeeTwo + employeeThree;
    while (totalStudents > 0) {
        time++;
        totalStudents -= totalPeoplePerHour;
        if (time % 4 === 0) {
            time++;
        }

    }
    console.log(`Time needed: ${time}h.`);
}
softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);

