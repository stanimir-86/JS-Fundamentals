function formatGrade(grade) {

    let formated = grade.toFixed(2);
    let output

    if (grade < 3) {
        formated = "2";
        output = "Fail";
    } else if (grade < 3.5) {
        output = "Poor";
    } else if (grade < 4.5) {
        output = "Good";
    } else if (grade < 5.5) {
        output = "Very good";
    } else {
        output = "Excellent";
    }

    console.log(`${output} (${formated})`);
}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);