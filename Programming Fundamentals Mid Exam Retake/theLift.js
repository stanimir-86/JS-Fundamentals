function findPlaceForTourist(input) {
    let people = Number(input.shift());
    let wagons = input.shift().split(" ").map(Number); 
    let isLiftFull = true;
    let hasEmptySpots = false;

    for (let i = 0; i < wagons.length; i++) {
        let availableSpace = 4 - wagons[i]; // Calculate available space in the current wagon

        if (availableSpace > 0) {
            isLiftFull = false; // At least one wagon has empty spots
        }

        if (people === 0) {
            // No more people in the queue
            if (availableSpace > 0) {
                // There are empty spots in the wagon(s)
                wagons[i] += availableSpace-4; // Fill the empty spots
                hasEmptySpots = true;
            }
        } else {
            // There are still people in the queue
            if (availableSpace > 0) {
                // There is available space in the current wagon
                let peopleToAdd = Math.min(availableSpace, people); // Determine how many people can be added
                wagons[i] += peopleToAdd; // Add people to the wagon
                people -= peopleToAdd; // Decrease the number of people in the queue
                hasEmptySpots = true;
            }
        }
    }

    if (people === 0 && isLiftFull) {
        // No more people and all wagons are full
        console.log(wagons.join(" "));
    } else if (people === 0 && hasEmptySpots) {
        // No more people and there are empty spots in the wagons
        console.log(`The lift has empty spots!\n${wagons.join(" ")}`);
    } else if (people > 0) {
        // There are still people in the queue and no more available space
        console.log(`There isn't enough space! ${people} people in a queue!\n${wagons.join(" ")}`);
    }
}
findPlaceForTourist(["15", "0 0 0 0 0"]);
findPlaceForTourist(["20", "0 2 0"]);