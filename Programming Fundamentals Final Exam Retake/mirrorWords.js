function mirrorWords(input) {

    let wordsFromText = input.shift();
    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/gm;
    let count = 0;
    let result = [];
    let mathes = pattern.exec(wordsFromText);
    while (mathes) {
        count++;
        let firstWord = mathes.groups.word1;
        let secondWord = mathes.groups.word2;
        let reversed = firstWord.split("").reverse().join("");
        if (reversed === secondWord) {
            result.push(`${firstWord} <=> ${secondWord}`)
        }

        mathes = pattern.exec(wordsFromText);
    }
    if (count === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${count} word pairs found!`);
    }
    if (result.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log(`The mirror words are:\n${result.join(", ")}`);
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('---------------');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']
);
console.log('---------------');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']
);