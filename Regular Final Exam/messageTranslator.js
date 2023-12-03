function messageTranslator(input) {

    let textCount = Number(input.shift());
    let pattern = /([!])(?<command>[A-Z][a-z]{2,})\1:\[(?<word>[A-Z][a-zA-Z]{8,})\]/gm;
    let counter = 0;
    let buff = '';
    while (textCount != counter) {
        counter++;
        let line = input.shift();
        let matches = pattern.exec(line);
        if (matches) {
            let wordToTranslate = matches.groups.word;
            let commands = matches.groups.command;
            for (let i = 0; i < wordToTranslate.length; i++) {
                buff += wordToTranslate.charCodeAt(i) + " ";
            }
            console.log(`${commands}: ${buff}`);
        } else {
            console.log("The message is invalid");
        }

    }

}
messageTranslator((["2",

    "!Send!:[IvanisHere]",

    "*Time@:[Itis5amAlready"]));
console.log("----------");
messageTranslator((["3",

    "go:[outside]",

    "!drive!:YourCarToACarWash",

    "!Watch!:[LordofTheRings]"]));