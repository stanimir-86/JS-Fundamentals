
function destinationMapper(text) {

    let pattern = /([=/])(?<word1>[A-Z]{1}[A-Za-z]{2,})\1/gm;
    let resultOfDestinations = [];
    let sum = 0;
    let mathes = pattern.exec(text);
    while (mathes) {
        if (mathes) {
            let destination = mathes.groups.word1;
            resultOfDestinations.push(destination);
            let lengthOfDestination = destination.length
            sum += lengthOfDestination;
            mathes = pattern.exec(text);
        }

    }
    console.log(`Destinations: ${resultOfDestinations.join(", ")}`);
    console.log(`Travel Points: ${sum}`);
}

destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))