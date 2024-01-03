function worldTour(input) {

    let stops = input.shift();
    let line = input.shift();
    while (line !== "Travel") {
        let tokens = line.split(":");
        let command = tokens[0];
        switch (command) {
            case "Add Stop": {
                let index = Number(tokens[1]);
                let string = tokens[2];
                if (index >= 0 && index < stops.length) {
                    stops = stops.substring(0, index) + string + stops.substring(index, stops.length);
                }
                console.log(stops);
                break;
            }
            case "Remove Stop": {
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                if (startIndex <= endIndex && startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                    stops = stops.substring(0, startIndex) + stops.substring(endIndex + 1,stops.length);
                    
                }
                console.log(stops);
                break;
            }
            case "Switch": {
                let oldString = tokens[1];
                let newString = tokens[2];
                stops = stops.split(oldString).join(newString)
                // while (stops.includes(oldString)) {
                //     stops = stops.replace(oldString, newString);
                // }
                console.log(stops);
                break;
            }

        }
        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania:Azərbaycan",
    "Travel"]);