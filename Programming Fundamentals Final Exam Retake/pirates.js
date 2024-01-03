function pirates(input) {
    let target = [];
    for (const line of input) {
        if (line === "Sail") {
            break;
        }
        let tokens = line.split("||");
        let town = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        let currTownIndex = -1;
        let currTown = target.filter((obj, i) => {
            if (obj.town === town) {
                currTownIndex = i;
            }
            return obj.town === town;
        });
        if (currTown.length === 0) {
            target.push({
                town,
                population,
                gold
            })
        } else {
            target[currTownIndex].population += population;
            target[currTownIndex].gold += gold;
        }



    }
    let nextPartOfInput = input.indexOf("Sail") + 1;
    for (let i = nextPartOfInput; i < input.length; i++) {
        let line = input[i];
        if (line === "End") {
            break;
        }
        let tokens = line.split("=>");
        let action = tokens[0];
        let town;
        let people;
        let gold;
        switch (action) {
            case "Plunder":
                town = tokens[1];
                people = Number(tokens[2]);
                gold = Number(tokens[3]);
                for (let j = 0; j < target.length; j++) {
                    let currentTown = target[j];
                    if (currentTown.town === town) {
                        currentTown.population -= people;
                        currentTown.gold -= gold;
                        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                    }
                    if (currentTown.town === town && (currentTown.population <= 0 || currentTown.gold <= 0)) {
                        console.log(`${town} has been wiped off the map!`);
                        target.splice(j, 1);
                    }

                }
                break;
            case "Prosper":
                town = tokens[1];
                gold = Number(tokens[2]);
                if (gold < 0) {
                    console.log("Gold added cannot be a negative number!");
                    break;
                }
                for (let k = 0; k < target.length; k++) {
                    let currTown = target[k];
                    if (currTown.town === town) {
                        currTown.gold += gold;
                        console.log(`${gold} gold added to the city treasury. ${town} now has ${currTown.gold} gold.`);
                    }

                }

                break;
        }

    }

    if (target.length > 0) {
        let buff = `Ahoy, Captain! There are ${target.length} wealthy settlements to go to:\n`
        for (const obj of target) {
            buff += `${obj.town} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg\n`
        }
        console.log(buff);
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}


pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]));