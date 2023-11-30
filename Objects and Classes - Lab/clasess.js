class Person {

    constructor(firstName, lastName, age) {
        this.fName = firstName,
            this.sName = lastName,
            this.age = age
    
    }


    //създавам си конструктор и отварям () за да подам параметри.
}
//класа е темплейт за създаване на обекти най-общо.Ползва се паскалКейс
//синтакси 
//с ключовата дум new създаваме нов обект в класа.
let myPerson = new Person("Stanimir", "Nikolov", 37);//присвоявам си новия обект в променлива и добавям стойности.
console.log(myPerson);//резултат Person
//Person {fName: 'Stanimir', sName: 'Nikolov', age: 37} резултат от добавен обект,
//със създаден конструкто и ключовите думи this
//
