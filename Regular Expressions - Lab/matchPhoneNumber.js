// function matchPhoneNumber(input) {
//     let result = [];//
//     let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
//     for (let i = 0; i < input.length; i++) {//входа е масив и трябва да го обиколя
//         let text = input[i];//всики елемент от масива се взема
//         let math = text.match(regex);//и проверявам дали има съвпадение с регекса ми
//         result = result.concat(math);//тъй като съм си създал масив,трябва да използвам
//         //concat ,за да обединя получените стойности.

//     }
//     console.log(result.join(", "));//логвам резултата разделен с", "
// }
// matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
function matchPhoneNumber(array) {
    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let result = [];
    let mateches = null;
    while ((mateches = regex.exec(array)) !== null) {
        result.push(mateches[0]);
    }
console.log(result.join(", "));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, + 359 - 2 - 222 - 222, +359 - 2 - 222 - 22222 + 359 - 2 - 222 - 2222']);