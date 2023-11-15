function oddOccurrences(input) {

    let inputArr = input.split(" ").map(e => e.toLowerCase());
    let obj = {};


    for (let word of inputArr) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }
        obj[word]++;
    }
    let arrFromElements = Object.entries(obj)
        .filter(double => double[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);
    let result = "";
    for (const array of arrFromElements) {
        result += `${array[0]} `
    }
    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')