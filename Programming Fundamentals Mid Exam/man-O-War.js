function manOWar(input) {

    let pirateShip = input.shift().split(">").map(x => Number(x));//вземам си елемента от масива с shift()
    //сплитвам го по >,защото така са разделени елементите.
    //мапвам елементите към числа,защото първоначалния масив е стрингов.
    let warShip = input.shift().split(">").map(x => Number(x));
    let maxHelth = Number(input.shift());

    //в input са ми останали командите,след като съм си взел двата елемента с shift().
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let values = tokens.slice(1).map(x => Number(x));



        switch (command) {
            case "Fire": fire(warShip, values[0], values[1]); break;
            case "Defend": defend(pirateShip, values[0], values[1], values[2]); break;
            case "Repair": repair(pirateShip, values[0], values[1], maxHelth); break;
            case "Status": stastus(pirateShip, maxHelth); break;
            case "Retire": {
                console.log(`Pirate ship status: ${pirateShip.reduce((a, c) => a + c, 0)}`);
                console.log(`Warship status: ${warShip.reduce((a, c) => a + c, 0)}`);
                return;
            }
        }
        if (isShipDead(warShip)) {
            console.log("You won! The enemy ship has sunken.");
            break;
        }

        if (isShipDead(pirateShip)) {
            console.log("You lost! The pirate ship has sunken.");
            break;
        }
    }

    function isShipDead(ship) {
        let deadSections = ship.filter(x => x <= 0);
        return deadSections.length > 0;
    }

    function fire(warShip, index, damage) {
        if (index >= 0 && index < warShip.length) {
            warShip[index] -= damage;
        }
    }

    function defend(pirateShip, startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;

            }

        }
    }
    function repair(ship, index, heal, maxHelth) {
        if (index >= 0 && index < ship.length) {
            let missingHelth = maxHelth - ship[index];
            ship[index] += Math.min(missingHelth, heal);
        }
    }
    function stastus(ship, maxHelth) {
        let damageSections = ship.filter(x => x < (maxHelth * 0.2));
        console.log(`${damageSections.length} sections need repair.`);
    }
}
manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]));
manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]));