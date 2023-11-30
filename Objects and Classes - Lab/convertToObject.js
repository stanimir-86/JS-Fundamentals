function convertToObject(string) {

    let converted = JSON.parse(string);
    let entries = Object.entries(converted);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }


}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');