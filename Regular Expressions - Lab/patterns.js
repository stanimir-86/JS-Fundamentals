// Writing the Regular Expression
// First, write a regular expression to match a valid full name, according to these conditions:
// • A valid full name has the following characteristics:
// o It consists of two words.
// o Each word starts with a capital letter.
// o After the first letter, it only contains lowercase letters afterward.
// o Each of the two words should be at least two letters long.
// o The two words are separated by a single space.
// стъпка по стъпка
// [A - Z][a - z] +//до момента съм казал вземими ми дума,която започва
//с главна буква от диапазона,последвана от поне от 1 малка буква
// [A - Z][a - z] + [A - Z][a - z] + //-за второто име ползвам същата логика
//до този момент ако има две главни букви ще мачне IVan Ivanov-грешно
// \b[A - Z][a - z] + [A - Z][a - z] +\b//така ще огранича до търсените думи
//или Ivan Ivanov -вярно
//имам два начина за декларина в js на патерни
// let regex = /[a-z][A-Z]/;//чрез литерал.Да ползвам този начин,предпочитан е
// let regex2 = new RegExp('[a-z][A-Z]', 'g') //g е флаг или чрез клас
//g-глобален флаг,който казва търси ми всички съвпадения

// let text="Ivan"
// let regexText = text.match(/\b[A-Z][a-z]+\b/g);//ползвам метода за мачване
// console.log([...regexText]);//разпечатва като масив
//други методи по стринг

let newStr = "Stanimir";
let regex1 = /\b[A-Z][a-z]+\b/g;
let result1 = newStr.match(regex1);//мачвам по регекс.Ако е глобално g ще върне всички съвпадения,ако ли не само първото
let result2 = newStr.split(regex1);//сплитвам по регекс
let result3 = newStr.replace(regex1,"*");//заменям мачовете с "*"
console.log(result1);//['Stanimir']
console.log(result2);//['', '']
console.log(result3);//*
// други методи са по регекс за разлика от горните ,които бяха по текст
let res1=regex1.test(newStr);//true има ли този регекс в текста стринг? да
let res2=regex1.exec(newStr);//null
console.log(res1);
console.log(res2);
