function secretChat(array) {

    let secretMessage = array.shift();//по условие вземам секретното съобщение
    for (let i = 0; i < array.length; i++) {

        let tokens = array[i].split(":|:");//следващия ред след първа итерация сплитвам
        let command = tokens[0];//първи елемент от реда е команда
        let values = tokens.slice(1);//останалите елементи си ги вземам,като стойности в нов масив от данни със слайс

        switch (command) {
            case "ChangeAll": {
                let substring = values[0];
                let replacement = values[1];
                while (secretMessage.includes(substring)) {//въртя с цикъл докато в secretMessage открива substring
                    secretMessage = secretMessage.replace(substring, replacement);//за да запазя стойноста я презаписвам,а не прилагам метода директно.
                };
                console.log(secretMessage);//по условие иска да разпечатам директно всяка валидна операция.
                break;//получавам субстринг и при всички съвпадения заменям V с l
            }
            case "Reverse": {//първо проверка дали имаме даден substring по условие от задачата
                let substring = values[0];//в тази команда получавам само една стойност и си я вземам [0]

                if (secretMessage.includes(substring)) {
                    secretMessage = secretMessage.replace(substring, "");//по условие заменям първото съвпадение.Реплейс работи от ляво надясно с първото съвпадение
                    //в горната команда беше всички съвпадения и там е с цикъл,тук е само първото
                    let reversed = reverseStr(substring);//с помощната функция си обърнах текста и я запазих в променлива
                    secretMessage += reversed;//обърнатия текст се добавя в секрет месидж
                    console.log(secretMessage);
                } else {
                    console.log('error');//по условие ако субстринга е невалиден печатам error
                }

                break;
            }
            case "InsertSpace": {
                let index = values[0];//по условие получавам един параметър индекс и си го вземам в променлива
                let leftSide = secretMessage.substring(0, index);//за да мога да го поставя на правилното място,разрязвам текста,като вземам лявата страна
                let rightSide = secretMessage.substring(index);//и дясната страна
                secretMessage = leftSide + " " + rightSide;//между двете страни на текста вмъквам спейса.
                console.log(secretMessage);
                break;
            }
            case "Reveal": {
//по условие това е последната команда и отпечатва резултат и приключва с return
                console.log(`You have a new text message: ${secretMessage}`);
                return;
                
            }
        }

    }
    function reverseStr(text) {//функция за обръщане на текст
        return text.split('').reverse().join('');//първо сплитвам по "",това ми дава масив,който
        //мога да ревърсна(обърна) и накрая джойн "",за да го обърна към стринг отново от масив.

    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);