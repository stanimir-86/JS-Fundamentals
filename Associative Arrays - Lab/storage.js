function storage(input) {
    // let obj = {};
    // for (let el of input) {
    //     let [products, quantity] = el.split(" ");

    //     if (!obj.hasOwnProperty(products)) {
    //         obj[products] = 0;
    //     }
    //     obj[products] += Number(quantity)
    // }
    // for (let key in obj) {
    //     console.log(`${key} -> ${obj[key]}`);
    // }

    let myMap = new Map();//създавам си празен мап
    for (const line of input) {//итерирам входа
        let tokens = line.split(" ");//сплитвам го
        let item = tokens[0];//вземам си кейс
        let quantity = Number(tokens[1]);//вземам валюс
        if (!myMap.has(item)) {//проверявам дали го нямя дадения ключ в мапа
            myMap.set(item, quantity);//ако го няма го сетвам+стойност
            
        } else {
            let currQuantity = myMap.get(item);//вземам си временната стойност
            myMap.set(item, currQuantity + quantity);//и я презаписвам в кия ,като я добавям към старата стойност
        }
    }

    for (let [key, value] of myMap) {//минавам през масива и отпечатвам.
        console.log(`${key} -> ${value}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);