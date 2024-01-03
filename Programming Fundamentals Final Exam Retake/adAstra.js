function adAstra(data) {
    let text = data[0];
    let pattern = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm;

    let match = pattern.exec(text);
    let totalCall = 0;
    let food = 0;
    let buff = '';
    while (match) {


        let item = match.groups["item"];
        let date = match.groups["date"];
        let callories = Number(match.groups["calories"]);
        totalCall += callories
        buff += `Item: ${item}, Best before: ${date}, Nutrition: ${callories}\n`
        match = pattern.exec(text);
    }
    food = Math.floor(totalCall / 2000);
    console.log(`You have food to last you for: ${food} days!`);
    console.log(buff);
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);