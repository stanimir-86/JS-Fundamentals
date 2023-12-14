// let a = "Stanimir";
// let b = "Nikolov"
// let c = a.concat(b);//този метод конкатинира текс или слива масиви
// console.log(c);
// console.log(a.indexOf("t"));//връща първия индекс който засече от пред към края
// console.log(a.lastIndexOf("i"))//връща първия индекс който засече от края към началото
// console.log(b.substring(1,3));//връща отрязък от текста.Започва с начален индекс и има краен индекс(не е задължителен)
// //започни от индекс 1 и вземи до индекс 3 без него.
// console.log(b.slice(1,3))//еквивалент ,но с леки разлки за отрицателни числа при substing
// //и двете връщат нов текст без да мутират стария.
// console.log(b.replace('o','i'));//заменя първото съвпадение с "о"с "i"
// let char="St";
// console.log(char.charCodeAt(1));//връща номера под който е симвало в ASCI table
// let names = "stanimir";


// console.log(names.includes("nim"));//мога да търся в стринг дали има част от стринг
// let splited = names.split("ir");//когато сплитвам елементи в началото или края на текст се получава допълнителен празен елемент
// console.log(splited[0]);//за да достъпя това ,което иска го вземам с индекса му.
// let rep = "a".repeat(5);//подавам колко пъти да повтори дадения символ
// console.log(rep);

// let spaces = " azlk ";
// console.log(spaces.trim());//премахва празното място в началото и края
// console.log(spaces.trimStart());//премахва празното място в началото 
// console.log(spaces.trimEnd());//премахва празното място в  края
// let checksText = "Hello my name is Stanimir"
// console.log(checksText.startsWith("Hello "));//проверява дали текста започва с посочения стринг
// console.log(checksText.endsWith("is Stanimir"));//проверява дали текста завършва с посочения стринг
// let num = "10";
// console.log(num.padStart(5,'0'));//методът добавя символи към съществуващите,но не повече от заложените от ляво
// console.log(num.padEnd(5,'-'));//методът добавя символи към съществуващите,но не повече от заложените от дясно

let a='ok12';
a=a.substr(2,a.length-2)+a.substr(0,2);
console.log(a);