function personInfo(firstName, lastName, age) {

    let myPersonalInfo = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    return myPersonalInfo;
}
console.log(personInfo("Peter",
    "Pan",
    "20"));

function personInfo2(firstName, lastName, age) {
    let myPersonalInfo2 = {
        firstName,
        lastName,
        age,
    }
    return myPersonalInfo2;
}
// с
console.log(personInfo2("Peter",
    "Pan",
    "20"));
    // ъкратен синтаксис на горната функция.Изброявам си параметрите,като ключове и ми взема и стойностите.