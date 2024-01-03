function solve(input) {

    let text = input[0];
    let totalCalls = 0;
    let temp = "";
    let pattern = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm;
    let match = pattern.exec(text);
    while (match) {

        let item = match.groups.item;
        let date = match.groups.date;
        let cal = Number(match.groups.calories);
        totalCalls += cal;
        temp += `Item: ${item}, Best before: ${date}, Nutrition: ${cal}\n`;
        match = pattern.exec(text);
    }
    let days = Math.floor(totalCalls / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(temp);
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])