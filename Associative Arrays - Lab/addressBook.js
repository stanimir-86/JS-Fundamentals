function addressBook(input) {

    let obj = {};
    for (let data of input) {
        let [name, address] = data.split(":");
        obj[name] = address

    }
    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b))
    for (let key of sorted) {
        console.log(`${key} -> ${obj[key]}`);
    }


}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);