function muOnline(line) {
    let helth = 100;
    let bitcoins = 0;
    let rooms = line.split("|");//входа е стрингов масив отделен с |.Сплитвам го по |,за да получа масив с данни за всяк стая.
    for (let i = 0; i < rooms.length; i++) {//ще обхождаме всяка стая.Тук не знаем колко са стаите.И ще въртим по дължината на масива.
        let room = rooms[i];//сегашния елемент от масива при обхождане е с два елемента rat и 10;
        let tokens = room.split(" ")//сплитвам ги по " ",защото това ги разделя едно от друго.
        let command = tokens[0];//мога да го извикам и с индексация token[0] и с shift взема първия елемент.(едно и също)тук е текст и го оставям в текс
        let value = Number(tokens[1]);//викам си втория елемент число от разделените елементи.

        if (command === 'potion') {
            let missingHelth = 100 - helth;//смятъм си колко кръв ми липсва
            let restoreHelth = Math.min(missingHelth, value);//използвам Math.min защото ако кръвта ми е 80 а полшъна 30 искма да хийлне 20 не 30.
            //взел съм двете стойности и ползвам по лаката от двете с math.min
            helth += restoreHelth;
            console.log(`You healed for ${restoreHelth} hp.`);
            console.log(`Current health: ${helth} hp.`);
        } else if (command === "chest") {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            helth -= value;

            if (helth <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);//очаква се да получа стая която отговаря на елемент,не на индекса,на който се намира.Затова добавям 1 към него.
                return;
            }
            console.log(`You slayed ${command}.`);
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${helth}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");