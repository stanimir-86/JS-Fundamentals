function aMinerTask(input) {


    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        let resurce = input[i];
        let quantity = Number(input[i + 1]);

        if (obj.hasOwnProperty(resurce)) {
            obj[resurce] += quantity;
        } else {
            obj[resurce] = quantity;
        }
    }

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
);