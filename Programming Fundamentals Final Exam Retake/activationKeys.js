function activationKeys(input) {


    let activationKey = input.shift();
    let line = input.shift();

    while (line !== "Generate") {
        let tokens = line.split(">>>");
        let command = tokens[0];
        let values = tokens.slice(1);
        switch (command) {
            case "Contains":
                let substring = values[0];
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log("Substring not found!");
                }
                break;
            case "Flip":
                let UpperLower = values[0];
                let startIndex = Number(values[1]);
                let endIndex = Number(values[2]);
                let subsStr = activationKey.substring(startIndex, endIndex);

                if (UpperLower === "Upper") {
                    let modified = subsStr.toUpperCase();
                    activationKey = activationKey.substring(0, startIndex) + modified + activationKey.substring(endIndex);
                    console.log(activationKey);
                } else {
                    let modified = subsStr.toLowerCase();
                    activationKey = activationKey.substring(0, startIndex) + modified + activationKey.substring(endIndex);
                    console.log(activationKey);
                }
                break;
            case "Slice":
                let stratI = Number(values[0]);
                let endI = Number(values[1]);
                activationKey = activationKey.substring(0, stratI) + activationKey.substring(endI);
                console.log(activationKey);
                break;

        }
        line = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys(((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])));