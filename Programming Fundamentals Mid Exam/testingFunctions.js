function testingFuctions(array) {
    let b = "stanimir"
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (array.indexOf(b) === -1) {
            array.unshift(b);
        } else {

        }
    }
    console.log(array);
}
testingFuctions(([
    "Milk",
    "Tomatoes",
]))