function addAndRemove(array) {

    function add(arr, num) {
        arr.push(num);
    };
    function remove(arr, num) {
        arr.pop(num);
    };

    let myArr = [];
    let number = 1;
    


    for (let i = 0; i < array.length; i++) {

        let command = array[i];

        switch (command) {
            case "add": add(myArr, number); break;
            case "remove": remove(myArr, number); break;

        }
        number++;
    }

    if (myArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(myArr.join(" "));
    }


}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);