function integerAndFloat(a, b, c) {

    let sum = a + b + c;

    let sumAsString = String(sum);
    let type = "Integer"
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == ".") {
            type = "Float";
        }
    }
    console.log(`${sum} - ${type}`);
}
integerAndFloat(1, 2, 3);
integerAndFloat(1, 2, 3.14);