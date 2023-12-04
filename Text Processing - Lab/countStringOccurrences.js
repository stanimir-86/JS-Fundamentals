function countStringOccurrences(text, searchingWord) {
    let count = 0;
    let splited = text.split(" ");
    for (let i = 0; i < splited.length; i++) {
        let element = splited[i];
        if (element === searchingWord) {
            count++;
        }

    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence',

    'is');