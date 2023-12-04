function replaceRepeatingChars(text) {
    let output = text[0];
    let textLength = text.length;
    for (let i = 1; i < textLength; i++) {
        let currElement = text[i];
        let prevlement = text[i - 1];
        if (currElement !== prevlement) {
            output += currElement
        }

    }
    console.log(output);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');