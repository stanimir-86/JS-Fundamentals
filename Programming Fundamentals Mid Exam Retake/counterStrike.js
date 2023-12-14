function counterStrike(input) {

    let initialEnergy = Number(input.shift());
    let winBattleCouunter = 0;
    for (let i = 0; i < input.length; i++) {
        let element = input[i];

        if (element === "End of battle") {
            console.log(`Won battles: ${winBattleCouunter}. Energy left: ${initialEnergy}`);
            return;
        }
        if (initialEnergy <= 0) {
            console.log(`Not enough energy! Game ends with ${winBattleCouunter} won battles and ${initialEnergy} energy`);
            return;
        }
        element = Number(input[i]);
        initialEnergy -= element;
        winBattleCouunter++;
        if (winBattleCouunter % 3 === 0) {
            initialEnergy += winBattleCouunter;
        }
    }
}


counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]))