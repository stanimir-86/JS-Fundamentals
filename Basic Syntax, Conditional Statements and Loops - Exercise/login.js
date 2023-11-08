function login(input) {


    for (let i = 1; i < input.length; i++) {

        if (input[0].split('').reverse().join('') === input[i]) {
            console.log(`User ${input[0]} logged in.`);

        } else {
            if (i === input.length - 1) {
                console.log(`User ${input[0]} blocked!`);
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
        
    }


}
login(['Acer', 'login', 'go', 'let me in', 'recA']);

// function demo(input) {
//     let userName = input[0];
//     let buff = "";
// //за да ревърсна стринг ,ползвам for loop,като започвам дължината на думата-1,докато стигна 0 и намалям i--
//     for (let i = userName.length - 1; i >= 0; i--) {
//         buff += userName[i];
// //в buffзапазвам стойностите на i 3,2,1,0 'Acer' и става recA

//     }
//     let counter = 0;

//     for (let i = 1; i < input.length; i++) {//започвам от 1 ,за да взема следващия елемент след username

//         let newPassword = input[i];//тук си вземаме новата стойност на входа

//         if (newPassword === buff) {//сравнявам елемента от входа с обърнатия стринг
//             console.log(`User ${userName} logged in.`);
//         } else {
//             counter++;
//             if (counter === 4) {
//                 console.log(`User ${userName} blocked!`);
//                 break;

//             }
//             console.log("Incorrect password. Try again.");
//         }
//     }
// }
// demo(['Acer', 'login', 'go', 'let me in', 'recA']);
// demo(['momo', 'omom']);
// demo(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);