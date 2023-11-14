function phoneBook(input) {
    let obj = {};
    for (let line of input) {
        let [name, tellNumber] = line.split(" ");
        obj[name] = tellNumber;
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);