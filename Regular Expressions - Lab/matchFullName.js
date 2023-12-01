// function matchFullName(text) {
//     let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
//     let result = text.match(regex);//резултата ще е масив от всички съвпадения
//     console.log(result.join(" "));
// }
// matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");

// Writing the Regular Expression
// First, write a regular expression to match a valid full name, according to these conditions:
// • A valid full name has the following characteristics:
// o It consists of two words.
// o Each word starts with a capital letter.
// o After the first letter, it only contains lowercase letters afterward.
// o Each of the two words should be at least two letters long.
// o The two words are separated by a single space.
// let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

function matchFullName(text) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validName = null;
    let validNames = [];
    while ((validName = regex.exec(text)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")