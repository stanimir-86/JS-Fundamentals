function cardGame(input) {

    let cardPowerEsNum = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }

    let cardTypeEsNum = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }
    let playesr = new Map();

    for (let line of input) {
        let [playerName, cards] = line.split(": ");
        if (!playesr.has(playerName)) {
            playesr.set(playerName, new Set());
        }
        cardsArray = cards.split(", ");
        for (const card of cardsArray) {
            playesr.get(playerName).add(card);
        }
    }
    for (const playerInfo of Array.from(playesr)) {
        let sum = 0;
        for (const card of Array.from(playerInfo[1])) {
            let cardInfo = card.split("");
            let powerAsString = cardInfo.splice(0, cardInfo.length - 1).join("");
            let typeAsString = cardInfo[cardInfo.length - 1];
            let power = cardPowerEsNum[powerAsString];
            let type = cardTypeEsNum[typeAsString];
            sum += power * type;
        }
        console.log(`${playerInfo[0]}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);