function solve(input) {
    let result = new Map();
    let countOfpiece = Number(input.shift());
    for (let i = 0; i < countOfpiece; i++) {
        let [piece, composer, key] = input.shift().split('|');
        result.set(piece, []);
        result.get(piece).push(composer);
        result.get(piece).push(key);
    }
    let line = input.shift();
    while (line != 'Stop') {
        let tokens = line.split('|');
        let command = tokens.shift();
        switch (command) {
            case "Add": {
                let piece = tokens[0];
                let composer = tokens[1];
                let key = tokens[2];
                if (!result.has(piece)) {
                    result.set(piece, []);
                    result.get(piece).push(composer);
                    result.get(piece).push(key);
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            }
            case "Remove": {
                let piece = tokens[0];
                if (!result.has(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    console.log(`Successfully removed ${piece}!`);
                    result.delete(piece);
                }
                break;
            }
            case "ChangeKey": {
                let piece = tokens[0];
                let newKey = tokens[1];
                if (!result.has(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    result.get(piece)[1] = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                }
                break;
            }
        }

        line = input.shift();
    }
    for (const [piece, pieceInfo] of result) {
        console.log(`${piece} -> Composer: ${pieceInfo[0]}, Key: ${pieceInfo[1]}`);
    }
}