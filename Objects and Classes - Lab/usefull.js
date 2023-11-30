// let arrOfStrings = ["stanimir Nikolov", "Ivan Nikolov"];
// let obj = {};
// for (let names of arrOfStrings) {
//     obj[names] = names.length;//тук директно за кей ми създава намес,а за стойност приема фължината на имената
//     //по този начин обхоздам масив и си го пълня в обект.Този запис е един ключ
// }
// for (let key in obj) {//тук всеки елемент  се обхожда от обекта.
//     console.log(`${key} ${obj[key]} `);
// }

//запис с различни ключове или повече от един

// let arrInfo = ['Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625'];

// for (const info of arrInfo) {//отново минавам през стринговия масив
//     let [townName, lotitude, longtitude] = info.split(" | ");//деконструкция на променливите ,които полуава, и сплитвам по разделителя
//     let currObj = {//създавам си текущ обект
//         town: townName,//създавам си пропъртита и добавям value за всяко
//         lotitude: Number(lotitude).toFixed(2),//тук ги парвсвам към номер
//         longtitude: Number(longtitude).toFixed(2)//и директно си ги отрязвам към втория знак по условие е така
//     }
//     console.log(currObj);//по този начин си принтирам всеки текущ обект.
//     //{town: 'Sofia', lotitude: '42.70', longtitude: '23.33'}
// // {town: 'Beijing', lotitude: '39.91', longtitude: '116.36'}
// }

let storige = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2']
let orders = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']

let objectStorige = {};//ако искам да пълня обякт през елемент
for (let i = 0; i < storige.length; i += 2) {//въртя до дължината на масива със стъпка 2
    let product = storige[i];//първата променлива приема стойност от index0,2,4,6... и т.н
    let quantity = Number(storige[i + 1]);//втората приема стойност от index 1,3,5... и т.н
    objectStorige[product] = quantity;//казавам в обекта ми създай кий продукт и да пиреме с тойност от quantity

} console.log(objectStorige);//{Chips: 5, CocaCola: 9, Bananas: 14, Pasta: 4, Beer: 2}

//ако искам да проверя от втория масив дали някой от продуктите го няма в обекта ми
//ще за въртя по него както предния и ще направя следната проверка
if (!objectStorige.hasOwnProperty(product)) {//ако дадения елемент(продукт)го няма в обекта
    objectStorige[product] = 0;//го създавам като проперту със стойност 0
}
objectStorige[product] += quantity;//ако го има просто му променям стойноста.

//ако искам да направя масив от обекти,получения елемент след итерация и евентуално сплитване
//го пушвам по следния начин Пример
let movies = [];
movies.push({name})//или същия запис movies.push({name:name})
//което ми създава ново проперти кий и сетва проперти валю.