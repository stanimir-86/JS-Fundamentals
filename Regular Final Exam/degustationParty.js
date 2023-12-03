function degustationParty(input) {
    let guests = new Map();
    let unlikedMeals = 0;

    let command = input.shift().split("-");

    while (command[0] != "Stop") {
        if (command[0] === "Like") {
            if (!guests.has(command[1])) {
                guests.set(command[1], []);
                guests.get(command[1]).push(command[2]);
            } else {
                let meals = guests.get(command[1]);
                if (!meals.includes(command[2])) {
                    guests.get(command[1]).push(command[2]);
                }
            }
        } else if (command[0] === "Dislike") {
            if (!guests.has(command[1])) {
                console.log(command[1] + " is not at the party.");
            } else if (!guests.get(command[1]).includes(command[2])) {
                console.log(command[1] + " doesn't have the " + command[2] + " in his/her collection.");
            }

            else if (guests.get(command[1]).includes(command[2])) {
                guests.set(
                    command[1],
                    guests.get(command[1]).filter((x) => !x.includes(command[2]))
                );
                unlikedMeals += 1;
                console.log(command[1] + " doesn't like the " + command[2] + ".");
            }
        }

        command = input.shift().split("-");
    }

    for (let key of guests.keys()) {
        let meals = guests.get(key);
        console.log(key + ": " + meals.join(", ", meals));
    }
    console.log("Unliked meals: " + unlikedMeals);
}
degustationParty(["Like-Krisi-shrimps", "Like-Krisi-soup", "Like-Penelope-dessert", "Like-Misho-salad", "Stop"])