function hogwarts(input) {

    let spellToDiscribe = input.shift();
    let commands = input.shift();

    while (commands != "Abracadabra") {
        let tokens = commands.split(" ");
        let command = tokens.shift();

        switch (command) {
            case "Abjuration": {

                let uppercaseText = spellToDiscribe.replace(/[a-z]/g, (match) => match.toUpperCase());
                spellToDiscribe = uppercaseText;
                console.log(spellToDiscribe);

                break;
            }
            case "Necromancy": {
                let lowercaseText = spellToDiscribe.replace(/[A-Z]/g, (match) => match.toLowerCase());
                spellToDiscribe = lowercaseText;
                console.log(spellToDiscribe);

                break;
            }
            case "Illusion": {
                let index = Number(tokens[0]);
                let leter = tokens[1];
                if (index >= 0 && index < spellToDiscribe.length) {
                    let textArray = spellToDiscribe.split('');
                    textArray[index] = leter;
                    spellToDiscribe = textArray.join('');
                    console.log('Done!');
                } else {
                    console.log("The spell was too weak.");
                }

                break;
            }
            case "Divination": {
                let firstSubstring = tokens[0];
                let secondSubstring = tokens[1];
                if (spellToDiscribe.toLowerCase().includes(firstSubstring.toLowerCase())) {
                    let result = '';
                    for (let i = 0; i < spellToDiscribe.length; i++) {
                        if (firstSubstring.length === 1) {
                            if (spellToDiscribe[i].toLowerCase() === firstSubstring.toLowerCase()) {
                                result += secondSubstring;
                            } else {
                                result += spellToDiscribe[i];
                            }
                        } else {

                            spellToDiscribe = spellToDiscribe.split(firstSubstring).join(secondSubstring);
                        }

                    }
                    if (firstSubstring.length === 1) {
                        spellToDiscribe = result;

                    }
                } else {
                    break;
                }
                console.log(spellToDiscribe);
                break;
            }
            case "Alteration": {
                let substring = tokens[0];
                if (spellToDiscribe.includes(substring)) {
                    spellToDiscribe = spellToDiscribe.replace(substring, '');
                }
                console.log(spellToDiscribe);
                break;
            }
            default:

                console.log('The spell did not work!');

                break;
        }


        commands = input.shift();
    }

}
hogwarts((["A7ci0",

    "Illusion 1 c",

    "Illusion 4 o",

    "Abjuration",
    "Divination c o",

    "Abracadabra"]));
// console.log("-------------------");
// hogwarts(["TR1GG3R",

//     "Necromancy",

//     "Illusion 8 m",

//     "Illusion 9 n",

//     "Abracadabra"]);
// console.log("-------------------");
// hogwarts(["SwordMaster",

//     "Target Target Target",

//     "Abjuration",

//     "Necromancy",

//     "Alteration master",

//     "Abracadabra"]);