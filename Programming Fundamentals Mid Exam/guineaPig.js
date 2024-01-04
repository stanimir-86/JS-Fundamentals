function guineaPig(input) {

    let food = Number(input.shift()) * 1000;//вземамне на всеки елемент от масива и го модифицираме
    let hay = Number(input.shift()) * 1000;
    let cover = Number(input.shift()) * 1000;
    let weight = Number(input.shift()) * 1000;
    let hasToGoToStore = false;

    for (let i = 1; i <= 30; i++) {//въртим за 30 дни
        food -= 300;//отнемам всеки ден по 300гр храна
        if (i % 2 === 0) {//всеки втори ден
            hay -= food * 0.05;//отнемам от сламат ,като умножавам храната 5%  
        }
        if (i % 3 === 0) {//всеки трети ден
            cover -= weight / 3;//вземам една/трета от тежеста на морското свинче
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            hasToGoToStore = true;//по условие ако някой от параметрите е под 0,прекъсваме и отиваме до магазина.
            break;
            //тази проверка я правя тук,защото не е посочено свършила е дадена храна прекъсни,а за всички.
        }
    }
    return hasToGoToStore
        ? `Merry must go to the pet store!`
        : `Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`;

}
console.log(guineaPig((["10",
    "5",
    "5.2",
    "1"])));