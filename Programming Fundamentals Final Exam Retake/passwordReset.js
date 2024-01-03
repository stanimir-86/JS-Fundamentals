function passwordReset(input) {

    let text = input.shift();
    let line = input.shift();
    while (line !== "Done") {
        let tokens = line.split(" ");
        let command = tokens[0];
        switch (command) {
            case "TakeOdd":
                let newText = "";
                for (let i = 0; i < text.length; i++) {
                    if (!(i % 2 === 0)) {
                        newText += text[i];
                    }
                }
                text = newText;
                console.log(text);
                break;
            case "Cut":
                let index = Number(tokens[1]);
                let length = Number(tokens[2]);
                let replaicment = text.substring(index, index + length);

                text = text.replace(replaicment, "");
                console.log(text);

                break;
            case "Substitute":
                let substring = tokens[1];
                let substitute = tokens[2];
                if (text.includes(substring)) {
                    while (text.includes(substring)) {

                        text = text.replace(substring, substitute);
                    }
                    console.log(text);
                } else {
                    console.log("Nothing to replace!");
                }

                break;
        }

        line = input.shift();
    }
    console.log(`Your password is: ${text}`);
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));