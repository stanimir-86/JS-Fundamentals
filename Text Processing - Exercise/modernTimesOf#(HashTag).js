function modernTimesOf(text) {
    let result = [];
    let splited = text.split(" ").filter(el => el.startsWith("#") && el.length > 1);

    for (let words of splited) {

        let isSpecial = true;
        words = words.substring(1)

        for (let char of words) {
            char = char.toLowerCase();
            if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            result.push(words);
        }

    }
    console.log(result.join("\n"));
}
modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia')