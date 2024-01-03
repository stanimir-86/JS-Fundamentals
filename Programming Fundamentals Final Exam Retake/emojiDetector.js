function emojiDetector(input) {
    let text = input.shift();
    let treshHold = 1;
    let emojiCount = 0;
    let collEmojis = [];
    let digits = text.match(/\d/g);
    for (const digit of digits) {
        let numebr = Number(digit);
        treshHold *= numebr;
    }
    let emojiMathes = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/gm);
    for (const emojiMatch of emojiMathes) {
        emojiCount++;
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.name;
        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i);
        }
        if (emojiCoolnes >= treshHold) {
            collEmojis.push(emoji);
        }

    }

    console.log(`Cool threshold: ${treshHold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const emoji of collEmojis) {
        console.log(emoji);
    }
}
emojiDetector((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]));