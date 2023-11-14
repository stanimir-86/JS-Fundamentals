function printNThElement(array) {

    let newArr = [];

    let nElement = Number(array.pop());


    for (let i = 0; i < array.length; i += nElement) {
        let element = array[i];
        newArr.push(element);

    }
    console.log(newArr.join(" "));
}
printNThElement(['5', '20', '31', '4', '20', '2']);
printNThElement(['dsa', 'asd', 'test', 'test', '2']);
printNThElement(['1', '2', '3', '4', '5', '6']);