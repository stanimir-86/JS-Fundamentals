function shoppingList(input) {

    function urgentProduct(array, product) {
        if (array.includes(product)) {
        } else {
            let index = array.indexOf(product);
            let renewedItem = array.splice(index, 1);
            array.unshift(renewedItem);
        }
    };
    function UnnecessaryProduct(array, product) {

        if (array.includes(product)) {
            let index = array.indexOf(product);
            array.splice(index, 1);

        }
    };
    function correctProduct(array, product, newProduct) {

        if (array.includes(product)) {
            let index = array.indexOf(product);
            array.splice(index, 1, newProduct);
        }
    };
    function rearrangeProduct(array, product) {
        if (array.includes(product)) {
            let index = array.indexOf(product)
            if (index !== -1) {
                array[index].push(array[index]);

            }
        }
    };

    let initialList = input.shift().split("!");
    let command = input.shift().split(" ");
    let actions = command[0];
    let product = command[1];
    let newProduct = command[2];
    while ((`${actions} ${product}`) != "Go Shopping!") {

        switch (actions) {
            case "Urgent": urgentProduct(initialList, product); break;
            case "Unnecessary": UnnecessaryProduct(initialList, product); break;
            case "Correct": correctProduct(initialList, product, newProduct); break;
            case "Rearrange": rearrangeProduct(initialList, product); break;
        }

        command = input.shift().split(" ");
        actions = command[0];
        product = command[1];
        newProduct = command[2];

    }

    console.log(initialList.join(", "));


}
shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]));
shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]));




