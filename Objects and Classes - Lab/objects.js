// обекта се съсдава с {};
//!!!!! за да достъпе стойност на ключа ползва obj[key]-връща стойноста на кия
//!!!! другия вариант е да използвам обй.name->Stanimir 
//obj.name и obj["name"] е едно и също нещо и резултата е еднакъв
//обекта съдържа ключове и стойности;синтаксис { firstName(key-ключ) :(задължително се поставят две точки)
//  "Stanimir"(стойност или value на ключа),(със запетая отделяме отделните ключове и стойности)}
//на мястото на индексите стоят property names(Ключовете)
let myObj = { firstName: "Stanimir", lastName: "Nikolov", age: 30 };//обект на един ред
console.log(myObj.age);//мога да отпечатам отделен ключ (проперти-стойност)
// отпечатването с console.log(myObj) обекта ми.
myObj = {
    firstName: "Stanimir",
    lastName: "Nikolov",
    age: 30,
    "1": 100,
    sleep: function sleeps() {
        console.log("ZZZZZzzzzZZZZZ");
    }

};//този синтаксис е ползвания за обект и оставянето на запетая,за да мога да добавям ново проперти.
//ако няма инициализирано проперти в обекти връща ундефайнд.
//мога да добавям runtime нови свойства в обекта ми и извън него.
myObj.hasCar = true;//добавих ново проперти извън обекта ми с този синтаксис.
//мога и да променям стойности на пропъртита извън обекта.Разликата е че извън обекта се слага =,а в обекта:
//един ключ може да съдържа една стойност (value)
myObj.age = 37;
console.log(myObj);
//по всяко време мога да си направя нов обект{} и да му добавям пропертита.
//в обекта ключовете са стрингове.Съответно мога да го въведа и "1"
//за да ги извикам ползвам [] или console.log(myObl["1"]);
console.log(myObj["1"]);//100
//ключовете могат да се изтрият,но не и преименуват.Нямам гаранция при създаването на коя позиция ще застане в обекта.
delete myObj["1"]//синтаксис на изтриване на ключ
delete myObj.age//достъпил съм ключа с . и го изтривам.
//мога да достъпвам променлива с [] или:
let num = "1";//запазих си стойност на променливата ,проперти от обекта.
console.log(myObj[num]);//100 извикването става с [името на променливата]
//в обекта мога да създавам методи,които са фунции:
myObj.sleep();//извикване на ключа,който е мотод
//по правилно е да се използва => или
// let otherObj = {
//     sleeping: (time (параметър)) => console.log(`zzzZZZZzzzZZ ${time}`)
// };
// otherObj.sleeping("10h" (тук си подавам параметъра));

//мога и да си направя функция извън обекта и да му я подам за изпълнение

let funcObj = {
    runing,//кратък синтаксис или runing:2-дълъг синтаксис
};

function runing(time) {
    console.log(`runRUNrunRUN ${time}`);
}

funcObj.runing("2");

//билдинг методи вградени в идето.Примери:
console.log(Object.keys(myObj))//връща имената на всички ключове в обекта (4) ['firstName', 'lastName', 'sleep', 'hasCar']
console.log(Object.values(myObj))//аналогично връща стойностите в обекта с/у всеки ключ(4) ['Stanimir', 'Nikolov', ƒ, true]
Object.entries(myObj)//връща масив от масива или
console.table(Object.entries(myObj))
// ┌─────────┬─────────────┬────────────────────┐
// │ (index) │      0      │         1          │
// ├─────────┼─────────────┼────────────────────┤
// │    0    │ 'firstName' │     'Stanimir'     │
// │    1    │ 'lastName'  │     'Nikolov'      │
// │    2    │   'sleep'   │ [Function: sleeps] │
// │    3    │  'hasCar'   │        true        │
// └─────────┴─────────────┴────────────────────┘
let myEntries = Object.entries(myObj);
console.log(myEntries[0]);//(2) ['firstName', 'Stanimir'] така мога да си достъпвам по индекс
//ако искам да си взема ключа синтаксиса е :
console.log(myEntries[0][0]);//firstName-връща ключа
console.log(myEntries[0][1]);//Stanimir-връща valueto
//мога да итерирам по обекс с for of
for (let keys of Object.keys(myObj)) {
    console.log(keys);
    //firstName
    // lastName
    // sleep
    // hasCar
}
for (const value of Object.values(myObj)) {
    console.log(value);
    //Stanimir
    // Nikolov... и т.н.
}

//мога да достъпя и ключ и стойност с една итерация
for (let key of Object.keys(myObj)) {//['firstName', 'lastName', 'sleep', 'hasCar']-с този метод все едно итерирам по масив от ключовете
    console.log(`${key} - ${myObj[key]}`);

    //     firstName - Stanimir
    // lastName - Nikolov върна ми ги заедно.

}
//мога да направя и деструктуриране на горния пример
for (let [key, value] of Object.entries(myObj)) {
    console.log(`${key} -> ${value}`);//пак си вземам ключ и стойност

}
//Проверка дали дадено проперти съществува
let testObj = {
    names: "Stanimir1",
}
if (testObj.hasOwnProperty(Object.keys(testObj))) {
    console.log("True");
} else {
    console.log("false");
}