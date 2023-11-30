//това е уникален начин да пренесем информация в мрежата.Отворен стандарт към всички технологии.
//json формата е стринг
//файл разшрението е .json
//можем да обемняме данни м/у браузър и сървър.
//заместител на xml и е по лек.Лесно четим е.
//не може да се инициализира в променлива
//синтаксис
//ключовете трябва да са винаги стринг с ""кавички
// {
//     "firstName": "Stanimir",
//         "lasttName": "Nikolov",
//             "age": 30,
//                 "hasCar": true
// }

// JSON.stringify() този методъ обръща данни в текст и да му подам обект.Пример
let myObj = {
    firstName: "Stanimir",
    lastName: "Nikolov",
}
let myJsonObj = JSON.stringify(myObj);//мога да си го запазя в променлива и е стринг
console.log(myJsonObj);//връща реултат {"firstName":"Stanimir","lastName":"Nikolov"}
//метода JSON.parse()-обръща от стринг към тип който е бил.Обект,масив...
let backToObj = JSON.parse(myJsonObj);//присовяване в променлива.
console.log(backToObj);//{firstName: 'Stanimir', lastName: 'Nikolov'} резултат