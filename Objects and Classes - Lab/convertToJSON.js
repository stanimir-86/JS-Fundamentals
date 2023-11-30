function convertToJSON(firstName, lastName, hairColor) {

    let newObj = {
        "name": firstName,
        "lastName": lastName,
        "hairColor": hairColor,
    }

    let convertToString = JSON.stringify(newObj);
    console.log(convertToString);
}
convertToJSON('George', 'Jones', 'Brown');