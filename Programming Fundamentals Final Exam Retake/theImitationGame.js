function theImitationGame(input) {

    let text = input.shift();

    for (const line of input) {
        if (line === "Decode") {
            break;
        }
        let tokens = line.split("|");
        let action = tokens[0];
        let values = tokens.slice(1);

        switch (action) {
            case "ChangeAll":
                let substring = values[0];
                let replacement = values[1];
                while (text.includes(substring)) {
                    text = text.replace(substring, replacement);
                }
                break;
            case "Insert":
                let index = Number(values[0]);
                let value = values[1];
                text = text.substring(0, index) + value + text.substring(index);
                break;
            case "Move":
                let n = Number(values[0]);
                for (let i = 0; i < n; i++) {
                    let firstLetter = text.substring(0, 1);
                    let restOfTheText = text.substring(1);
                    text = restOfTheText + firstLetter;

                }
                break;
        }


    }
    console.log(`The decrypted message is: ${text}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])

    // function solve(input) {

    //     let message = input.shift();
    //     let instructions = input.shift();
    //     while (instructions !== "Decode") {
    //         let tokens = instructions.split('|');
    //         let command = tokens[0];
    //         switch (command) {
    //             case "Move":
    //                 let nLeters = Number(tokens[1]);
    //                 message = message.substring(nLeters) + message.substring(0, nLeters);
    //                 break;
    //             case "Insert":
    //                 let index = Number(tokens[1]);
    //                 let value = tokens[2];
    //                 message = message.substring(0, index) + value + message.substring(index);
    //                 break;
    //             case "ChangeAll":
    //                 let substring = tokens[1];
    //                 let replacement = tokens[2];
    //                 while (message.includes(substring)) {
    //                     message = message.replace(substring, replacement);
    //                 }
    //                 break;
    //         }
    //         instructions = input.shift();
    //     }
    //     console.log(`The decrypted message is: ${message}`);
    // }