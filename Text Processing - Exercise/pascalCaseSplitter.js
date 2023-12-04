function pascalCaseSplitter(text) {
    let result = [];
    let startIndex = 0;
    for (let i = 1; i < text.length; i++) {

        const char = text[i];
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            result.push(text.substring(startIndex, i));
            startIndex = i;
        }

    }

    result.push(text.substring(startIndex));
    console.log(result.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');